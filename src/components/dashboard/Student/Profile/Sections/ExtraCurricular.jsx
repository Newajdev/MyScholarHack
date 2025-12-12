"use client";
import React from 'react';
import SectionWrapper from '../SectionWrapper';

export default function ExtraCurricular() {
    return (
        <SectionWrapper
            title="Extra Curricular Activities"
            description="Highlight your involvement in clubs, sports, and other organizations."
            onSave={() => console.log("Saving Extra Curricular...")}
        >
            <form className="space-y-6">
                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 disabled:bg-white disabled:border-0 disabled:p-0">
                        <h3 className="font-semibold text-gray-800 mb-3">Activity 1</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-600">Activity Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:text-gray-900" placeholder="e.g. Debate Club" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-600">Role/Position</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:text-gray-900" placeholder="e.g. President" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-600">Description</label>
                            <textarea className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none min-h-[80px] disabled:bg-white disabled:pointer-events-none disabled:border-0 disabled:px-0 disabled:py-0 disabled:resize-none disabled:text-gray-900" placeholder="Briefly describe your involvement..."></textarea>
                        </div>
                    </div>

                    <button type="button" className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-semibold hover:border-[#FFCA42] hover:text-[#FFCA42] transition-colors text-sm disabled:hidden">
                        + Add Another Activity
                    </button>
                </div>
            </form>
        </SectionWrapper>
    );
}
