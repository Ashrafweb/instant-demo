import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Fade from 'react-reveal/Fade';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import FeatureSliderWrapper from './appPreview.style';
import Image1 from 'common/assets/image/driverPage/Driver App Preview 1.png';
import Image2 from 'common/assets/image/driverPage/Driver App Preview 2.png';
import Image3 from 'common/assets/image/driverPage/Driver App Preview 3.png';

const images = [
    {
        original: `${Image1}`,
        originalAlt: 'slide one',
    },
    {
        original: `${Image2}`,
        originalAlt: 'slide two',
    },
    {
        original: `${Image3}`,
        originalAlt: 'slide three',
    },
];

const AppPreview = ({ secTitleWrapper, secTitle, secDescription }) => {
    return (
        <FeatureSliderWrapper id="keyfeature">
            <div className="FeatureSliderInner">
                <span> </span>
                <span> </span>
                <span> </span>
            </div>
            <Container noGutter mobileGutter width="100%" className="container">
                <Box {...secTitleWrapper}>
                    <Fade delay={600}>
                        <Heading {...secTitle} content="A Preview Of Our App" />
                    </Fade>
                </Box>
                <Fade delay={500}>
                    <Box className="FeatureSlider">
                        <ImageGallery
                            items={images}
                            className="Slider-img"
                            showPlayButton={false}
                            showFullscreenButton={false}
                            showNav={false}
                            showBullets={true}
                            autoPlay={true}
                            disableSwipe={true}
                        />
                    </Box>
                </Fade>
            </Container>
        </FeatureSliderWrapper>
    );
};

// AppPreview style props
AppPreview.propTypes = {
    secTitleWrapper: PropTypes.object,
    secTitle: PropTypes.object,
    secDescription: PropTypes.object,
};

// AppPreview default style
AppPreview.defaultProps = {
    secTitleWrapper: {
        mb: ['65px', '65px', '70px', '70px', '70px'],
    },
    secTitle: {
        fontSize: ['22px', '26px', '26px', '30px', '36px'],
        fontWeight: '600',
        color: '#15172C',
        lineHeight: '1.34',
        mb: ['15px', '18px', '18px', '20px', '30px'],
        textAlign: 'center',
        fontFamily: 'Poppins',
    },
    secDescription: {
        fontSize: ['15px', '16px'],
        fontWeight: '400',
        color: '#15172C',
        lineHeight: '1.5',
        mb: '0',
        textAlign: 'center',
        width: '300px',
        maxWidth: '100%',
        ml: 'auto',
        mr: 'auto',
        fontFamily: 'Lato',
    },
};

export default AppPreview;
