import { storage, firestore } from '@/app/js/firebase/firebase';
import { FirebaseStorage, uploadBytes } from 'firebase/storage';
import { Firestore, addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import { ref } from 'firebase/storage';
import { auth } from '@/app/js/firebase/firebase'

export class Telepole_Poster {

    city : string; //must be one of "seattle" or "kelowna"
    owner : string;
    title: string;
    description: string;
    neighborhood : string;
    imageRef : string | undefined;
    keywords : string;
    created : Date;
    expiration : Date;
    reccuring : boolean;
    imageUpload: any | undefined;
    firebaseRef : Firestore;

    constructor(
        city: string,
        id?: string,
        owner?: string,
        title?: string,
        description?: string,
        neighborhood?: string,
        keywords?: string,
        created?: Date,
        expiration?: Date,
        reccuring?: boolean,
        imageUpload?: any | null,
    ) {

        this.firebaseRef = firestore;

        if (id) {
        const collectionRef = collection(this.firebaseRef, `cities/${city}/posters`);
    
            getDocs(collectionRef)
                .then((snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        if(doc.id == id) {

                            this.city = city;
    
                            this.owner = doc.data().owner;
                            this.title = doc.data().title;
                            this.description = doc.data().description;
                            this.neighborhood = doc.data().neighborhood;
                            this.imageRef = doc.data().imageRef;
                            this.keywords = doc.data().keywords;
                            this.created = doc.data().created;
                            this.expiration = doc.data().expiration;
                            this.reccuring = doc.data().reccuring;
                            return;
                        }
                    })
                    throw new Error('Poster not found.');  
                })
                .catch((error) => {
                    throw new Error(error);
                })

        }

        if(owner === undefined || 
            title === undefined ||
            description === undefined ||
            neighborhood === undefined ||
            keywords === undefined ||
            created === undefined ||
            expiration === undefined ||
            reccuring === undefined
        ) throw new Error('Fields need to be filled out');


        this.city = city;
        this.owner = owner;
        this.title = title;
        this.description = description;
        this.neighborhood = neighborhood;
        this.keywords = keywords;
        this.created = created;
        this.expiration = expiration;
        this.reccuring = reccuring;
        this.imageUpload = imageUpload;

    }



    async uploadImage(imageRef: string): Promise<boolean> {

        if(!this.imageUpload) throw new Error('No image to upload.');
        
        const storageRef = ref(storage, `images/${this.city}/${imageRef}`);
        await uploadBytes(storageRef, this.imageUpload)
        .catch((error) => {
            throw new Error(error);
        })

        return true;
    }



    async uploadPoster(): Promise<boolean> {

        let imageRef = this.city + "_" + this.imageUpload.name + Date.now();

        await this.uploadImage(imageRef)
            .catch((error) => {
                throw new Error(error);
            })

        const posterRef = collection(this.firebaseRef, `cities/${this.city}/posters`);

        addDoc(posterRef, {
            city: this.city,
            owner: this.owner,
            title: this.title,
            description: this.description,
            neighborhood: this.neighborhood,
            imageRef: imageRef,
            keywords: this.keywords,
            created: this.created,
            expiration: this.expiration,
            reccuring: this.reccuring,
        })
            .then(() => {
                return true;
            })
            .catch((error) => {
                throw new Error(error);
            })

        return false;
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

class Telepole_User {

    display_name: string;
    email: string;
    mainCity : string;
    firebaseUserID : string;
    firebaseRef: Firestore;
    firebaseAuthRef: any;
    ownedPosters: string[];

    constructor(mainCity: string, firebaseUserID?: string, name?: string, email?: string, display_name?: string, ownedPosters?: string[]) {

        this.mainCity = mainCity;
        this.firebaseRef = firestore;
        this.firebaseAuthRef = auth;

        if(firebaseUserID) {
            this.firebaseUserID = firebaseUserID;
            this.firebaseUserID = firebaseUserID;

            const collectionRef = collection(this.firebaseRef, `users`);
    
            getDocs(collectionRef)
                .then((snapshot) => {
                    snapshot.docs.forEach((doc) => {
                        if(doc.data().firebaseUserID == firebaseUserID) {
    
                            this.display_name = doc.data().display_name;
                            this.email = doc.data().email;
                            this.display_name = doc.data().display_name;
                            this.ownedPosters = doc.data().ownedPosters;

                            return;
                        }
                    })
                    throw new Error('User not found.');  
                })
        }

        if(auth.currentUser === null) throw new Error('User not logged in.');

        if(name === undefined || email === undefined || display_name === undefined || ownedPosters === undefined) throw new Error('Fields need to be filled out');


        this.display_name = display_name;
        this.email = email;
        this.firebaseUserID = auth.currentUser.uid;
        this.ownedPosters = ownedPosters;
    }

    getUserDataByID(mainCity: string, firebaseUserID: string) {


    }


    

}