import React from 'react';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Fade from 'react-reveal/Fade'
import Heading from 'common/components/Heading';
import { SectionHeader } from '../instantTheme.style';
import FeatureBlock from 'common/components/FeatureBlock';

import SectionWrapper, {
    MissionMainWrap,
    MissionWrapper,

} from './mission.style';
import { missions } from 'common/data/Homepage';
import ReadMore from './ReadMore';


const Mission = () => {
    const { title, features } = missions;



    return (
        <SectionWrapper id="mission">
            <Container>
                <SectionHeader>
                    <Fade delay={500}>
                        <Heading as="h2" content={title} />
                    </Fade>
                </SectionHeader>
                <MissionMainWrap>
                    <MissionWrapper>
                        {features.map((item, index) => (
                            <Fade delay={150 * item.id} key={`key-feature--key${item.id}`}>
                                <FeatureBlock
                                    key={`post_key-${index}`}
                                    id={`post_id-${item.id}`}
                                    className="mission__item"
                                    icon={
                                        <Image
                                            src={item.icon}
                                            alt={`Icon ${item.id}`}
                                            objectFit="cover"
                                            className="mission__image"
                                        />
                                    }
                                    iconPosition="left"
                                    title={<Heading as="h4" content={item.title} />}
                                    description={<ReadMore>{item.description}</ReadMore>}
                                />
                            </Fade>
                        ))}

                    </MissionWrapper>

                </MissionMainWrap>
            </Container>
        </SectionWrapper>
    );
};

export default Mission;
