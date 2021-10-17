
/* ------------------------------------ */
// App slider data section
/* ------------------------------------ */
import phoneIcon from 'common/assets/image/driverPage/Smartphone.svg';
import licenseIcon from 'common/assets/image/driverPage/License.svg';
import ageIcon from 'common/assets/image/driverPage/Age.svg';
import electricVanIcon from 'common/assets/image/driverPage/ElectricVan.svg';
import driverNeedImg from 'common/assets/image/driverPage/how-work.png'
export const driverNeeds = {
    title: 'What you’ll need',
    image: driverNeedImg,
    needs: [
        {
            id: 1,
            icon: phoneIcon,
            delay: 500,
            title: 'A smartphone with our App',
        },
        {
            id: 2,
            icon: electricVanIcon,
            delay: 800,
            title: 'An electric van (with insurance)',

        },
        {
            id: 3,
            icon: licenseIcon,
            delay: 1100,
            title: 'A good driving record and license',

        },
        {
            id: 3,
            icon: ageIcon,
            delay: 1400,
            title: 'Age 18+',

        },
    ],
};


import Image1 from 'common/assets/image/driverPage/offer1.png'
import Image2 from 'common/assets/image/driverPage/offer2.png'
import Image3 from 'common/assets/image/driverPage/offer3.png'
export const Features = [
    {
        id: 1,
        img: `${Image1}`,
        title: 'Be your own boss',
        descriptions: [
            'Decide when where and how often to drive',
            'Boost your earnings.'
        ]

    },
    {
        id: 2,
        img: `${Image2}`,
        title: 'More than earnings',
        descriptions: [
            'Competitive fees for every delivery.',
            'Maintain your normal routes.'

        ]

    },
    {
        id: 3,
        img: `${Image3}`,
        title: 'Support on the road',
        descriptions: [
            '24/7 customer support',
            'In-app driver help centre',
            'Share your location in real time',
            'Emergency button'
        ]

    },
];