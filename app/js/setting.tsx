export type SingleMap = {
    [key: string]: string
};

export type DoubleMap = {
    [key: string]: {
        [key: string]: string
    }
};


/*
    IMPORTANT:
        EVERY SINGLE SETTING MUST HAVE (variableName): (Name to Present to User)
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
        'ubco': 'UBCO',
        'downtown': 'Downtown',
    }
};