/**
 *
 * Plans
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

import { PlanCard } from './PlanCard'

interface Props {}

export const Plans = ((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <section className="u-align-center u-clearfix u-grey-10 u-section-7" id="carousel_3837">
        <div className="u-clearfix u-sheet u-sheet-1">
          <h2 className="u-text u-text-default u-text-1">
            <span className="u-text-palette-1-base">Start now</span> &amp;
            don't look back.
          </h2>
          <div className="u-clearfix u-gutter-18 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-left-cell u-palette-1-base u-shape-rectangle u-size-15 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <h2 className="u-text u-text-default u-text-3">Stop pushing your clients into a corner.</h2>
                    <p className="u-custom-font u-heading-font u-text u-text-default u-text-palette-1-light-2 u-text-4">
                      Fames ac turpis egestas integer. Viverra orci sagittis eu volutpat odio. </p>
                  </div>
                </div>
                <div className="u-align-center u-container-style u-layout-cell u-shape-rectangle u-size-15 u-white u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-2">
                    <h4 className="u-text u-text-grey-50 u-text-5">basic</h4>
                    <div className="u-align-center u-container-style u-expanded-width u-group u-group-1">
                      <div className="u-container-layout u-valign-middle u-container-layout-3">
                        <h2 className="u-text u-text-6">$ 29</h2>
                      </div>
                    </div>
                    <p className="u-text u-text-7">1 full user <br/>1,000 Email Previews <br/>5 contacts per client
                      <br/>5 coffee cups<br/>
                    </p>
                    <a href="#sec-99e3"
                       className="u-btn u-btn-round u-button-style u-dialog-link u-grey-15 u-hover-palette-1-base u-radius-8 u-btn-1"
                       target="_blank">buy now</a>
                  </div>
                </div>
                <div className="u-align-center u-container-style u-layout-cell u-shape-rectangle u-size-15 u-white u-layout-cell-3">
                  <div className="u-container-layout u-container-layout-4">
                    <h4 className="u-text u-text-grey-50 u-text-8">advanced</h4>
                    <div className="u-container-style u-expanded-width u-group u-palette-1-base u-group-2">
                      <div className="u-container-layout u-valign-middle u-container-layout-5">
                        <h2 className="u-align-center u-text u-text-9">$ 59</h2>
                      </div>
                    </div>
                    <p className="u-text u-text-10">10 full users<br/>2,000 Email Previews<br/>20 contacts per client
                      <br/>20 coffee cups<br/>
                    </p>
                    <a href="#sec-99e3"
                       className="u-btn u-btn-round u-button-style u-dialog-link u-grey-15 u-hover-palette-1-base u-radius-8 u-btn-2"
                       target="_blank">buy now</a>
                  </div>
                </div>
                <div className="u-align-center u-container-style u-layout-cell u-right-cell u-shape-rectangle u-size-15 u-white u-layout-cell-4">
                  <div className="u-container-layout u-container-layout-6">
                    <h4 className="u-text u-text-grey-50 u-text-11">business</h4>
                    <div className="u-align-center u-container-style u-expanded-width u-group u-group-3">
                      <div className="u-container-layout u-valign-middle u-container-layout-7">
                        <h2 className="u-text u-text-12">$ 139</h2>
                      </div>
                    </div>
                    <p className="u-text u-text-13">20 full user<br/>Unlimited Email Previews<br/>Unlimited
                      contacts<br/>100 coffee cups
                    </p>
                    <a href="#sec-99e3"
                       className="u-btn u-btn-round u-button-style u-dialog-link u-grey-15 u-hover-palette-1-base u-radius-8 u-btn-3"
                       target="_blank">buy now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
});

const Div = styled.div``;
