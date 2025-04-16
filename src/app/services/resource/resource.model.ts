export type ResourceList = Resource[];

export type Resource = {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
};

export type ResourceListResopnse = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: ResourceList;
};

export type ResourceResponse = {
    data: Resource;
};
