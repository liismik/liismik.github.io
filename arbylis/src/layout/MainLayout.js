import React from 'react';
// eslint-disable-next-line no-unused-vars
import styles from '../layout/MainLayout.css';
import logo from '../images/logo.png';
import linkedIn from '../images/linkedIn.png';
import instagram from '../images/instagram.png';

const MainLayout = () => {
    //var language = window.navigator.userLanguage || window.navigator.language;
//alert(language);
    return (
        <div id="container">
            <div id="header">
                <div id="logo_cell">
                    <img src={logo} alt="logo" id="logo" />
                </div>
                <p id="space"></p>
                <div id="linkedin_cell">
                    <img src={linkedIn} alt="linkedIn" id="linkedin" />
                </div>
                <div id="instagram_cell">
                    <img src={instagram} alt="instagram" id="instagram" />
                </div>
                <p id="space_right"></p>
            </div>
            <div id="menu"></div>
        </div>
    );
};

export default MainLayout;