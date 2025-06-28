"use client";

import React from "react";

/**
 * Section container with gradient heading and white card background
 */
export function SectionContainer({
    title,
    gradient,
    children,
}: {
    title: string;
    gradient: string;
    children: React.ReactNode;
}) {
    return (
        <section className="bg-white/80 rounded-xl shadow p-8 max-w-screen-2xl mx-auto mb-12">
            <h2
                className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${gradient} mb-2`}
            >
                {title}
            </h2>
            <div
                className={`h-1 w-24 bg-gradient-to-r ${gradient} rounded mb-8`}
            ></div>
            {children}
        </section>
    );
}

/**
 * Wrapper for grid container
 */
export function GridContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {children}
        </div>
    );
}

/**
 * Wrapper to add hover scale effect
 */
export function HoverCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="hover:scale-[1.03] transform transition duration-300">
            {children}
        </div>
    );
}

/**
 * Loading text component
 */
export function LoadingText({ label }: { label: string }) {
    return (
        <p className="text-gray-600 text-center animate-pulse">{label}</p>
    );
}
