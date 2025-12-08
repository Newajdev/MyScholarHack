"use client";
import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";

export default function Essays() {
    const [essayPrompt, setEssayPrompt] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isRecording, setIsRecording] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [audioURL, setAudioURL] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const fileInputRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const recordingIntervalRef = useRef(null);
    const audioRef = useRef(null);
    const streamRef = useRef(null);

    useEffect(() => {
        return () => {
            if (recordingIntervalRef.current) {
                clearInterval(recordingIntervalRef.current);
            }
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        const validFiles = files.filter(file => {
            const isImage = file.type.startsWith('image/');
            const isPDF = file.type === 'application/pdf';
            return isImage || isPDF;
        });

        setUploadedFiles(prev => [...prev, ...validFiles]);
    };

    const removeFile = (index) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;

            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                const url = URL.createObjectURL(audioBlob);
                setAudioURL(url);

                if (streamRef.current) {
                    streamRef.current.getTracks().forEach(track => track.stop());
                }
            };

            mediaRecorder.start();
            setIsRecording(true);
            setIsPaused(false);

            recordingIntervalRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1);
            }, 1000);
        } catch (error) {
            console.error('Error accessing microphone:', error);
            alert('Could not access microphone. Please grant permission.');
        }
    };

    const togglePauseRecording = () => {
        if (!mediaRecorderRef.current) return;

        if (isPaused) {
            mediaRecorderRef.current.resume();
            recordingIntervalRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1);
            }, 1000);
            setIsPaused(false);
        } else {
            mediaRecorderRef.current.pause();
            if (recordingIntervalRef.current) {
                clearInterval(recordingIntervalRef.current);
            }
            setIsPaused(true);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        if (recordingIntervalRef.current) {
            clearInterval(recordingIntervalRef.current);
        }
        setIsRecording(false);
        setIsPaused(false);
    };

    const deleteRecording = () => {
        if (audioURL) {
            URL.revokeObjectURL(audioURL);
        }
        setAudioURL(null);
        setRecordingTime(0);
        setIsPlaying(false);
    };

    const togglePlayAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-[600px]">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-[44px] font-bold text-[#2D3748] mb-2">
                        Create a Essay
                    </h1>
                    <p className="text-[17px] text-[#718096]">
                        Here's your progress this week.
                    </p>
                </div>

                {/* Input Box */}
                <div className="bg-white rounded-[20px] border border-[#E2E8F0] p-8 mb-6 min-h-[200px] relative">
                    <textarea
                        value={essayPrompt}
                        onChange={(e) => setEssayPrompt(e.target.value)}
                        placeholder="Ask anything..."
                        className="w-full h-[120px] resize-none focus:outline-none text-[#4A5568] placeholder-[#A0AEC0] text-[15px] bg-transparent"
                    />

                    {/* Icons at bottom right - always visible */}
                    <div className="absolute bottom-8 right-8 flex items-center gap-2">
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*,.pdf"
                            multiple
                            onChange={handleFileUpload}
                            className="hidden"
                        />
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="text-[#A0AEC0] hover:text-[#718096] transition-colors"
                            title="Upload files"
                        >
                            <Icon icon="mdi:attachment" width={22} height={22} />
                        </button>

                        <button
                            onClick={isRecording ? stopRecording : startRecording}
                            className="bg-[#F6C844] hover:bg-[#EDB91C] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                            title={isRecording ? "Stop recording" : "Start recording"}
                        >
                            <Icon
                                icon={isRecording ? "mdi:stop" : "mdi:microphone"}
                                width={22}
                                height={22}
                                className="text-[#2D3748]"
                            />
                        </button>
                    </div>
                </div>

                {/* Uploaded Files - Show below input if present */}
                {uploadedFiles.length > 0 && (
                    <div className="mb-6 space-y-2">
                        <p className="text-sm font-medium text-gray-700 mb-2">Uploaded Files:</p>
                        {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg">
                                <Icon
                                    icon={file.type === 'application/pdf' ? 'mdi:file-pdf-box' : 'mdi:image'}
                                    width={24}
                                    height={24}
                                    className={file.type === 'application/pdf' ? 'text-red-500' : 'text-blue-500'}
                                />
                                <span className="text-sm text-gray-700 flex-1 truncate">{file.name}</span>
                                <button
                                    onClick={() => removeFile(index)}
                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <Icon icon="mdi:close-circle" width={20} height={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Recording Controls - Show below input when recording */}
                {isRecording && (
                    <div className="mb-6">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`w-3 h-3 bg-red-500 rounded-full ${!isPaused && 'animate-pulse'}`}></div>
                                <span className="text-sm font-semibold text-red-700">
                                    {isPaused ? 'Paused' : 'Recording'}
                                </span>
                                <span className="text-sm font-mono text-red-600">{formatTime(recordingTime)}</span>
                            </div>

                            <button
                                onClick={togglePauseRecording}
                                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                            >
                                <Icon icon={isPaused ? "mdi:play" : "mdi:pause"} width={18} height={18} />
                                {isPaused ? 'Resume' : 'Pause'}
                            </button>
                        </div>
                    </div>
                )}

                {/* Audio Playback - Show below input when audio exists */}
                {audioURL && !isRecording && (
                    <div className="mb-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-center gap-3 mb-3">
                                <Icon icon="mdi:microphone" width={20} height={20} className="text-blue-600" />
                                <span className="text-sm font-semibold text-blue-700">Recorded Audio</span>
                                <span className="text-sm font-mono text-blue-600">{formatTime(recordingTime)}</span>
                            </div>

                            <audio
                                ref={audioRef}
                                src={audioURL}
                                onEnded={() => setIsPlaying(false)}
                                className="hidden"
                            />

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={togglePlayAudio}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                                >
                                    <Icon icon={isPlaying ? "mdi:pause" : "mdi:play"} width={18} height={18} />
                                    {isPlaying ? 'Pause' : 'Play'}
                                </button>
                                <button
                                    onClick={deleteRecording}
                                    className="flex items-center gap-2 px-4 py-2 bg-white text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
                                >
                                    <Icon icon="mdi:delete" width={18} height={18} />
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Generate Button */}
                <button
                    className="w-full bg-[#F6C844] hover:bg-[#EDB91C] text-[#2D3748] font-semibold py-4 rounded-full transition-colors text-[16px]"
                >
                    Essay Generate
                </button>
            </div>
        </div>
    );
}
