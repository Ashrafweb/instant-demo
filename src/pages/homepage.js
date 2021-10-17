import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/instantPickUp';
import { ResetCSS } from 'common/assets/css/style';
import GlobalFonts from '../common/assets/fonts/fonts'
import Sticky from 'react-stickynode';
import Navbar from 'containers/HomePage/Navbar'
import Banner from 'containers/HomePage/service';
import FeatureTab from 'containers/HomePage/feature';
import GlobalStyle, {
    AppWrapper,
    ContentWrapper,
} from 'containers/HomePage/instantTheme.style';
import Description from 'containers/HomePage/description';
import Mission from 'containers/HomePage/Mission';
import GetStarted from 'containers/HomePage/getStarted';
import Footer from 'containers/Footer';
import Faq from 'containers/Faq';
import SideNav from 'containers/HomePage/Side__Nav';

const HomePage = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <Head>
                    <title>Home | Instant-Pickup</title>
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

                {/* start Homepage */}
                <AppWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-active">
                        <Navbar active="About Us" />
                    </Sticky>
                    <ContentWrapper>
                        <Banner />
                        <Description />
                        <Mission />
                        <FeatureTab />
                        <GetStarted />
                        <Faq />
                        <Footer />
                        <SideNav />
                    </ContentWrapper>
                </AppWrapper>
                {/* end of Homepage landing */}
            </>
        </ThemeProvider>
    );
};
export default HomePage;
