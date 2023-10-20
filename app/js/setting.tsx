type PosterKeywords = {
    [key: string]: string
};

type CitiesNeighborhoods = {
    [key: string]: {
        [key: string]: string
    }
};

export const keywords: PosterKeywords = {
    "lostAndFound": "Lost and Found",
    "music": "Music",
    "food": "Food",
    "clubsAndOrganizations": "Clubs and Organizations",
    "jobsAndServices": "Jobs and Services",
    "yardSales": "Yard Sales",
    "conventions": "Conventions",
    "other": "Other"
};

export const citiesNeighborhoods : CitiesNeighborhoods = {
    'seattle': {
        "queenAnne": "Queen Anne",
        "universityDistrict": "University District",
    },
    'kelowna': {
        'ubco': 'UBCO',
        'downtown': 'Downtown',
    }
};