import React from 'react';
import Fade from 'react-reveal/Fade'
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './description.style';

import { description } from 'common/data/Homepage';

const Description = () => {
    const { title, thumb, features } = description;
    return (
        <SectionWrapper>
            <Container>

                <ThumbWrapper>
                    <Fade delay={800}>
                        <Image src={thumb} alt="Instant pickup homepage" />
                    </Fade>
                </ThumbWrapper>


                <TextWrapper>
                    <Fade delay={500}>
                        <Heading content={title} />
                    </Fade>
                    {features.map((item, index) => (
                        <Fade up delay={item.delay} key={index}>
                            <FeatureBlock
                                key={`app-feature--key${item.id}`}
                                iconPosition="left"
                                icon={<Text as="span" content={'0' + item.id} />}
                                title={<Heading as="h3" content={item.title} />}
                                description={<Text content={item.description} />}
                            />
                        </Fade>
                    ))}
                </TextWrapper>
            </Container>
        </SectionWrapper>
    );
};

export default Description;
