export interface Poster {
    id: string;
    title: string;
    description: string;
    imageRef : string;
    location : Telepole[];
    owner : string;
    created : Date;
    reccuring : boolean;
    reccuringDays : number[];
    keywords : string[];
    neighborhood : string;
}

export interface Sticker {
    id: string;
    title: string;
    imageRef: string;
    httpRef : string;
}

export interface Neighborhood {
    name: string;
    city: string;
    location : {
        lat: number;
        lng: number;
    }

    telepoles : Telepole[];
}

export interface Telepole {
    id: number;
    neighborhood: string;
    location : {
        lat: number;
        lng: number;
    }
    postersID: string[];
    stickersID: string[];
}

export interface User {
    name: string;
    email: string;
    mainNeighborhood : string;
}