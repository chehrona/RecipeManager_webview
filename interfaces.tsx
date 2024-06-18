export interface Media {
    image_cover_url: string;
    pin_thumbnail_urls: string[];
}

export interface Board {
    id: string;
    media: Media;
    name: string;
    pin_count: number;
}

export interface RecipesProps {
    boards: object[];
}

export interface BodyProps {
    boards: Board[];
}
