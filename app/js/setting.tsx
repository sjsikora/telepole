export type SingleMap = {
    [key: string]: string
};

export type DoubleMap = {
    [key: string]: {
        [key: string]: string
    }
};

export type coordinates = {
    [key: string]: {
        latitude: number,
        longitude: number,
        zoom: number
    }
};

/*
    IMPORTANT:
        EVERY SINGLE SETTING MUST HAVE (variableName): (Name to Present to User)

    variableName is the name consistent with firebase database.
*/

export const keywords: SingleMap = {
    "lostAndFound": "Lost and Found",
    "music": "Music",
    "food": "Food",
    "clubsAndOrganizations": "Clubs and Organizations",
    "jobsAndServices": "Jobs and Services",
    "yardSales": "Yard Sales",
    "conventions": "Conventions",
    "other": "Other"
};

export const cities: SingleMap = {
    "seattle": "Seattle",
    "kelowna": "Kelowna"
};

export const citiesNeighborhoods : DoubleMap = {
    'seattle': {
        "queenAnne": "Queen Anne",
        "universityDistrict": "University District",
    },
    'kelowna': {
        'downtown': 'Downtown',
        'ubco': 'UBCO',
    }
};

export const mapboxNeighborhood: coordinates = {
    "queenAnne": {
        longitude: -122.359749,
        latitude: 47.639396,
        zoom: 13,
    },
    "universityDistrict": {
        longitude: 47.657439,
        latitude : -122.307052,
        zoom: 13,
    },

    "ubco" : {
        longitude: -119.3948, 
        latitude: 49.9407,
        zoom: 15.5,
    },
    "downtown": {
        longitude : -119.49382440053064, 
        latitude: 49.88780463790179,
        zoom: 13,
    }
}
