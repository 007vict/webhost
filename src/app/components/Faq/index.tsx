/**
 *
 * Faq
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export const Faq = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <section className="u-align-center u-clearfix u-section-6" id="sec-bc23">
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
          <h2 className="u-text u-text-default u-text-1">faq</h2>
          <div className="u-accordion u-expanded-width-xs u-faq u-spacing-20 u-accordion-1">
            <div className="u-accordion-item">
              <a className="active u-accordion-link u-border-1 u-border-active-grey-75 u-border-grey-15 u-border-hover-grey-75 u-border-no-left u-border-no-right u-border-no-top u-button-style u-text-black u-accordion-link-1"
                 id="link-accordion-6327" aria-controls="accordion-6327" aria-selected="true">
                <span className="u-accordion-link-text">Do you provide support?</span><span
                className="u-accordion-link-icon u-icon u-text-black u-icon-1"><svg className="u-svg-link"
                                                                                preserveAspectRatio="xMidYMin slice"
                                                                                viewBox="0 0 16 16" style={{}}><use
                xlinkHref="#svg-8021"></use></svg><svg className="u-svg-content" viewBox="0 0 16 16" x="0px"
                                                        y="0px" id="svg-8021" style={{}}><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
              </a>
              <div className="u-accordion-active u-accordion-pane u-container-style u-accordion-pane-1"
                   id="accordion-6327" aria-labelledby="link-accordion-6327" wfd-invisible="true">
                <div className="u-container-layout u-container-layout-1">
                  <div className="fr-view u-clearfix u-rich-text u-text">
                    <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit
                      ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et
                      ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem
                      odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-accordion-item">
              <a className="u-accordion-link u-border-1 u-border-active-grey-75 u-border-grey-15 u-border-hover-grey-75 u-border-no-left u-border-no-right u-border-no-top u-button-style u-text-black u-accordion-link-2"
                 id="link-accordion-4aab" aria-controls="accordion-4aab" aria-selected="false">
                <span className="u-accordion-link-text"> What is a web hosting service? </span><span
                className="u-accordion-link-icon u-icon u-text-black u-icon-2"><svg className="u-svg-link"
                                                                                preserveAspectRatio="xMidYMin slice"
                                                                                viewBox="0 0 16 16" style={{}}><use
                xlinkHref="#svg-3470"></use></svg><svg className="u-svg-content" viewBox="0 0 16 16" x="0px"
                                                        y="0px" id="svg-3470" style={{}}><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
              </a>
              <div className="u-accordion-pane u-container-style u-accordion-pane-2" id="accordion-4aab"
                   aria-labelledby="link-accordion-4aab" wfd-invisible="true">
                <div className="u-container-layout u-container-layout-2">
                  <div className="u-clearfix u-rich-text u-text">
                    <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit
                      ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et
                      ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem
                      odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-accordion-item">
              <a className="u-accordion-link u-border-1 u-border-active-grey-75 u-border-grey-15 u-border-hover-grey-75 u-border-no-left u-border-no-right u-border-no-top u-button-style u-text-black u-accordion-link-3"
                 id="link-accordion-eb1f" aria-controls="accordion-eb1f" aria-selected="false">
                <span className="u-accordion-link-text"> Do I have to pay in advance?</span><span
                className="u-accordion-link-icon u-icon u-text-black u-icon-3"><svg className="u-svg-link"
                                                                                preserveAspectRatio="xMidYMin slice"
                                                                                viewBox="0 0 16 16" style={{}}><use
                xlinkHref="#svg-e07d"></use></svg><svg className="u-svg-content" viewBox="0 0 16 16" x="0px"
                                                        y="0px" id="svg-e07d" style={{}}><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
              </a>
              <div className="u-accordion-pane u-container-style u-accordion-pane-3" id="accordion-eb1f"
                   aria-labelledby="link-accordion-eb1f" wfd-invisible="true">
                <div className="u-container-layout u-container-layout-3">
                  <div className="fr-view u-clearfix u-rich-text u-text">
                    <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit
                      ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et
                      ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem
                      odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-accordion-item">
              <a className="u-accordion-link u-border-1 u-border-active-grey-75 u-border-grey-15 u-border-hover-grey-75 u-border-no-left u-border-no-right u-border-no-top u-button-style u-text-black u-accordion-link-4"
                 id="link-c01c" aria-controls="c01c" aria-selected="false">
                <span className="u-accordion-link-text"> How much does web hosting cost?</span><span
                className="u-accordion-link-icon u-icon u-text-black u-icon-4"><svg className="u-svg-link"
                                                                                preserveAspectRatio="xMidYMin slice"
                                                                                viewBox="0 0 16 16" style={{}}><use
                xlinkHref="#svg-e4a1"></use></svg><svg className="u-svg-content" viewBox="0 0 16 16" x="0px"
                                                        y="0px" id="svg-e4a1"><path d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"></path></svg></span>
              </a>
              <div className="u-accordion-pane u-container-style u-accordion-pane-4" id="c01c"
                   aria-labelledby="link-c01c">
                <div className="u-container-layout u-container-layout-4">
                  <div className="fr-view u-clearfix u-rich-text u-text">
                    <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit
                      ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et
                      ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem
                      odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Div>
  );
});

const Div = styled.div``;
