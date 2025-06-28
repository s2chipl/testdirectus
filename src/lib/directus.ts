// src/lib/directus.ts

const BASE_URL = "http://localhost:8055";

// Hàm lấy dữ liệu từ bất kỳ collection nào
export async function getCollectionItems(collectionName: string): Promise<any[]> {
    try {
        const res = await fetch(`${BASE_URL}/items/${collectionName}?fields=*,icon.*`);
        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error(`Lỗi khi gọi collection "${collectionName}":`, error);
        return [];
    }
}

// Hàm lấy dropdown options từ collection duong (field dropdown)
export async function getDropdownOptions(): Promise<{ label: string; value: string }[]> {
    try {
        const res = await fetch(`${BASE_URL}/fields/duong/dropdown`);
        const json = await res.json();
        const choices = json.data?.meta?.options?.choices || [];
        return choices.map((c: any) => ({
            label: c.text,
            value: c.value,
        }));
    } catch (error) {
        console.error("Lỗi khi lấy dropdown options:", error);
        return [];
    }
}
export interface DuongItem {
    id: number;
    title: string;
    content: string;
    avatar?: string;
    dropdown?: string | null;
}

export interface Company {
    id: string;
    name: string;
    address_line_1: string;
    city: string;
    state: string;
    postal_code: string;
    logo?: string;
    projects: string[];
}

export interface Project {
    id: string;
    name: string;
    description?: string;
    start_date?: string;
    end_date?: string;
    company?: string;
    primary_contacts?: string;
    tasks?: string[];
}


export async function getCompanies(): Promise<Company[]> {
    try {
        const res = await fetch(`${BASE_URL}/items/companies`);
        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("Lỗi khi lấy companies:", error);
        return [];
    }
}

export async function getProjects(): Promise<Project[]> {
    try {
        const res = await fetch(`${BASE_URL}/items/projects`);
        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("Lỗi khi lấy projects:", error);
        return [];
    }
}

export async function getContacts(): Promise<any[]> {
    try {
        const res = await fetch(`${BASE_URL}/items/contacts`);
        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("Lỗi khi lấy contacts:", error);
        return [];
    }
}

export async function getTasks(): Promise<any[]> {
    try {
        const res = await fetch(`${BASE_URL}/items/tasks`);
        const json = await res.json();
        return json.data || [];
    } catch (error) {
        console.error("Lỗi khi lấy tasks:", error);
        return [];
    }
}