export type OpenGraphVideoType = 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';
export type OpenGraphMusicType = 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station';
export type OpenGraphMiscType = 'article' | 'book' | 'profile' | 'website';
export type OpenGraphType = OpenGraphMiscType | OpenGraphVideoType | OpenGraphMusicType;

export interface OpenGraphImage {
    url: string;
    secure_url?: string;
    type?: string;
    width?: number;
    height?: number;
    alt: string;
}

export interface OpenGraph {
    title: string;
    type: OpenGraphType;
    image: OpenGraphImage;
    url: string;
}