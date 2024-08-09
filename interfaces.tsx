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
    media?: string;
    product_tags: string[];
}

export type RootStackParamList = {
    Boards: { boards: Board[] };
    Pins: { boardId: string };
    Pin: { pinId: string };
};
