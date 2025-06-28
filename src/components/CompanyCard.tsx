// src/components/CompanyCard.tsx
"use client";

import { Company } from "../lib/directus";

export default function CompanyCard({ company }: { company: Company }) {
    return (
        <div className="bg-white shadow rounded-lg p-5 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
                {company.logo && (
                    <img
                        src={`http://localhost:8055/assets/${company.logo}`}
                        alt={company.name}
                        className="w-12 h-12 rounded-full mr-3 object-cover"
                    />
                )}
                <h2 className="text-xl font-bold text-gray-800">
                    {company.name}
                </h2>
            </div>
            <p className="text-gray-600 text-sm">
                {company.address_line_1}, {company.city}, {company.state}
            </p>
            <p className="text-gray-500 text-sm">Postal code: {company.postal_code}</p>
        </div>
    );
}
