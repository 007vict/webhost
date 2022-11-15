/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export const Header = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <header className="u-clearfix u-header u-header" id="sec-91cc">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <a href="https://nicepage.com" className="u-image u-logo u-image-1">
            <img src="./assets/images/default-logo.png" className="u-logo-image u-logo-image-1"/>
          </a>
          <nav className="u-menu u-menu-hamburger u-offcanvas u-menu-1" data-responsive-from="XL">
            <div className="menu-collapse"
                 style={{fontSize: "1rem", letterSpacing: 0, fontWeight: 700, textTransform: "uppercase"}}
                 wfd-invisible="true">
              <a className="u-button-style u-custom-active-border-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                 href="#">
                <svg className="u-svg-link" viewBox="0 0 24 24">
                  <use xlinkHref="#menu-hamburger"></use>
                </svg>
                <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px"
                     xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <rect y="1" width="16" height="2"></rect>
                    <rect y="7" width="16" height="2"></rect>
                    <rect y="13" width="16" height="2"></rect>
                  </g>
                </svg>
              </a>
            </div>
            <div className="u-custom-menu u-nav-container">
              <ul className="u-nav u-spacing-30 u-unstyled u-nav-1">
                <li className="u-nav-item"><a
                    className="u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90"
                    href="#" style={{padding: "10px 0px"}}>about us</a>
                </li>
              </ul>
            </div>
            <div className="u-custom-menu u-nav-container-collapse" wfd-invisible="true">
              <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-inner-container-layout u-sidenav-overflow">
                  <div className="u-menu-close"></div>
                  <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="#"
                                                  style={{padding: "10px 20px"}}>about us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="u-black u-menu-overlay u-opacity u-opacity-70" wfd-invisible="true"></div>
            </div>
          </nav>
        </div>
      </header>

    </>
  );
});

const Div = styled.div``;
