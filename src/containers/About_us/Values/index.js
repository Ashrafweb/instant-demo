import React from 'react';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Fade from 'react-reveal/Fade'
import Heading from 'common/components/Heading';
import { SectionHeader } from '../../HomePage/instantTheme.style';
import ValueBlock from 'common/components/ValueBlock';

import SectionWrapper, {
    ValueMainWrap,
    ValueWrapper,

} from './values.style';
import { values } from 'common/data/About_us';
import ReadMore from '../../HomePage/Mission/ReadMore';


const Values = () => {
    const { title, contents } = values;



    return (
        <SectionWrapper id="Value">
            <Container>
                <SectionHeader>
                    <Fade delay={500}>
                        <h2>Our <span style={{ color: '#8FC046' }}>Values</span></h2>
                    </Fade>
                </SectionHeader>
                <ValueMainWrap>
                    <ValueWrapper>
                        {contents.map((item, index) => (
                            <Fade delay={150 * item.id} key={`key-feature--key${item.id}`}>
                                <ValueBlock
                                    key={`${index}`}
                                    id={`${item.id}`}
                                    className={`value__item  item${item.id}`}
                                    icon={
                                        <Image
                                            src={item.icon}
                                            alt={`Icon ${item.id}`}
                                            objectFit="cover"
                                            className="value__image"
                                        />
                                    }
                                    iconPosition="left"
                                    title={<Heading as="h4" content={item.title} />}
                                    description={<ReadMore>{item.description}</ReadMore>}
                                />

                            </Fade>
                        ))}

                    </ValueWrapper>

                </ValueMainWrap>
            </Container>
        </SectionWrapper>
    );
};

export default Values;
