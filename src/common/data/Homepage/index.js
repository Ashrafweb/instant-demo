
/* ------------------------------------ */
// Navbar data 
/* ------------------------------------ */
import logo from 'common/assets/image/HomePage/Logo Artwork.png';

export const navbar = {
    logo: logo,
    navMenu: [
        {
            id: 1,
            label: 'About Us',
            path: '#home',
            offset: '84',
        },
        {
            id: 2,
            label: '',
            path: '#keyFeatures',
            offset: '84',
        },
        {
            id: 3,
            label: 'Pricing',
            path: '#pricing',
            offset: '84',
        },
        {
            id: 4,
            label: 'Testimonial',
            path: '#testimonial',
            offset: '80',
        },
        {
            id: 5,
            label: 'Faq',
            path: '#faq',
            offset: '80',
        },
    ],
};


/* ------------------------------------ */
// Description data section
/* ------------------------------------ */

import Description from '../../assets/image/HomePage/Booking IP.png';

export const description = {
    title: 'We provide Eco-Friendly same day logistics',
    thumb: Description,
    features: [
        {
            id: 1,
            delay: 800,
            title: 'Enter Location',
            description:
                'Tell us where to pick up and drop off your items. Leave the rest to our network of drivers.'
        },
        {
            id: 2,
            delay: 1000,
            title: 'Carbon Savings',
            description:
                'Get instant details about the carbon footprint and find out how much impact your choice made.',
        },
        {
            id: 3,
            delay: 1200,
            title: 'Instant Price Estimates',
            description:
                'No email spam and no hassles. Receive an instant price estimate.',
        },
        {
            id: 4,
            delay: 1400,
            title: 'Schedule Pickup Time',
            description:
                'Let us know when you need us there. We’ll do everything we can to make it happen.',
        },
    ],
};

/* ------------------------------------ */
// Mission data section
/* ------------------------------------ */

import missionIcon1 from '../../assets/image/HomePage/air-pollution.png';
import missionIcon2 from '../../assets/image/HomePage/Emotion_tracking.png';
import missionIcon3 from '../../assets/image/HomePage/ai.png';
import missionIcon4 from '../../assets/image/HomePage/economy.png';

export const missions = {
    title: 'Here’s our mission',
    slogan:
        '',
    features: [
        {
            id: 1,
            icon: missionIcon1,
            title: 'Reduce Air pollution',
            description: 'Fossil fuel vans make up only 15% of all road traffic but contribute a deadly 33% of the GreenHouse Gas Emissions (GHGs). Public Health England (PHE) estimates that air pollution is the biggest environmental threat to health in the UK, with between 28,000 and 36,000 deaths a year attributed to long-term exposure.',
        },
        {
            id: 2,
            icon: missionIcon2,
            title: 'Encourage Tracking of Carbon Emission',
            description:
                'The world is changing fast. More and more companies are committing to change but measuring the impact of pollution is difficult. We’ll help you keep track of how our transportation services affect the environment, so that you can focus on other areas. We are your logistics solution.',
        },
        {
            id: 3,
            icon: missionIcon3,
            title: 'Employ Innovative AI Technology',
            description: 'Our AI technology will estimate the driver’s potential range and allocate jobs accordingly, so that you don’t have to worry about it. You can trust us to be efficient and ready to help.',
        },
        {
            id: 4,
            icon: missionIcon4,
            title: 'Encourage Sharing economy',
            description:
                'We are the first courier service to encourage the sharing of our electric vans. By giving others temporary use of assets, we can be less wasteful and more connected. Users get access to low-cost transportation resources. Van owners find new revenue in their underused properties. The operator of the digital platform gets a small commission. We share because we care',
        },
    ],

};



/* ------------------------------------ */
// Feature tab data section
/* ------------------------------------ */
import appTabIcon1 from 'common/assets/image/HomePage/featureTab1.png';
import appTabIcon2 from 'common/assets/image/HomePage/featureTab2.png';
import appTabIcon3 from 'common/assets/image/HomePage/featureTab3.png';
import appTabIcon4 from 'common/assets/image/HomePage/featureTab4.png';

// image
import appTabImg1 from 'common/assets/image/HomePage/CarbonSavings.png';
import appTabImg2 from 'common/assets/image/HomePage/ContactScreenshot.png';
import appTabImg3 from 'common/assets/image/HomePage/BookingsScreenshot.png';
import appTabImg4 from 'common/assets/image/HomePage/PlacesScreenshot.png';


export const features = {

    title: 'Useful features for you',
    tab: [
        {
            id: 1,
            color: '#40975F',
            icon: appTabIcon1,
            title: 'Carbon Savings',
            description: 'Tell us where to pick up and drop off your items.',
            image: appTabImg1,
        },
        {
            id: 2,
            color: '#40975F',
            icon: appTabIcon2,
            title: 'Bookings',
            description: 'Tell us where to pick up and drop off your items.',
            image: appTabImg2,
        },
        {
            id: 3,
            color: '#40975F',
            icon: appTabIcon3,
            title: 'Saved Places',
            description: 'Tell us where to pick up and drop off your items.',
            image: appTabImg3,
        },
        {
            id: 4,
            color: '#40975F',
            icon: appTabIcon4,
            title: 'Customer Support',
            description: 'Tell us where to pick up and drop off your items.',
            image: appTabImg4,
        },

    ],
};




/* ------------------------------------ */
// Get Started data section
/* ------------------------------------ */
import getStartedThumb from '../../assets/image/HomePage/GetStartedIp.png';

export const getStarted = {
    title: 'Ready to get started?',
    description:
        'Join our family and learn more or get a quotation.',
    thumb: getStartedThumb,
    serviceHourTitle: 'Service Hours in London : ',
};


/* ------------------------------------ */
// Social Profiles
/* ------------------------------------ */

import FbIcon from 'common/assets/image/social/Facebook.svg'
import InstaIcon from 'common/assets/image/social/Instagram.svg'
import TwitterIcon from 'common/assets/image/social/Twitter.svg'
import LinkedinIcon from 'common/assets/image/social/Linkedin.svg'

export const SOCIAL_PROFILES = [
    {
        icon: TwitterIcon,
        url: '#',
    },
    {
        icon: LinkedinIcon,
        url: '#',
    },
    {
        icon: FbIcon,
        url: '#',
    },
    {
        icon: InstaIcon,
        url: '#',
    },
];
