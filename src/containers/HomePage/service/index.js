import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
    BannerContent,
    BannerImage,
    ButtonGroup,
    BannerImageMobile,
    BannerRectImage
} from './service.style';

import bannerImg from 'common/assets/image/HomePage/bannerImg-3.png'
import bannerImgas from 'common/assets/image/HomePage/Group-3604.png'

const Banner = () => {
    return (
        <BannerWrapper id="home">
            <Container>
                <BannerContent>
                    <Fade delay={100}>
                        <h1>
                            Same Day <span>Removal <div className="text__border__bottom"></div></span> Service That Changes The World One Van At A Time
                        </h1>
                    </Fade>
                    <Fade delay={200}>
                        <Text
                            as="p"
                            fontWeight="100"
                            content="Instant pickup provides electric vans for your same day logistics need."
                        />
                    </Fade>
                    <Fade delay={400}>
                        <ButtonGroup>
                            <Button className="trail" title="Get Early Access" />
                        </ButtonGroup>
                    </Fade>
                </BannerContent>
                <BannerImage>
                    <Fade delay={500}>
                        <Image src={bannerImg} alt="Banner" />
                    </Fade>
                </BannerImage>
            </Container>
            <BannerRectImage>

            </BannerRectImage>
        </BannerWrapper>

        ///////////////////////////////////////////////////////

        // <BannerWrapper id="home">
        //     <Container>
        //         <BannerContent>
        //             <Fade up delay={100}>
        //                 <Heading
        //                     as="h1"
        //                     content="Your trusted mobile app to make days beautiful 😘"
        //                 />
        //             </Fade>
        //             <Fade up delay={200}>
        //                 <Text content="There will be a day–in our lifetime–when we get to celebrate every person on the planet having access." />
        //             </Fade>
        //             <Fade up delay={300}>
        //                 <ButtonGroup>
        //                     <Button className="primary" title="Start 14-days free trail" />

        //                 </ButtonGroup>
        //             </Fade>
        //         </BannerContent>
        //         <BannerImage>
        //             <Image src={bannerImg} alt="Banner" />
        //         </BannerImage>
        //         <BannerImageMobile>
        //             <Image src={bannerImgMobile} alt="Mobile Banner" />
        //         </BannerImageMobile>
        //     </Container>
        // </BannerWrapper>
    );
};

export default Banner;
