/**
 *
 * Promo
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export function Promo(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <section className="u-clearfix u-grey-10 u-valign-middle-lg u-valign-middle-xl u-section-1" id="sec-dedf">
        <div className="u-clearfix u-gutter-0 u-layout-wrap u-layout-wrap-1">
          <div className="u-layout" style={{}}>
            <div className="u-layout-row" style={{}}>
              <div className="u-align-center u-container-style u-image u-layout-cell u-right-cell u-size-35 u-size-xs-60 u-image-1"
                    data-image-width="1298" data-image-height="1080">
                <div className="u-container-layout u-valign-bottom u-container-layout-1" ></div>
              </div>
              <div className="u-align-center u-container-style u-layout-cell u-left-cell u-shape-rectangle u-size-25 u-size-xs-60 u-white u-layout-cell-2"
                   >
                <div className="u-container-layout u-valign-middle u-container-layout-2">
                  <h1 className="u-custom-font u-font-montserrat u-text u-text-palette-1-base u-text-1">Hosting for
                    your business<br/>
                  </h1>
                  <p className="u-text u-text-2">Image from <a href="https://www.freepik.com/psd/mockup"
                                                           className="u-border-1 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-btn u-button-link u-button-style u-none u-text-body-color u-btn-1">Freepik</a>
                  </p>
                  <a href="https://nicepage.review"
                     className="u-active-grey-90 u-border-none u-btn u-btn-round u-button-style u-hover-grey-90 u-palette-1-base u-radius-8 u-text-active-white u-text-body-alt-color u-text-hover-white u-btn-2">
                    Start Your Free Trial</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Div>
  );
}

const Div = styled.div``;
