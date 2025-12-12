"use client";
import Link from 'next/link';
import { Icon } from '@iconify/react';
import PrimaryBtn from "@/components/landing/PrimaryBtn";
import { cn } from "@/lib/utils";

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50/50 p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFFAEC] mb-4">
                            <Icon icon="solar:user-plus-bold" className="text-[#FFCA42] text-xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
                        <p className="text-gray-500 text-sm">Join us and start your journey</p>
                    </div>

                    <form className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Full Name</label>
                            <div className="relative group">
                                <input
                                    type="text"
                                    className={cn(
                                        "w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl",
                                        "focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all",
                                        "placeholder:text-gray-400 text-gray-900",
                                        "group-hover:border-gray-300"
                                    )}
                                    placeholder="John Doe"
                                />
                                <Icon icon="solar:user-circle-linear" className="absolute left-3.5 top-3.5 text-gray-400 text-lg transition-colors group-hover:text-gray-500" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Email Address</label>
                            <div className="relative group">
                                <input
                                    type="email"
                                    className={cn(
                                        "w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl",
                                        "focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all",
                                        "placeholder:text-gray-400 text-gray-900",
                                        "group-hover:border-gray-300"
                                    )}
                                    placeholder="name@example.com"
                                />
                                <Icon icon="solar:letter-linear" className="absolute left-3.5 top-3.5 text-gray-400 text-lg transition-colors group-hover:text-gray-500" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Password</label>
                            <div className="relative group">
                                <input
                                    type="password"
                                    className={cn(
                                        "w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl",
                                        "focus:ring-2 focus:ring-[#FFCA42]/20 focus:border-[#FFCA42] outline-none transition-all",
                                        "placeholder:text-gray-400 text-gray-900",
                                        "group-hover:border-gray-300"
                                    )}
                                    placeholder="••••••••"
                                />
                                <Icon icon="solar:lock-password-linear" className="absolute left-3.5 top-3.5 text-gray-400 text-lg transition-colors group-hover:text-gray-500" />
                            </div>
                        </div>

                        <PrimaryBtn
                            title="Sign Up"
                            style="w-full rounded-xl"
                            icon="solar:arrow-right-bold"
                        />
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-gray-500 text-sm">
                            Already have an account?{' '}
                            <Link href="/signin" className="font-semibold text-[#FFCA42] hover:text-[#eeb526] transition-colors">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
