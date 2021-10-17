import React from 'react';

import navLine from '../../../common/assets/image/HomePage/NavLine.svg';
import van from '../../../common/assets/image/HomePage/sideVan.png';
import { SideNavWrapper, NavLine, NavVan } from './sideNav.style'
const SideNav = () => {
    return (
        <SideNavWrapper>
            <NavLine src={navLine} alt='side Nav' />
            <NavVan src={van} alt='van' />
        </SideNavWrapper>
    );
};

export default SideNav;
