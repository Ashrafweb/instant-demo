import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/instantPickUp';
import { ResetCSS } from 'common/assets/css/style';
import GlobalFonts from '../common/assets/fonts/fonts'
import Sticky from 'react-stickynode';
import Navbar from 'containers/HomePage/Navbar'
import GlobalStyle, {
    AppWrapper,
    ContentWrapper,
} from 'containers/HomePage/instantTheme.style';
import Footer from 'containers/Footer';
import Hero from 'containers/About_us/Hero';
import Values from 'containers/About_us/Values';

const About = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <Head>
                    <title>Driver Page | Instant-Pickup</title>
                    <meta name="Description" content="Instant Pickup" />
                    <meta name="theme-color" content="#2563FF" />
                    <meta
                        name="keywords"
                        content="Instant pickup"
                    />
                </Head>
                {/* end of head */}

                <ResetCSS />
                <GlobalStyle />
                <GlobalFonts />

                {/* end of global and reset style */}

                {/* start Aboutpage */}
                <AppWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-active">
                        <Navbar active="About Us" />
                    </Sticky>
                    <ContentWrapper>
                        <Hero />
                        <Values />
                        <Footer />
                    </ContentWrapper>
                </AppWrapper>
                {/* end of About  */}
            </>
        </ThemeProvider>
    );
};
export default About;
