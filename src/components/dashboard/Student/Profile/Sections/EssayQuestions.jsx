"use client";
import React from 'react';
import SectionWrapper from '../SectionWrapper';

export default function EssayQuestions() {
    return (
        <SectionWrapper
            title="Essay Specific Questions"
            description="Pre-answer common essay prompts to speed up generation."
            onSave={() => console.log("Saving Essay Questions...")}
        >
            <form className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">"Why do you deserve this scholarship?"</label>
                        <textarea className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all placeholder:text-gray-400 min-h-[100px] disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:resize-none disabled:text-gray-900" placeholder="Draft your answer..."></textarea>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">"Describe a significant challenge you overcame."</label>
                        <textarea className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all placeholder:text-gray-400 min-h-[100px] disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:resize-none disabled:text-gray-900" placeholder="Draft your answer..."></textarea>
                    </div>
                </div>
            </form>
        </SectionWrapper>
    );
}
