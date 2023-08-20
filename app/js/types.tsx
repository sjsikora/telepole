import { storage, firestore } from '@/app/js/firebase/firebase';
import { FirebaseStorage } from 'firebase/storage';
import { Firestore, collection, getDoc, getDocs } from 'firebase/firestore';

class Poster {

    city : string; //must be one of "seattle" or "kelowna"
    owner : string;
    title: string;
    description: string;
    id: string | undefined;
    neighborhood : string[];
    imageRef : string;
    keywords : string[];
    created : Date;
    expiration : Date;
    reccuring : boolean;
    reccuringDays : string[];
    reccurringTime: string;
    firebaseRef : Firestore;



    constructor(city: string, id?: string, owner?: string,  title?: string, description?: string, reccurringTime?:string, neighborhood?: string[], imageRef?: string, keywords?: string[], created?: Date, expiration?: Date, reccuring?: boolean, reccuringDays?: string[]) {

        this.firebaseRef = firestore;

        // You can either have the id and nothing else, or you can only leave out the id.
        if (id) {
            //TODO: Get the poster from the database.
            const collectionRef = collection(this.firebaseRef, `cities/${city}/posters`);

            getDocs(collectionRef)
                .then((snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        if(doc.id == id) {
                            this.city = city;
                            this.id = doc.id;

                            this.owner = doc.data().owner;
                            this.title = doc.data().title;
                            this.description = doc.data().description;
                            this.neighborhood = doc.data().neighborhood;
                            this.imageRef = doc.data().imageRef;
                            this.keywords = doc.data().keywords;
                            this.created = doc.data().created;
                            this.expiration = doc.data().expiration;
                            this.reccuring = doc.data().reccuring;
                            this.reccuringDays = doc.data().reccuringDays;
                            this.reccurringTime = doc.data().reccurringTime;
                            return;
                        }
                    })
                    throw new Error('Poster not found.');  
                })
                .catch((error) => {
                    throw new Error(error);
                })
        }
        
        if(!owner || !title || !description || !reccurringTime || !neighborhood || !imageRef || !keywords || !created || !expiration || !reccuring || !reccuringDays) {
            throw new Error('Missing required parameters.');
        }

        this.owner = owner;
        this.city = city;
        this.title = title;
        this.description = description;
        this.neighborhood = neighborhood;
        this.imageRef = imageRef;
        this.keywords = keywords;
        this.created = created;
        this.expiration = expiration;
        this.reccuring = reccuring;
        this.reccuringDays = reccuringDays;
        this.reccurringTime = reccurringTime;

        this.id = "TEMP";

    }

}

class Sticker {

    id: string;
    title: string;
    imageRef: string;
    httpRef : string;

    constructor(id: string, title: string, imageRef: string, httpRef : string) {
        this.id = id;
        this.title = title;
        this.imageRef = imageRef;
        this.httpRef = httpRef;
    }

}

//export interface Neighborhood {
//    name: string;
//    city: string;
//    location : {
//        lat: number;
//        lng: number;
//    }
//}

class Pole {

    id: number;
    location : {
        lat: number;
        lng: number;
    }
    postersID: string[];
    stickersID: string[];
    fireBaseStorageRef : FirebaseStorage;

    constructor(id: number, location : {lat: number, lng: number}, postersID: string[], stickersID: string[]) {

        this.fireBaseStorageRef = storage;

        this.id = id;
        this.location = location;
        this.postersID = postersID;
        this.stickersID = stickersID;
    }

}

class User {
    name: string;
    email: string;
    mainNeighborhood : string;

    constructor(name: string, email: string, mainNeighborhood : string) {
        this.name = name;
        this.email = email;
        this.mainNeighborhood = mainNeighborhood;
    }

}