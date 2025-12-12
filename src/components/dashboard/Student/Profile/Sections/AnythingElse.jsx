"use client";
import React from 'react';
import SectionWrapper from '../SectionWrapper';

export default function AnythingElse() {
    return (
        <SectionWrapper
            title="Anything Else"
            description="Is there anything else you want to share that didn't fit elsewhere?"
            onSave={() => console.log("Saving Anything Else...")}
        >
            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Additional Information</label>
                    <textarea className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all placeholder:text-gray-400 min-h-[150px] resize-y disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:resize-none disabled:text-gray-900" placeholder="Use this space to tell us anything else regarding your profile..."></textarea>
                </div>
            </form>
        </SectionWrapper>
    );
}
