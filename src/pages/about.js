import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/instantPickUp';
import { ResetCSS } from 'common/assets/css/style';
import GlobalFonts from '../common/assets/fonts/fonts'
import Sticky from 'react-stickynode';
import Navbar from 'containers/HomePage/Navbar'
import Banner from 'containers/DriverPage/Banner';
import GlobalStyle, {
    AppWrapper,
    ContentWrapper,
} from 'containers/HomePage/instantTheme.style';

import AppPreview from 'containers/DriverPage/dsu_appPreview';
import Offer from 'containers/DriverPage/dsu_offer';
import Footer from 'containers/Footer';
import Faq from 'containers/Faq';
import DriverNeeds from 'containers/DriverPage/dsu_need';
import Hero from 'containers/About_us/Hero';
import Values from 'containers/About_us/Values';

const HomePage = () => {
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

                {/* start Driverpage */}
                <AppWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-active">
                        <Navbar active="about_us" />
                    </Sticky>
                    <ContentWrapper>
                        <Hero />
                        <Values />
                        <Footer />
                    </ContentWrapper>
                </AppWrapper>
                {/* end of Homepage landing */}
            </>
        </ThemeProvider>
    );
};
export default HomePage;
