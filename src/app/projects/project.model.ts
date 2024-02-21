export interface Project {
    id: number,
    title: string,
    owner: number,
    description: string,
    skills: string[],
    open_positions: string[],
    contributors: number[],
    date_created: string,
    imageUrl: string
    
}