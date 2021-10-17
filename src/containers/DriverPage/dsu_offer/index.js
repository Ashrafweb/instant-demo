import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Fade from 'react-reveal/Fade';
import FeatureBlock from 'common/components/FeatureBlock';
import { Features } from 'common/data/DriverPage';
import Container from 'common/components/UI/Container';
import FeatureSectionWrapper, { ListContainer, ButtonGroup } from './dsuOffer.style';
import { ListWrapper } from 'common/components/List/list.style';

const Offer = ({
    row,
    col,
    secTitleWrapper,
    secTitle,
    secDescription,
    featureTitle,
    featureDescription,
    iconStyle,
    contentStyle,
    blockWrapperStyle,
}) => {
    return (
        <FeatureSectionWrapper id="feature_section">
            <Container noGutter mobileGutter width="1200px" className="container">
                <Fade delay={500}>
                    <Box  {...secTitleWrapper} >
                        <Heading {...secTitle} as="h1" content="Our offer" />
                    </Box>
                </Fade>
                <Box className="row" {...row}>
                    {Features.map((feature, index) => (
                        <Box className="col" key={index} {...col}>
                            <Fade up delay={600}>
                                <FeatureBlock
                                    icon={<img src={feature.img} alt={feature.title} />}
                                    wrapperStyle={blockWrapperStyle}
                                    iconStyle={iconStyle}
                                    contentStyle={contentStyle}
                                    title={<Heading content={feature.title} {...featureTitle} />}
                                    description={
                                        <Fade delay={700} >
                                            <ListContainer>
                                                {
                                                    feature.descriptions.map((item, index) => (
                                                        <li key={index}>{item}</li>

                                                    )
                                                    )}
                                            </ListContainer>
                                        </Fade>
                                    }

                                />
                            </Fade>
                        </Box>
                    ))}
                </Box>

                <Fade delay={400}>
                    <Box className="offer__btn">
                        <ButtonGroup>
                            <Button className="trail" title="Apply Now" />
                        </ButtonGroup>
                    </Box>
                </Fade>

            </Container>
        </FeatureSectionWrapper>
    );
};

// Offer style props
Offer.propTypes = {
    secTitleWrapper: PropTypes.object,
    row: PropTypes.object,
    col: PropTypes.object,
    secTitle: PropTypes.object,
    secDescription: PropTypes.object,
    featureTitle: PropTypes.object,
    featureDescription: PropTypes.object,
};

// Offer default style
Offer.defaultProps = {
    // section header default style
    secTitleWrapper: {
        mb: ['65px', '65px', '80px', '90px', '90px'],
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
    // feature row default style
    row: {
        flexBox: true,
        flexWrap: 'wrap',
    },
    // feature col default style
    col: {
        width: [1, 1 / 2, 1 / 3, 1 / 3],
    },
    // feature block wrapper default style
    blockWrapperStyle: {
        p: ['30px', '20px', '20px', '20px'],
    },
    // feature icon default style

    // feature content default style
    contentStyle: {
        textAlign: 'center',
        mt: ['30px', '30px'],
    },
    // feature title default style
    featureTitle: {
        fontSize: ['15px', '16px'],
        lineHeight: '1.5',
        fontWeight: '600',
        color: '#15172C',
        textAlign: 'center',
        fontFamily: 'Poppins',
    },
    // feature description default style
    featureDescription: {
        lineHeight: ['28px', '32px', '32px', '32px', '32px'],
        mt: ['15px', '15px', '15px', '15px', '15px'],
        maxWidth: ['100%', '100%', '100%', '270px', '270px'],
        textAlign: ['center', 'center'],
        fontSize: ['15px', '16px'],
        fontWeight: '400',
        color: '#15172C',
        fontFamily: 'Lato',
    },
};

export default Offer;
