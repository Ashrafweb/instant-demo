import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Scrollspy from 'react-scrollspy';
//import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import Logo from 'common/components/UIElements/Logo';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import NavbarWrapper, { NavbarComponent, MenuArea, MobileMenu, Link } from './navbar.style';

import { navbar } from 'common/data/Navbar';

const Navbar = ({ active }) => {
    const { logo, navMenu } = navbar;
    const [state, setState] = useState({
        search: '',
        searchToggle: false,
        mobileMenu: false,
    });

    const toggleHandler = (type) => {
        if (type === 'search') {
            setState({
                ...state,
                search: '',
                searchToggle: !state.searchToggle,
                mobileMenu: false,
            });
        }

        if (type === 'menu') {
            setState({
                ...state,
                mobileMenu: !state.mobileMenu,
            });
        }
    };

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
                    className="logo"
                    href="/homepage"
                    logoSrc={logo}
                    title="Instant PickUp"
                />

                <MenuArea className={state.searchToggle ? 'active' : ''}>
                    <NavbarComponent className="menu" offset={-84}>
                        {navMenu.map((menu, index) => (
                            <li key={`menu_key${index}`} className={active === menu.label ? 'active' : ''}>
                                <Link
                                    href={menu.path}
                                    offset={menu.offset}
                                    onClick={handleRemoveMenu}

                                >
                                    {menu.label}
                                </Link>
                            </li>
                        ))}
                        <Link href="/git" offset={84} className={active === 'git' ? 'active' : ''}>
                            <Button className={active === 'git' ? 'active' : 'trail'} title="Get In Touch" />
                        </Link>
                    </NavbarComponent>



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

                {/* <Button
                    className="menubar"
                    icon={
                        (
                            <Icon className="bar" icon={x} />
                        )


                    }
                    color="#0F2137"
                    variant="textButton"
                    onClick={() => toggleHandler('menu')}
                /> */}
                <Container>
                    <Scrollspy
                        className="menu"
                        currentClassName="active"
                    >
                        {navMenu.map((menu, index) => (
                            <li key={`menu_key${index}`}>
                                <Link
                                    href={menu.path}
                                    offset={menu.offset}
                                    onClick={handleRemoveMenu}
                                >
                                    {menu.label}
                                </Link>
                            </li>
                        ))}
                        <li className="git__btn">
                            <Link href="/git" offset={84}>
                                <Button className='trail' title="Get In Touch" />
                            </Link>
                        </li>
                    </Scrollspy>
                </Container>
            </MobileMenu>
            {/* end of mobile menu */}
        </NavbarWrapper>
    );
};

export default Navbar;
