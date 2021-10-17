/* ------------------------------------ */
// Hero data section
/* ------------------------------------ */
import heroImg from '../../assets/image/about_us/solution.svg';

export const hero = {
    heading: 'About Us',

    description:
        'We believe that the air you and your children breathe does not have to be polluted with toxic fumes from the diesel vans driving your neighbourhood. Therefore we have creared Instant Pickup a sustainable platform where businesses and individuals can find emission free electric vans for their same day logistic needs.',
    heroImg: heroImg,
};




/* ------------------------------------ */
// Values data section
/* ------------------------------------ */

import valueIcon1 from '../../assets/image/about_us/people.svg';
import valueIcon2 from '../../assets/image/about_us/planet.svg';
import valueIcon3 from '../../assets/image/about_us/hand.svg';
import valueIcon4 from '../../assets/image/about_us/arrow.svg';


import bg1 from '../../assets/image/about_us/b1.png';
import bg2 from '../../assets/image/about_us/b2.png';
import bg3 from '../../assets/image/about_us/b3.png';
import bg4 from '../../assets/image/about_us/b4.png';

export const values = {
    title: 'Our Values',
    contents: [
        {
            id: 1,
            icon: valueIcon1,
            bgImg: bg1,
            title: 'Customer Centric',
            description: "We listen to our customers to understand and deliver on each of their needs. We build trust by making each customer successful by fulfilling our commitment to their satisfaction."
        },
        {
            id: 2,
            icon: valueIcon2,
            bgImg: bg2,
            title: 'Planet',
            description: "We realize the benefit of balance and seek to find harmony between humans and the environment. We strive to create a balance between traditional logistic solutions and green alternatives, offering humans a sustainable way to interact with the planet. Changing the world one van at a time."
        },
        {
            id: 3,
            icon: valueIcon3,
            bgImg: bg3,
            title: 'Stronger Together',
            description: "We work as one team and move decisively in the same direction.We believe in working together for a brighter future, and that change is possible for us all. Our partnerships are a central part of who we are as a company. When we support one another and focus on positive actions, we can contribute to change in a meaningful way.",
        },
        {
            id: 4,
            icon: valueIcon4,
            bgImg: bg4,
            title: 'One Step Ahead',
            description: "We strive for continuous innovation and consistent evaluation of our technology, our partnerships, and our impact on the planet. We don't have it all figured out, but we are always looking to improve every aspect of what we do and take steps towards having a more sustainable future.",
        },
    ],

};


