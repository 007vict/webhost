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
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <h2 className="u-text u-text-default u-text-1">
            <span className="u-text-palette-1-base">Start now</span> &amp;
            don't look back.
          </h2>
          <div className="u-clearfix u-gutter-18 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-left-cell u-palette-1-base u-shape-rectangle u-size-15 u-size-30-md u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <h2 className="u-text u-text-default u-text-3">Stop pushing your clients into a corner.</h2>
                    <p className="u-custom-font u-heading-font u-text u-text-default u-text-palette-1-light-2 u-text-4">
                      Fames ac turpis egestas integer. Viverra orci sagittis eu volutpat odio. </p>
                  </div>
                </div>

                <PlanCard />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

const Div = styled.div``;
