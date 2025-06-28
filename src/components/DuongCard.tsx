// src/components/DuongCard.tsx
"use client";

import { DuongItem } from "../lib/directus";

export default function DuongCard({ item }: { item: DuongItem }) {
    return (
        <div className="bg-white shadow rounded-lg p-5 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
                {item.avatar && (
                    <img
                        src={`http://localhost:8055/assets/${item.avatar}`}
                        alt={item.title}
                        className="w-12 h-12 rounded-full mr-3 object-cover"
                    />
                )}
                <h2 className="text-xl font-bold text-gray-800">
                    {item.title}
                </h2>
            </div>
            <p className="text-gray-600 text-sm mb-3">{item.content}</p>
            {item.dropdown && (
                <p className="text-blue-600 text-sm mt-2">Dropdown: {item.dropdown}</p>
            )}
        </div>
    );
}