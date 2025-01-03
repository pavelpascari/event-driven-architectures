import type { Metadata } from "next";


type GetMetadataParams = {
    title: string | undefined,
    description: string | undefined
}
export const getMetadata = (params?: GetMetadataParams): Metadata => {
    const { title, description } = params || {};
    return {
        title: title || "EDA | Event-Driven Architectures",
        description: description || "Event-Driven Architectures | A modern approach to building scalable and resilient systems",
        icons: getIcons(),
    }
}


export const getIcons = () => {
    return [
        {
            media: "(prefers-color-scheme: dark)",
            href: "/dark-hexagon.ico",
            url: "/dark-hexagon.ico",
            rel: "icon"
        },
        {
            media: "(prefers-color-scheme: light)",
            href: "/light-hexagon.ico",
            url: "/light-hexagon.ico",
            rel: "icon"
        }
    ]
}