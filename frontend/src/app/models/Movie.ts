export interface Movie{
    cover?: string,
    created_at?: string, //el "?" indica que es opcional
    id: number,
    synopsis: string,
    title: string,
    updated_at?: string,
    year: number,
}