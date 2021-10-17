import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import SectionWrapper, {
    ThumbWrapper,
    TextWrapper,
} from './getStarted.style';

import { getStarted } from 'common/data/Homepage';

const GetStarted = () => {
    const { title, description, thumb, serviceHourTitle } = getStarted;
    return (
        <SectionWrapper>
            <Container>
                <TextWrapper>
                    <Fade delay={500}>
                        <Heading content={title} as="h2" />
                    </Fade>
                    <Fade delay={600}>
                        <Text as="h4" content={description} />
                    </Fade>
                    <Fade delay={800}>
                        <Button className="trail" title="Get Early Access" />
                    </Fade>
                    <Fade delay={1000}>
                        <Text as="h5" content={serviceHourTitle} />
                        <h6>Monday To Sunday : <span>8am To 5pm</span></h6>
                    </Fade>
                </TextWrapper>
                <ThumbWrapper>
                    <Zoom left top duration={1500} offset={100}>
                        <Image src={thumb} alt="App Image" />
                    </Zoom>
                </ThumbWrapper>
            </Container>
        </SectionWrapper>
    );
};

export default GetStarted;
