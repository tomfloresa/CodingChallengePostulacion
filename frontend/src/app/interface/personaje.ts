export interface Personaje {
    id: number,
    name: string,
    description: string,
    img: string,
    modified: string,
    detailUrl: string,
    comicLinkUrl: string,
    series?: {
        resourceURI: string,
        name: string
    }
}
