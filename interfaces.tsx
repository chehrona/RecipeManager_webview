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

export interface Pin {
    id: string;
    title: string;
    media: {
        images: {
            [key: string]: {
                url: string;
            };
        };
    };
}
