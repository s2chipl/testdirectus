// src/components/ProjectCard.tsx
"use client";

import { Project } from "../lib/directus";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-white shadow rounded-lg p-5 hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-bold text-green-700 mb-2">{project.name}</h3>
            <p
                className="text-gray-600 text-sm mb-2"
                dangerouslySetInnerHTML={{ __html: project.description || "" }}
            ></p>
            <p className="text-gray-500 text-xs">
                Từ ngày {project.start_date} đến {project.end_date}
            </p>
        </div>
    );
}
