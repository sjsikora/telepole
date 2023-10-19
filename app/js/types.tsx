import { storage, firestore } from '@/app/js/firebase/firebase';
import { FirebaseStorage, uploadBytes } from 'firebase/storage';
import { Firestore, addDoc, collection, getDoc, getDocs } from 'firebase/firestore';
import { ref } from 'firebase/storage';
import { auth } from '@/app/js/firebase/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";


/* 
    This is the Singleton class. There are a few places such as the search
    compontent and the poster upload form that need to share consistent values.
    This class is used to store those values and make them accessible to all 
    components.

*/
export class Singleton {
    
    private static instance: Singleton;

    keywords: { [key: string]: string; };
    citiesNeighborhoods: { [key: string]: {[key: string]: string} };


    private constructor() {
        this.keywords = {
            "lostAndFound": "Lost and Found",
            "music": "Music",
            "food": "Food",
            "clubsAndOrganizations": "Clubs and Organizations",
            "jobsAndServices": "Jobs and Services",
            "yardSales": "Yard Sales",
            "conventions": "Conventions",
            "other": "Other"
        };

        this.citiesNeighborhoods = {
            'seattle': {
                "queenAnne": "Queen Anne",
                "universityDistrict": "University District",
            },
            'kelowna': {
                'ubco': 'UBCO',
                'downtown': 'Downtown',
            }
        }
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    getKeywords() {
        return this.keywords;
    }

    getCitiesNeighborhoods() {
        return this.citiesNeighborhoods;
    }
}

/*
    The poster class has all the fields that are repersented in the database.
    This also contains the function to upload the poster to the database.
*/

export class Telepole_Poster {

    // Required Values for any Poster Object
    city: string;

    title: string | undefined;
    imageRef: string | undefined;    
    owner: string | undefined;
    keywords: string | undefined;
    description: string | undefined;
    neighborhood: string | undefined;
    created: Date | undefined;
    expiration: Date | undefined;
    reccuring: boolean | undefined;
    imageUpload: any | undefined;


    firebaseRef: Firestore;

    constructor(city: string) {
        this.city = city;
        this.firebaseRef = firestore;
    }

    private async uploadImage(imageRef: string): Promise<boolean> {

        if (!this.imageUpload) throw new Error('No image to upload.');

        const storageRef = ref(storage, `images/${this.city}/${imageRef}`);
        await uploadBytes(storageRef, this.imageUpload)
            .catch((error) => {
                throw new Error(error);
            })

        return true;
    }

    populatefields(
        owner: string,
        title: string,
        description: string,
        neighborhood: string,
        imageRef: string,
        keywords: string,
        created: Date,
        expiration: Date,
        reccuring: boolean
    ) {
        this.owner = owner;
        this.title = title;
        this.description = description;
        this.neighborhood = neighborhood;
        this.imageRef = imageRef;
        this.keywords = keywords;
        this.created = created;
        this.expiration = expiration;
        this.reccuring = reccuring;
    }


    async uploadPoster(
        title: string,
        description: string,
        neighborhood: string,
        imageUpload: any,
        keyword: string,
        expiration: Date,
        reccuring: boolean,
        telepoles = [] //TODO: Add telepoles
    ): Promise<boolean> {

        if(auth.currentUser === null) throw new Error('User not logged in.');

        this.imageUpload = imageUpload;
        this.created = new Date();

        // Ensure that that the file type is supported. Throw error if not.
        const fileType = this.imageUpload.name.substring(this.imageUpload.name.lastIndexOf('.') + 1);
        const acceptableFileTypes = ['png', 'jpg', 'jpeg', 'heic', 'heif'];
        if(!acceptableFileTypes.includes(fileType)) throw new Error('Can only upload images of type png, jpg, jpeg, heic, or heif.');
        
        // Create the image reference. This may not be the best way of
        // naming files.
        const imageRef = this.city + "_" + this.neighborhood + "_" + Date.now() + "." + fileType;

        await this.uploadImage(imageRef)
            .catch((error) => {
                throw new Error(error);
            })

        const posterRef = collection(this.firebaseRef, `cities/${this.city}/posters`);

        addDoc(posterRef, {
            city: this.city,
            owner: auth.currentUser.uid,
            title: title,
            description: description,
            neighborhood: neighborhood,
            imageRef: imageRef,
            keyword: keyword,
            created: this.created,
            expiration: expiration,
            reccuring: reccuring,
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
    httpRef: string;

    constructor(id: string, title: string, imageRef: string, httpRef: string) {
        this.id = id;
        this.title = title;
        this.imageRef = imageRef;
        this.httpRef = httpRef;
    }

}

class Pole {

    id: number;
    location: {
        lat: number;
        lng: number;
    }
    postersID: string[];
    stickersID: string[];
    fireBaseStorageRef: FirebaseStorage;

    constructor(id: number, location: { lat: number, lng: number }, postersID: string[], stickersID: string[]) {

        this.fireBaseStorageRef = storage;

        this.id = id;
        this.location = location;
        this.postersID = postersID;
        this.stickersID = stickersID;
    }
}

/*
    The user class has all the fields that are repersented in the database.
    This also contains the function to upload the user to the database.
*/

export class Telepole_User {

    display_name: string | undefined;
    email: string | undefined;
    password: string | undefined;
    mainCity: string | undefined;
    firebaseUserID: string | undefined;
    ownedPosters: string[] | undefined;

    firebaseRef: Firestore;
    firebaseAuthRef: any;


    constructor(mainCity: string) {
        this.mainCity = mainCity;
        this.firebaseRef = firestore;
        this.firebaseAuthRef = auth;
    }

    async uploadUser(email: string, password: string, display_name: string) {

        console.log(email, password, display_name);

        if (email === '' || password === '') throw new Error('Fields need to be filled out');

        await createUserWithEmailAndPassword(this.firebaseAuthRef, email, password)

        if (auth.currentUser === null) throw new Error('User not Created.');

        //Add user to database
        const userRef = collection(this.firebaseRef, `users`);

        await addDoc(userRef, {
            mainCity: this.mainCity,
            firebaseUserID: auth.currentUser.uid,
            email: email,
            display_name: display_name,
            ownedPosters: []
        })
            .catch((error) => {
                throw new Error(error);
            })
    }

    getUserDataByID(firebaseUserID: string) {
        const collectionRef = collection(this.firebaseRef, `users`);

        getDocs(collectionRef)
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    if (doc.data().firebaseUserID == firebaseUserID) {

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

}