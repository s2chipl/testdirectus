// src/components/ContactCard.tsx
"use client";

interface Contact {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    job_title: string;
    avatar?: string;
    company?: string;
}

export default function ContactCard({ contact }: { contact: Contact }) {
    return (
        <div className="bg-white shadow rounded-lg p-5 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-3">
                {contact.avatar && (
                    <img
                        src={`http://localhost:8055/assets/${contact.avatar}`}
                        alt={`${contact.first_name} ${contact.last_name}`}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                )}
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                        {contact.first_name} {contact.last_name}
                    </h4>
                    <p className="text-gray-500 text-sm">{contact.job_title}</p>
                </div>
            </div>
            <p className="text-gray-600 text-sm">Email: {contact.email}</p>
            <p className="text-gray-600 text-sm">Phone: {contact.phone}</p>
        </div>
    );
}
