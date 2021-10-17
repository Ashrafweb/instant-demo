import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';

import SectionWrapper, { ContentWrapper, FaqItem } from './faq.style';
import { faqs } from 'common/data/Faq';
import { SectionHeader } from 'containers/HomePage/instantTheme.style';

const Faq = () => {
  const title = "Frequently Asked Questions";
  return (
    <SectionWrapper id="faq">
      <Container>
        <Fade up delay={100}>
          <SectionHeader>
            <Heading as="h2" content={title} slogan="Ideal solutions for you" />
          </SectionHeader>

        </Fade>
        <ContentWrapper>
          {faqs.map((faq) => (
            <Fade key={faq.id} up delay={100 * faq.id}>
              <FaqItem>
                <Heading as="h4" content={faq.title} />
                <Text content={faq.desc} />
              </FaqItem>
            </Fade>
          ))}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Faq;
