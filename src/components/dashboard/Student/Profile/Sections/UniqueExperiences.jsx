"use client";
import React from 'react';
import SectionWrapper from '../SectionWrapper';

export default function UniqueExperiences() {
    return (
        <SectionWrapper
            title="Unique Experiences"
            description="Share distinct experiences that help tell your ambition story."
            onSave={() => console.log("Saving Unique Experiences...")}
        >
            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Experience Description</label>
                    <textarea className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all placeholder:text-gray-400 min-h-[150px] resize-y disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:resize-none disabled:text-gray-900" placeholder="Describe a significant event, challenge, or achievement that has shaped you..."></textarea>
                    <p className="text-xs text-gray-500 disabled:hidden">This helps our AI personalize your essays to be more authentic.</p>
                </div>
            </form>
        </SectionWrapper>
    );
}
