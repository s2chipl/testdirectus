"use client";

import { useEffect, useState } from "react";
import {
    getCompanies,
    getProjects,
    getContacts,
    getTasks,
    getCollectionItems,
    Company,
    Project,
    DuongItem,
} from "../lib/directus";
import CompanyCard from "../components/CompanyCard";
import ProjectCard from "../components/ProjectCard";
import ContactCard from "../components/ContactCard";
import TaskCard from "../components/TaskCard";
import DuongCard from "../components/DuongCard";
import {
    SectionContainer,
    GridContainer,
    HoverCard,
    LoadingText,
} from "../components/DesignUtils";
import LoadingOverlay from "../components/LoadingOverlay";

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const [companies, setCompanies] = useState<Company[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [contacts, setContacts] = useState<any[]>([]);
    const [tasks, setTasks] = useState<any[]>([]);
    const [duongData, setDuongData] = useState<DuongItem[]>([]);

    useEffect(() => {
        Promise.all([
            getCompanies().then(setCompanies),
            getProjects().then(setProjects),
            getContacts().then(setContacts),
            getTasks().then(setTasks),
            getCollectionItems("duong").then((data: DuongItem[]) => setDuongData(data)),
        ]).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading ? <LoadingOverlay /> : (
                <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-10 px-4 space-y-16">
                    <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-16">
                        Directus Collections Dashboard
                    </h1>

                    {/* Duong Section */}
                    <SectionContainer title="Duong" gradient="from-orange-500 to-yellow-400">
                        {duongData.length === 0 ? (
                            <LoadingText label="Đang tải dữ liệu Duong..." />
                        ) : (
                            <GridContainer>
                                {duongData.map((item) => (
                                    <HoverCard key={item.id}>
                                        <DuongCard item={item} />
                                    </HoverCard>
                                ))}
                            </GridContainer>
                        )}
                    </SectionContainer>

                    {/* Companies Section */}
                    <SectionContainer title="Companies" gradient="from-blue-600 to-cyan-400">
                        {companies.length === 0 ? (
                            <LoadingText label="Đang tải Companies..." />
                        ) : (
                            <GridContainer>
                                {companies.map((c) => (
                                    <HoverCard key={c.id}>
                                        <CompanyCard company={c} />
                                    </HoverCard>
                                ))}
                            </GridContainer>
                        )}
                    </SectionContainer>

                    {/* Projects Section */}
                    <SectionContainer title="Projects" gradient="from-green-600 to-lime-400">
                        {projects.length === 0 ? (
                            <LoadingText label="Đang tải Projects..." />
                        ) : (
                            <GridContainer>
                                {projects.map((p) => (
                                    <HoverCard key={p.id}>
                                        <ProjectCard project={p} />
                                    </HoverCard>
                                ))}
                            </GridContainer>
                        )}
                    </SectionContainer>

                    {/* Contacts Section */}
                    <SectionContainer title="Contacts" gradient="from-pink-600 to-pink-300">
                        {contacts.length === 0 ? (
                            <LoadingText label="Đang tải Contacts..." />
                        ) : (
                            <GridContainer>
                                {contacts.map((c) => (
                                    <HoverCard key={c.id}>
                                        <ContactCard contact={c} />
                                    </HoverCard>
                                ))}
                            </GridContainer>
                        )}
                    </SectionContainer>

                    {/* Tasks Section */}
                    <SectionContainer title="Tasks" gradient="from-purple-600 to-violet-400">
                        {tasks.length === 0 ? (
                            <LoadingText label="Đang tải Tasks..." />
                        ) : (
                            <GridContainer>
                                {tasks.map((t) => (
                                    <HoverCard key={t.id}>
                                        <TaskCard task={t} />
                                    </HoverCard>
                                ))}
                            </GridContainer>
                        )}
                    </SectionContainer>
                </main>
            )}
        </>
    );
}
