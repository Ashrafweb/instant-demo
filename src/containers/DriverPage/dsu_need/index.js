import React from 'react';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import SectionWrapper, { TextWrapper } from './dsuNeed.style';
import Fade from 'react-reveal/Fade';
import { driverNeeds } from 'common/data/DriverPage';
import Box from 'common/components/Box';

const DriverNeeds = () => {
    const { title, needs, image } = driverNeeds;



    return (
        <SectionWrapper>
            <Container>
                <Box className="image">
                    <Fade left delay={600}>
                        <Image src={image} alt={title} />
                    </Fade>
                </Box>
                <TextWrapper>
                    <Fade delay={600}>
                        <Heading as="h2" content={title} />
                    </Fade>
                    {needs.map((item, index) => (
                        <Fade bottom delay={item.delay} key={index} >
                            <FeatureBlock
                                key={`app-feature--key${item.id}`}
                                iconPosition="left"
                                icon={<img src={item.icon} alt="Driver needs" />}
                                description={<Heading as="h3" content={item.title} />}
                            />
                        </Fade>
                    ))}
                </TextWrapper>
            </Container>
        </SectionWrapper>
    );
};

export default DriverNeeds;
