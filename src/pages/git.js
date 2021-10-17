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
import GetInTouch from 'containers/GetInTouch';
import Footer from 'containers/Footer';
const HomePage = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <Head>
                    <title>Get In Touch | Instant-Pickup</title>
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

                <AppWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-active">
                        <Navbar active="git" />
                    </Sticky>
                    <ContentWrapper>
                        <GetInTouch />
                        <Footer />
                    </ContentWrapper>
                </AppWrapper>
                {/* end of Homepage landing */}
            </>
        </ThemeProvider>
    );
};
export default HomePage;
