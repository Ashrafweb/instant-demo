import React from 'react';
import Fade from 'react-reveal/Fade';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
    BannerContent,
    BannerImage,
    ButtonGroup,
} from './banner.style';

import bannerImg from 'common/assets/image/driverPage/driverBanner.png'

const Banner = () => {
    return (
        <BannerWrapper id="home">
            <Container>
                <BannerContent>
                    <Fade delay={100}>
                        <Heading
                            as="h1"
                            fontWeight="700"
                            content="Save The Planet And Start Earning Money With Instant Pickup"
                        />
                    </Fade>
                    <Fade delay={400}>
                        <ButtonGroup>
                            <Button className="trail" title="Apply Now" />
                        </ButtonGroup>
                    </Fade>
                </BannerContent>
                <BannerImage>
                    <Fade right delay={500}>
                        <Image src={bannerImg} alt="Banner" />
                    </Fade>
                </BannerImage>
            </Container>

        </BannerWrapper>

        ///////////////////////////////////////////////////////



    );
};

export default Banner;
