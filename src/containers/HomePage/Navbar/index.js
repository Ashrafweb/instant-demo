
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import Logo from 'common/components/UIElements/Logo';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import NavbarWrapper, { MenuArea, MobileMenu, Link } from './navbar.style';

import { navbar } from 'common/data/Navbar';

const Navbar = ({ active }) => {
    const { logo, navMenu } = navbar;
    const [state, setState] = useState({
        mobileMenu: false,
    });


    const toggleHandler = (type) => {
        if (type === 'menu') {
            setState({
                ...state,
                mobileMenu: !state.mobileMenu,
            });
        }
    };

    const scrollItems = [];

    navMenu.forEach((item) => {
        scrollItems.push(item.path.slice(1));
    });

    const handleRemoveMenu = () => {
        setState({
            ...state,
            mobileMenu: false,
        });
    };

    return (
        <NavbarWrapper className="navbar">
            <Container>
                <Logo
                    href="/home"
                    logoSrc={logo}
                    title="Instant Pickup"
                    className="main-logo"
                />

                {/* end of logo */}

                <MenuArea>
                    <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} activeMenu={active} />


                    <Button
                        className="menubar"
                        icon={
                            state.mobileMenu ? (
                                <Icon className="bar" icon={x} />
                            ) : (
                                <Fade>
                                    <Icon className="close" icon={menu} />
                                </Fade>
                            )
                        }
                        color="#0F2137"
                        variant="textButton"
                        onClick={() => toggleHandler('menu')}
                    />
                </MenuArea>
            </Container>

            {/* start mobile menu */}
            <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
                <Container>
                    <Scrollspy
                        className="menu"
                        items={scrollItems}
                        offset={-84}
                        currentClassName="active"
                    >
                        {navMenu.map((menu, index) => (
                            <li key={`menu_key${index}`}>
                                <Link

                                    href={menu.path}
                                    offset={menu.offset}
                                    onClick={handleRemoveMenu}
                                    className={active}
                                >
                                    {menu.label}
                                </Link>
                            </li>
                        ))}
                        <Link href="/git" offset={84} className={active === 'git' ? 'active' : ''}>
                            <Button title="Get In Touch" />
                        </Link>
                    </Scrollspy>
                </Container>
            </MobileMenu>
            {/* end of mobile menu */}
        </NavbarWrapper>
    );
};

export default Navbar;





