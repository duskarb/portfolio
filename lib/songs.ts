export interface Song {
    title: string;
    artist: string;
    src: string;
}

// Base path should match next.config.ts basePath
const basePath = "/portfolio";

export const songs: Song[] = [
    {
        title: "ETA",
        artist: "DO.NE",
        src: `${basePath}/music/eta_done.mp3`
    },
    {
        title: "How Sweet",
        artist: "DO.NE",
        src: `${basePath}/music/how_sweet.mp3`
    },
    {
        title: "ETA (250 Remix)",
        artist: "NewJeans",
        src: `${basePath}/music/eta_newjeans.mp3`
    },
    {
        title: "No Flex Zone Remix",
        artist: "Okasian",
        src: `${basePath}/music/no_flex_zone.mp3`
    },
    {
        title: "Free Somebody",
        artist: "SUMIN",
        src: `${basePath}/music/free_somebody.mp3`
    },
    {
        title: "King TANTAN",
        artist: "Y2K92",
        src: `${basePath}/music/king_tantan.mp3`
    },
    {
        title: "Velocity",
        artist: "Unknown",
        src: `${basePath}/music/velocity.mp3`
    }
];
