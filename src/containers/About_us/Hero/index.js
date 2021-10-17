import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import SectionWrapper, {
    ThumbWrapper,
    TextWrapper,
} from './hero.style';

import { hero } from 'common/data/About_us';

const Hero = () => {
    const { heading, title, description, heroImg } = hero;
    return (
        <SectionWrapper>
            <Container>
                <TextWrapper>
                    <Fade delay={500}>
                        <Heading content={heading} as="h1" />
                    </Fade>
                    <Fade delay={700}>
                        <h2>Be the <span>Solution</span> and not the Pollution</h2>
                    </Fade>
                    <Fade delay={900}>
                        <Text as="h6" content={description} />
                    </Fade>
                </TextWrapper>
                <ThumbWrapper>
                    <Fade delay={500}>
                        <Image src={heroImg} alt="About Hero Image" />
                    </Fade>
                </ThumbWrapper>
            </Container>
        </SectionWrapper>
    );
};

export default Hero;
