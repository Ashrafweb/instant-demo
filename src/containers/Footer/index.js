import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/ContainerTwo';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import Box from 'common/components/Box';
import SocialProfile from 'containers/SocialProfile';
import { SOCIAL_PROFILES } from 'common/data/Homepage'
import FooterWrapper, {
  FooterInner,
  CopyrightInfo,
  FooterWidget,
  Nav,
  FooterImgWrapper,
  FooterBottom
} from './footer.style';
import FooterImage from 'common/assets/image/HomePage/FooterLogo.png';
import Logo from 'common/assets/image/Logo_main.svg';
import InstantIcon from 'common/assets/image/Logo.svg';
import data from 'common/data/Footer';

const Footer = () => {
  const year = '2021';
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <CopyrightInfo>
            <Fade up delay={100}>
              <FooterImgWrapper>
                <Image src={Logo} alt="instant pickup" />
                <Image src={FooterImage} alt="Logo" />
              </FooterImgWrapper>
            </Fade>
          </CopyrightInfo>

          <FooterWidget>
            <Fade up delay={200}>
              <Heading as="h4" content="Contact" />
              <Nav>
                {data.contacts.map((item, index) => (
                  <Link key={index} href="#">
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={300}>
              <Heading as="h4" content="Discover" />
              <Nav>
                {data.discover.map((item) => (
                  <Link key={item.id} href="#">
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>


        </FooterInner>
      </Container>

      <FooterBottom>
        <Box align="center">
          <Text
            className="copyright"
            content={`Copyright by @Instant PickUp,${year}`}
          />
        </Box>
        <Box>
          <Image src={InstantIcon} alt="instant pickup icon" />
        </Box>
        <Box>
          <SocialProfile
            className="footer_social"
            items={SOCIAL_PROFILES}
            iconSize={30}
          />
        </Box>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
