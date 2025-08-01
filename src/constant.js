import facebook from './icons/facebook.png'
import instagram from './icons/instagram_.png'
import twitter from './icons/twitter.png'
import youtube from './icons/youtube.png'
export const APP_NAME = {
    name:'Idio Karo',
    description : "Idio is a Trade mark company of Niti Ek-AAS group. It is an initiative to help people to the ground level."
};
export const NAV_LIST = [
    {
        id : 0,
        name : "Home",
        url : "/"
    },
    {
        id : 1,
        name : 'Explore',
        url : '/explore'
    },
    {
        id : 2,
        name : "Pricing",
        url : "/pricing"
    },
    {
        id : 3,
        name : 'Contact Us',
        url : '/login'
    },
    {
        id : 4,
        name : 'Jobs',
        url : '/join-us'
    }
];

export const USER_ROLE = [
    {
        id : 0,
        role : 'businessman',
        label : 'Businessman'
    },
    {
        id : 1,
        role : 'advisor',
        label : 'Business Advisor'
    },
    {
        id : 2,
        role : 'investor',
        label : 'Investor'
    }
];

export const INVESTMENT_TYPE = [
    {
        id : 0,
        label : 'Equity',
        value : 'equity'
    },
    {
        id : 1,
        label : "Debt",
        value : 'debt'
    },
    {
        id : 2,
        label : 'Both',
        value : 'equity&debt'
    }
]

export const BUSINESS_TYPE = [
    {
        id : 0,
        label : 'General',
        value : 'general'
    },
    {
        id : 1,
        label : 'Medical',
        value : 'medical'
    },
    {
        id : 2,
        label : 'Agriculture',
        value : 'agriculture'
    },
    {
        id : 3,
        label : 'Sports',
        value : 'sports'
    },
]

export const INV_PRICE = {
    MIN : 10000,
    MAX : 10000000
}

export const SOCIAL_LINKS = [
    {
        name : 'Instagram',
        icon : instagram,
        link : 'https://www.instagram.com/idiokaro?igsh=MTU0NXg1cGk5NHltdw=='
    },
    {
        name : 'Facebook',
        icon : facebook,
        link : 'https://www.facebook.com/idiokaro'
    },
    {
        name : 'Twitter',
        icon : twitter,
        link : 'https://www.twitter.com/idiokaro'
    },
    {
        name : 'Youtube',
        icon : youtube,
        link : 'https://www.youtube.com/idiokaro'
    }
]


