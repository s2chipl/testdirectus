// src/components/TaskCard.tsx
"use client";

interface Task {
    id: string;
    title: string;
    description: string;
    due_date: string;
    assign_to: string;
    projects?: string;
}

export default function TaskCard({ task }: { task: Task }) {
    return (
        <div className="bg-white shadow rounded-lg p-5 hover:shadow-xl transition-all duration-300">
            <h4 className="text-lg font-bold text-purple-700 mb-2">
                {task.title}
            </h4>
            <p
                className="text-gray-700 text-sm mb-2"
                dangerouslySetInnerHTML={{ __html: task.description || "" }}
            ></p>
            <p className="text-gray-500 text-xs">
                Deadline: {new Date(task.due_date).toLocaleDateString()}
            </p>
            <p className="text-gray-400 text-xs">Assigned To: {task.assign_to}</p>
        </div>
    );
}
