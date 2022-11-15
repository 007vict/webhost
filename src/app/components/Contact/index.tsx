/**
 *
 * Contact
 *
 */
import React, {memo} from 'react';
import styled from 'styled-components/macro';
import {useTranslation} from 'react-i18next';
import {messages} from './messages';

interface Props {
}

export const Contact = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {t, i18n} = useTranslation();

  return (
    <>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <section className="u-align-center u-clearfix u-section-8" id="carousel_463f">
        <div
          className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-sm u-valign-middle-xl u-valign-middle-xs u-sheet-1">
          <div className="u-shape u-shape-svg u-text-palette-1-base u-shape-1">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 140" style={{}}>
              <use xlinkHref="#svg-c4d4"></use>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                 xmlSpace="preserve" className="u-svg-content" viewBox="0 0 160 140" x="0px" y="0px" id="svg-c4d4">
              <g>
                <g>
                  <path d="M138.9,102.2c-9.5,10.1-24.4,20.2-41.2,27.4C63.2,144.5,21,147.1,3.1,112.4c-9.9-19.1,6.5-28.8,11.8-45.7
			c5.3-16.9-11.4-32.3-5.1-49.9c1.8-4.9,4.9-9,8.9-11.9C24,1,30.8-0.8,37.8,0.3C43.6,1.2,49,3.5,54.3,5.7c8.8,3.7,17.4,7.1,26.3,9.8
			c15.7,4.7,31.3,3.7,47.1,7.2c8.5,1.9,16.7,5.6,22.6,11.8C170.3,55.7,155.8,84.1,138.9,102.2z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="u-shape u-shape-svg u-text-palette-1-base u-shape-2">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 120" style={{}}>
              <use xlinkHref="#svg-b310"></use>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                 xmlSpace="preserve" className="u-svg-content" viewBox="0 0 160 120" x="0px" y="0px" id="svg-b310">
              <path d="M124.3,80.3c20.5-1.1,32-18.4,34.8-31.5c4.7-22.6-6.7-55.4-81.5-47.7c-124.8,12.7-75.1,145.7-16.9,114
	C99.9,93.7,86.4,82.3,124.3,80.3z"></path>
            </svg>
          </div>
          <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-row">
                <div
                  className="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-white u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <h2 className="u-text u-text-grey-70 u-text-1">Contact us</h2>
                    <p className="u-text u-text-grey-50 u-text-2">3045 10 Sunrize Avenue, 123-456-7890<br/>Mon – Fri:
                      9:00 am – 8:00 pm,<br/>Sat – Sun: 9:00 am – 10 pm<br/>
                      <a href="mailto:"
                         className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1"
                         target="_blank">contacts@esbnyc.com</a>
                    </p>
                    <div className="u-social-icons u-spacing-20 u-social-icons-1">
                      <a className="u-social-url" target="_blank" href=""><span
                        className="u-icon u-icon-circle u-social-facebook u-social-icon u-icon-1">
                    <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use
                      xlinkHref="#svg-50ee"></use></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                         xmlSpace="preserve" className="u-svg-content" viewBox="0 0 112 112" x="0px" y="0px"
                         id="svg-50ee"><path
                      d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"></path></svg>
                  </span>
                      </a>
                      <a className="u-social-url" target="_blank" href=""><span
                        className="u-icon u-icon-circle u-social-icon u-social-twitter u-icon-2">
                    <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use
                      xlinkHref="#svg-d346"></use></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                         xmlSpace="preserve" className="u-svg-content" viewBox="0 0 112 112" x="0px" y="0px"
                         id="svg-d346"><path
                      d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2 c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7 c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2 c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5 c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z"></path></svg>
                  </span>
                      </a>
                      <a className="u-social-url" target="_blank" href=""><span
                        className="u-icon u-icon-circle u-social-icon u-social-instagram u-icon-3">
                    <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use
                      xlinkHref="#svg-dd2a"></use></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                         xmlSpace="preserve" className="u-svg-content" viewBox="0 0 112 112" x="0px" y="0px"
                         id="svg-dd2a"><path
                      d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"></path><path
                      d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z"></path><path
                      d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7 V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7 c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"></path></svg>
                  </span>
                      </a>
                      <a className="u-social-url" target="_blank" href=""><span
                        className="u-icon u-icon-circle u-social-google u-social-icon u-icon-4">
                    <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style={{}}><use
                      xlinkHref="#svg-102d"></use></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                         xmlSpace="preserve" className="u-svg-content" viewBox="0 0 112 112" x="0px" y="0px"
                         id="svg-102d"><path
                      d="M62.2,81.6c-8.6,11.2-24.6,14.4-37.6,10C10.9,87,0.8,73.2,1,58.5c-0.8-18,15.2-34.6,33.1-34.9 c9.2-0.8,18.2,2.7,25,8.6c-2.9,3.1-5.7,6.2-8.9,9.2c-6.2-3.8-13.5-6.5-20.6-4C18.1,40.7,11,54.2,15.4,65.6 c3.5,11.8,17.8,18.3,29.2,13.2c5.8-2.1,9.7-7.4,11.3-13.2c-6.6-0.1-13.2,0-20.1-0.3c0-3.9,0-7.9,0-11.9c11.2,0,22.2,0,33.3,0 C69.9,63.4,68.3,73.9,62.2,81.6z M110.9,63.7c-3.4,0-6.6,0-10,0c0,3.4,0,6.6,0,10c-3.4,0-6.6,0-10,0c0-3.4,0-6.6,0-10 c-3.4,0-6.6,0-10,0c0-3.4,0-6.6,0-10c3.4,0,6.6,0,10,0c0-3.4,0-6.6,0.1-10c3.4,0,6.6,0,10,0c0,3.4,0,6.6,0,10c3.4,0,6.6,0,10,0 C110.9,56.9,110.9,60.3,110.9,63.7z"></path></svg>
                  </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-white u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <div className="u-expanded-width u-form u-form-1">
                      <form action="https://forms.nicepagesrv.com/Form/Process"
                            className="u-clearfix u-form-spacing-24 u-form-vertical u-inner-form"
                            style={{padding: 24}} resource="email" name="form">
                        <div className="u-form-group u-form-name">
                          <label htmlFor="name-3b9a" className="u-form-control-hidden u-label">Name</label>
                          <input type="text" placeholder="Enter your Name" id="name-3b9a" name="name"
                                 className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-1"
                                 required/>
                        </div>
                        <div className="u-form-email u-form-group">
                          <label htmlFor="email-3b9a" className="u-form-control-hidden u-label">Email</label>
                          <input type="email" placeholder="Enter a valid email address" id="email-3b9a"
                                 name="email"
                                 className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-2"
                                 required/>
                        </div>
                        <div className="u-form-group u-form-message">
                          <label htmlFor="message-3b9a" className="u-form-control-hidden u-label">Message</label>
                          <textarea placeholder="Enter your message" rows={4} cols={50} id="message-3b9a"
                                    name="message"
                                    className="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-3"
                                    required></textarea>
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                          <a href="#"
                             className="u-black u-btn u-btn-submit u-button-style u-hover-grey-60 u-btn-2">Submit</a>
                          <input type="submit" value="submit" className="u-form-control-hidden"/>
                        </div>
                        <div className="u-form-send-message u-form-send-success"> Thank you! Your message has
                          been sent.
                        </div>
                        <div className="u-form-send-error u-form-send-message"> Unable to send your message.
                          Please fix errors then try again.
                        </div>
                        <input type="hidden" value="" name="recaptchaResponse"/>
                        <input type="hidden" name="formServices" value="6d39ca2be285c0b37a170b4096286115"/>
                      </form>
                    </div>
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
