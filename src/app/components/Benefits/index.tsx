/**
 *
 * Benefits
 *
 */
import React, {memo} from 'react';
import styled from 'styled-components/macro';
import {useTranslation} from 'react-i18next';
import {messages} from './messages';

interface Props {
}

export const Benefits = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {t, i18n} = useTranslation();

  return (
    <>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <section
        className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xl u-align-left-xs u-clearfix u-section-2"
        id="sec-1960">
        <div
          className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
          <h2
            className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xl u-text u-text-default u-text-palette-1-base u-text-1">
            Hosting solution with benefits</h2>
          <p className="u-align-center-lg u-align-center-md u-align-center-sm u-align-center-xl u-text u-text-2">With a
            lot of
            powerful features, we guarantee simplicity and clarity.</p>
          <div className="u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-1"><span
                  className="u-icon u-icon-circle u-palette-1-light-3 u-text-palette-1-base u-icon-1"><svg
                  className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style={{}}><use
                  xlinkHref="#svg-fbc4"></use></svg><svg className="u-svg-content" viewBox="0 0 512 512"
                                                         id="svg-fbc4"><g><path
                  d="m164.593 162.777-86.833 86.833c-5.858 5.858-5.858 15.355 0 21.213l78.4 78.4c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213l-67.793-67.794 76.226-76.227c5.858-5.858 5.858-15.355 0-21.213s-15.356-5.858-21.213.001z"></path><path
                  d="m355.84 162.777c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l67.793 67.794-76.226 76.227c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0l86.833-86.833c5.858-5.858 5.858-15.355 0-21.213z"></path><path
                  d="m300.389 129.558c-7.814-2.76-16.38 1.338-19.139 9.149l-79.318 224.597c-2.758 7.812 1.337 16.38 9.149 19.139 7.809 2.758 16.38-1.336 19.139-9.149l79.318-224.597c2.758-7.812-1.338-16.381-9.149-19.139z"></path><path
                  d="m439.536 68.701h-367.072c-39.957 0-72.464 32.507-72.464 72.464v229.67c0 39.957 32.507 72.464 72.464 72.464h367.072c39.957 0 72.464-32.507 72.464-72.464v-229.67c0-39.957-32.507-72.464-72.464-72.464zm42.464 302.134c0 23.415-19.049 42.464-42.464 42.464h-367.072c-23.415 0-42.464-19.049-42.464-42.464v-229.67c0-23.415 19.049-42.464 42.464-42.464h367.072c23.415 0 42.464 19.049 42.464 42.464z"></path>
</g></svg>
            
            
          </span>
                  <h5 className="u-custom-font u-font-roboto-condensed u-text u-text-palette-1-base u-text-3"> Code
                    Editor</h5>
                  <p className="u-text u-text-palette-5-dark-2 u-text-4">Sample text. Click to select the text box.
                    Click again or double click to start editing the text.</p>
                </div>
              </div>
              <div className="u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-2"><span
                  className="u-icon u-icon-circle u-palette-1-light-3 u-text-palette-1-base u-icon-2"><svg
                  className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 24 24" style={{}}><use
                  xlinkHref="#svg-6749"></use></svg><svg className="u-svg-content" viewBox="0 0 24 24"
                                                         id="svg-6749"><path
                  d="m12 6c-1.228 0-12-.084-12-3s10.772-3 12-3 12 .084 12 3-10.772 3-12 3zm-10.412-3c.732.568 4.245 1.5 10.412 1.5s9.68-.932 10.412-1.5c-.732-.568-4.245-1.5-10.412-1.5s-9.68.932-10.412 1.5zm20.939.116h.01z"></path><path
                  d="m12 12c-1.228 0-12-.084-12-3 0-.414.336-.75.75-.75.385 0 .702.29.745.664.462.553 4.012 1.586 10.505 1.586s10.043-1.033 10.505-1.586c.043-.374.36-.664.745-.664.414 0 .75.336.75.75 0 2.916-10.772 3-12 3zm10.5-3.001c0 .001 0 .001 0 0zm-21 0c0 .001 0 .001 0 0z"></path><path
                  d="m12 18c-1.228 0-12-.084-12-3 0-.414.336-.75.75-.75.385 0 .702.29.745.664.462.553 4.012 1.586 10.505 1.586s10.043-1.033 10.505-1.586c.043-.374.36-.664.745-.664.414 0 .75.336.75.75 0 2.916-10.772 3-12 3zm10.5-3.001c0 .001 0 .001 0 0zm-21 0c0 .001 0 .001 0 0z"></path><path
                  d="m12 24c-1.228 0-12-.084-12-3v-18c0-.414.336-.75.75-.75s.75.336.75.75v17.919c.481.556 4.03 1.581 10.5 1.581s10.019-1.025 10.5-1.581v-17.919c0-.414.336-.75.75-.75s.75.336.75.75v18c0 2.916-10.772 3-12 3z"></path><circle
                  cx="5" cy="14" r="1"></circle><circle cx="5" cy="8" r="1"></circle><circle cx="5" cy="20"
                                                                                             r="1"></circle></svg>
            
            
          </span>
                  <h5 className="u-custom-font u-font-roboto-condensed u-text u-text-palette-1-base u-text-5"> Media
                    Storage</h5>
                  <p className="u-text u-text-palette-5-dark-2 u-text-6">Sample text. Click to select the text box.
                    Click again or double click to start editing the text.</p>
                </div>
              </div>
              <div className="u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-3"><span
                  className="u-icon u-icon-circle u-palette-1-light-3 u-text-palette-1-base u-icon-3"><svg
                  className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style={{}}><use
                  xlinkHref="#svg-6777"></use></svg><svg className="u-svg-content" viewBox="0 0 512 512" x="0px"
                                                         y="0px" id="svg-6777"
                                                         style={{}}><g><g><path
                  d="M419.721,196.465H92.279c-16.414,0-29.767,13.354-29.767,29.767v256c0,16.414,13.354,29.767,29.767,29.767h327.442    c16.414,0,29.767-13.354,29.767-29.767v-256C449.488,209.819,436.135,196.465,419.721,196.465z M413.767,476.279H98.233V232.186    h315.535V476.279z"></path>
</g>
</g><g><g><path d="M256,0c-80.426,0-145.86,65.971-145.86,147.051v61.321h35.721v-61.321c0-61.386,49.408-111.33,110.14-111.33    c60.732,0,110.14,49.944,110.14,111.33v61.321h35.721v-61.321C401.861,65.971,336.432,0,256,0z"></path>
</g>
</g><g><g><path d="M253.023,333.395c-9.865,0-17.86,7.996-17.86,17.86v41.674c0,9.865,7.996,17.86,17.86,17.86s17.86-7.996,17.86-17.86    v-41.674C270.884,341.391,262.888,333.395,253.023,333.395z"></path>
</g>
</g></svg>
            
            
          </span>
                  <h5 className="u-custom-font u-font-roboto-condensed u-text u-text-palette-1-base u-text-7"> SSL
                    Certificate</h5>
                  <p className="u-text u-text-palette-5-dark-2 u-text-8">Sample text. Click to select the text box.
                    Click again or double click to start editing the text.</p>
                </div>
              </div>
              <div className="u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-4"><span
                  className="u-icon u-icon-circle u-palette-1-light-3 u-text-palette-1-base u-icon-4"><svg
                  className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 490.667 490.667"
                  style={{}}><use xlinkHref="#svg-863d"></use></svg><svg className="u-svg-content"
                                                                         viewBox="0 0 490.667 490.667" x="0px"
                                                                         y="0px" id="svg-863d"
                                                                         style={{}}><g><g><path
                  d="M437.333,149.333h-384C23.915,149.333,0,173.269,0,202.667V288c0,29.397,23.915,53.333,53.333,53.333h384    c29.419,0,53.333-23.936,53.333-53.333v-85.333C490.667,173.269,466.752,149.333,437.333,149.333z M469.333,288    c0,17.643-14.357,32-32,32h-384c-17.643,0-32-14.357-32-32v-85.333c0-17.643,14.357-32,32-32h384c17.643,0,32,14.357,32,32V288z"></path>
</g>
</g><g><g><path d="M245.333,42.667c-5.888,0-10.667,4.779-10.667,10.667V160c0,5.888,4.779,10.667,10.667,10.667S256,165.888,256,160V53.333    C256,47.445,251.221,42.667,245.333,42.667z"></path>
</g>
</g><g><g><path d="M245.333,320c-5.888,0-10.667,4.779-10.667,10.667v106.667c0,5.888,4.779,10.667,10.667,10.667S256,443.221,256,437.333    V330.667C256,324.779,251.221,320,245.333,320z"></path>
</g>
</g><g><g><path d="M351.061,157.163C331.52,86.528,291.029,42.667,245.333,42.667s-86.187,43.861-105.728,114.496    c-1.579,5.675,1.749,11.541,7.424,13.12c5.739,1.557,11.584-1.771,13.12-7.445C176.768,102.805,210.219,64,245.333,64    s68.565,38.805,85.205,98.837c1.28,4.736,5.568,7.829,10.261,7.829c0.939,0,1.877-0.128,2.837-0.384    C349.312,168.725,352.64,162.837,351.061,157.163z"></path>
</g>
</g><g><g><path d="M343.637,320.384c-5.739-1.536-11.584,1.771-13.12,7.445c-16.619,60.032-50.069,98.837-85.184,98.837    s-68.565-38.805-85.184-98.837c-1.536-5.675-7.339-8.981-13.12-7.445c-5.675,1.557-9.003,7.445-7.424,13.12    C159.147,404.139,199.637,448,245.333,448s86.187-43.861,105.728-114.496C352.64,327.829,349.312,321.963,343.637,320.384z"></path>
</g>
</g><g><g><path d="M426.688,155.243c-34.56-69.44-104.043-112.576-181.355-112.576S98.539,85.803,63.979,155.264    c-2.624,5.269-0.469,11.669,4.8,14.293c5.227,2.624,11.669,0.469,14.293-4.8C114.005,102.613,176.171,64,245.333,64    s131.328,38.613,162.283,100.757c1.856,3.733,5.611,5.909,9.536,5.909c1.6,0,3.221-0.363,4.736-1.131    C427.157,166.912,429.312,160.512,426.688,155.243z"></path>
</g>
</g><g><g><path d="M421.888,321.109c-5.248-2.603-11.669-0.491-14.293,4.8c-30.933,62.144-93.099,100.757-162.261,100.757    S114.005,388.053,83.072,325.931c-2.624-5.291-9.067-7.403-14.293-4.8c-5.269,2.624-7.424,9.024-4.8,14.293    C98.539,404.864,168.021,448,245.333,448s146.795-43.136,181.355-112.597C429.312,330.133,427.157,323.733,421.888,321.109z"></path>
</g>
</g><g><g><path d="M290.56,192.32c-5.803-1.429-11.52,2.027-12.928,7.765l-12.437,49.792l-9.749-29.248c-2.901-8.704-17.323-8.704-20.245,0    l-9.749,29.248l-12.437-49.792c-1.408-5.739-7.296-9.216-12.928-7.765c-5.739,1.429-9.195,7.232-7.765,12.928l21.333,85.333    c1.152,4.587,5.205,7.893,9.941,8.064c5.568,0.235,9.045-2.795,10.539-7.275l11.2-33.643l11.2,33.643    c1.472,4.373,5.547,7.296,10.133,7.296c0.128,0,0.277,0,0.384-0.021c4.736-0.171,8.789-3.456,9.941-8.064l21.333-85.333    C299.755,199.531,296.299,193.749,290.56,192.32z"></path>
</g>
</g><g><g><path d="M162.581,192.32c-5.803-1.429-11.499,2.027-12.949,7.765l-12.437,49.792l-9.749-29.248    c-2.901-8.704-17.323-8.704-20.245,0l-9.749,29.248l-12.437-49.792c-1.429-5.739-7.296-9.216-12.928-7.765    c-5.739,1.429-9.195,7.232-7.765,12.928l21.333,85.333c1.152,4.587,5.205,7.893,9.941,8.064c5.653,0.235,9.045-2.795,10.539-7.275    l11.2-33.643l11.2,33.643c1.472,4.373,5.547,7.296,10.133,7.296c0.128,0,0.277,0,0.405-0.021c4.736-0.171,8.789-3.456,9.941-8.064    l21.333-85.333C171.776,199.531,168.32,193.749,162.581,192.32z"></path>
</g>
</g><g><g><path d="M418.56,192.32c-5.824-1.429-11.52,2.027-12.928,7.765l-12.437,49.792l-9.749-29.248c-2.901-8.704-17.323-8.704-20.245,0    l-9.749,29.248l-12.437-49.792c-1.408-5.739-7.296-9.216-12.928-7.765c-5.717,1.429-9.173,7.211-7.765,12.928l21.333,85.333    c1.152,4.587,5.205,7.893,9.941,8.064c5.461,0.235,9.045-2.795,10.539-7.275l11.2-33.643l11.2,33.643    c1.472,4.373,5.547,7.296,10.133,7.296c0.128,0,0.277,0,0.384-0.021c4.736-0.171,8.789-3.456,9.941-8.064l21.333-85.333    C427.755,199.531,424.299,193.749,418.56,192.32z"></path>
</g>
</g></svg>
            
            
          </span>
                  <h5 className="u-custom-font u-font-roboto-condensed u-text u-text-palette-1-base u-text-9">
                    Personal Domain</h5>
                  <p className="u-text u-text-palette-5-dark-2 u-text-10">Sample text. Click to select the text box.
                    Click again or double click to start editing the text.</p>
                </div>
              </div>
              <div className="u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-5"><span
                  className="u-icon u-icon-circle u-palette-1-light-3 u-icon-5"><svg className="u-svg-link"
                                                                                     preserveAspectRatio="xMidYMin slice"
                                                                                     viewBox="-41 0 512 512"
                                                                                     style={{}}><use
                  xlinkHref="#svg-778c"></use></svg><svg className="u-svg-content" viewBox="-41 0 512 512"
                                                         id="svg-778c"><path
                  d="m234.453125 151.4375c4.335937-9.339844 2.894531-20.039062-3.761719-27.917969l-99.21875-117.480469c-3.242187-3.839843-7.980468-6.039062-13.011718-6.039062-5.027344 0-9.769532 2.199219-13.007813 6.039062l-99.21875 117.480469c-6.65625 7.882813-8.101563 18.582031-3.761719 27.921875 4.382813 9.4375 13.609375 15.304688 24.082032 15.304688h19.503906l13.941406 111.429687c3.640625 29.085938 28.773438 51.019531 58.460938 51.019531s54.820312-21.933593 58.457031-51.019531l13.945312-111.429687h19.503907c10.472656 0 19.703124-5.867188 24.085937-15.308594zm-55.054687-14.691406c-8.558594 0-15.8125 6.390625-16.875 14.871094l-15.371094 122.832031c-1.765625 14.109375-14.101563 24.746093-28.691406 24.746093-14.589844 0-26.925782-10.636718-28.691407-24.746093l-15.367187-122.820313c-1.054688-8.484375-8.3125-14.882812-16.878906-14.882812h-23.191407l84.132813-99.613282 84.128906 99.613282zm0 0"></path><path
                  d="m427.5625 360.558594c-4.386719-9.4375-13.613281-15.304688-24.085938-15.304688h-19.5l-13.945312-111.429687c-3.640625-29.085938-28.773438-51.019531-58.460938-51.019531s-54.816406 21.933593-58.457031 51.019531l-13.945312 111.429687h-19.503907c-10.472656 0-19.699218 5.867188-24.085937 15.308594-4.335937 9.339844-2.894531 20.039062 3.765625 27.917969l99.226562 117.488281c3.238282 3.832031 7.976563 6.03125 13 6.03125 5.027344 0 9.765626-2.199219 13.003907-6.03125l99.226562-117.488281c6.65625-7.882813 8.097657-18.582031 3.761719-27.921875zm-115.992188 114.308594-84.128906-99.613282h23.191406c8.558594 0 15.8125-6.390625 16.875-14.871094l15.371094-122.832031c1.765625-14.109375 14.101563-24.746093 28.691406-24.746093 14.59375 0 26.925782 10.636718 28.691407 24.746093l15.367187 122.820313c1.058594 8.484375 8.3125 14.882812 16.878906 14.882812h23.191407zm0 0"></path></svg>
            
            
          </span>
                  <h5 className="u-custom-font u-font-roboto-condensed u-text u-text-palette-1-base u-text-11"> Domain
                    Transfer</h5>
                  <p className="u-text u-text-palette-5-dark-2 u-text-12">Sample text. Click to select the text box.
                    Click again or double click to start editing the text.</p>
                </div>
              </div>
              <div className="u-container-style u-list-item u-repeater-item">
                <div className="u-container-layout u-similar-container u-valign-top-xl u-container-layout-6"><span
                  className="u-icon u-icon-circle u-palette-1-light-3 u-text-palette-1-base u-icon-6"><svg
                  className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 -40 512 511" style={{}}><use
                  xlinkHref="#svg-8c6c"></use></svg><svg className="u-svg-content" viewBox="0 -40 512 511"
                                                         id="svg-8c6c"><path
                  d="m497 193.300781h-40.167969c-1.214843 0-2.417969.050781-3.613281.128907-9.023438-8.050782-19.003906-14.699219-29.679688-19.820313 24.347657-17.292969 40.261719-45.710937 40.261719-77.777344 0-52.566406-42.765625-95.332031-95.332031-95.332031-52.570312 0-95.335938 42.765625-95.335938 95.332031 0 25.261719 9.882813 48.257813 25.976563 65.332031h-70.148437c16.09375-17.074218 25.972656-40.070312 25.972656-65.332031 0-52.566406-42.765625-95.332031-95.332032-95.332031-52.566406 0-95.335937 42.765625-95.335937 95.332031 0 29.480469 13.453125 55.875 34.539063 73.378907-14.601563 5.457031-28.148438 13.617187-40.027344 24.21875-1.195313-.078126-2.394532-.128907-3.609375-.128907h-40.167969c-8.285156 0-15 6.714844-15 15v80.332031c0 8.285157 6.714844 15 15 15h1.066406v113.535157c0 8.28125 6.714844 15 15 15h449.867188c8.285156 0 15-6.71875 15-15v-113.535157h1.066406c8.285156 0 15-6.714843 15-15v-80.332031c0-8.285156-6.714844-15-15-15zm-15 80.332031h-25.167969c-13.875 0-25.167969-11.289062-25.167969-25.167968 0-13.875 11.292969-25.164063 25.167969-25.164063h25.167969zm-178.867188-177.800781c0-36.023437 29.308594-65.332031 65.332032-65.332031 36.023437 0 65.335937 29.308594 65.335937 65.332031 0 36.027344-29.308593 65.332031-65.332031 65.332031-36.027344 0-65.335938-29.304687-65.335938-65.332031zm-143.53125-65.332031c36.023438 0 65.332032 29.308594 65.332032 65.332031 0 36.023438-29.308594 65.332031-65.332032 65.332031-36.027343 0-65.335937-29.304687-65.335937-65.332031 0-36.023437 29.308594-65.332031 65.335937-65.332031zm-129.601562 192.800781h25.167969c13.875 0 25.167969 11.289063 25.167969 25.167969 0 13.875-11.292969 25.164062-25.167969 25.164062h-25.167969zm16.066406 80.332031h9.101563c30.417969 0 55.167969-24.746093 55.167969-55.167968 0-16.84375-7.601563-31.941406-19.539063-42.066406h.355469c15.503906-9.917969 33.535156-15.230469 52.382812-15.230469h142.886719c-27.757813 23.398437-45.421875 58.40625-45.421875 97.464843v113.535157h-130.667969v-65.335938c0-8.28125-6.714843-15-15-15-8.28125 0-15 6.71875-15 15v65.332031h-34.265625zm419.867188 98.53125h-34.269532v-65.332031c0-8.28125-6.714843-15-15-15-8.28125 0-15 6.71875-15 15v65.332031h-130.664062v-113.53125c0-53.742187 43.722656-97.464843 97.46875-97.464843 18.933594 0 37.039062 5.359375 52.582031 15.359375-11.851562 10.128906-19.382812 25.164062-19.382812 41.941406 0 30.417969 24.746093 55.164062 55.167969 55.164062h9.097656zm0 0"></path></svg>
            
            
          </span>
                  <h5 className="u-custom-font u-font-roboto-condensed u-text u-text-palette-1-base u-text-13">
                    Developer Friendly</h5>
                  <p className="u-text u-text-palette-5-dark-2 u-text-14">Sample text. Click to select the text box.
                    Click again or double click to start editing the text.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="u-align-center u-clearfix u-section-3" id="carousel_4504">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-shape u-shape-svg u-text-grey-40 u-shape-1">
            <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160" style={{}}>
              <use xlinkHref="#svg-2d5e"></use>
            </svg>
            <svg className="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-2d5e">
              <path d="M114.3,152.3l38-38C144.4,130.9,130.9,144.4,114.3,152.3z M117.1,9.1l-108,108c0.8,1.6,1.7,3.2,2.7,4.8l110-110
	C120.3,10.9,118.7,10,117.1,9.1z M97.5,2L2,97.5c0.4,2,1,4,1.5,5.9l99.9-99.9C101.5,2.9,99.5,2.4,97.5,2z M80,160c2,0,4-0.1,5.9-0.2
	l73.9-73.9c0.1-2,0.2-3.9,0.2-5.9c0-0.6,0-1.2,0-1.9L78.1,160C78.8,160,79.4,160,80,160z M34.9,146.1c1.5,1,3,2,4.6,2.9L149,39.5
	c-0.9-1.6-1.9-3.1-2.9-4.6L34.9,146.1z M132.7,19.8L19.8,132.7c1.2,1.3,2.3,2.6,3.6,3.9L136.6,23.4C135.3,22.2,134,21,132.7,19.8z
	 M59.6,157.4l97.8-97.8c-0.5-1.9-1.1-3.8-1.7-5.7L53.9,155.6C55.8,156.3,57.7,156.9,59.6,157.4z M7.6,45.9L45.9,7.6
	C29.1,15.5,15.5,29.1,7.6,45.9z M80,0c-2.6,0-5.1,0.1-7.6,0.4l-72,72C0.1,74.9,0,77.4,0,80c0,0.1,0,0.2,0,0.2L80.2,0
	C80.2,0,80.1,0,80,0z"></path>
            </svg>
          </div>
          <div className="u-palette-1-base u-preserve-proportions u-shape u-shape-circle u-shape-2"></div>
          <img className="u-image u-image-default u-image-1" data-image-width="900" data-image-height="635"
               src="./assets/images/b0e8ea6c-f26d-a0b2-d308-76430fa686a8.jpg"/>
            <div className="u-align-left u-container-style u-grey-10 u-group u-group-1">
              <div className="u-container-layout u-valign-middle u-container-layout-1">
                <h2 className="u-text u-text-default u-text-1"> Fastest Hosting</h2>
                <p className="u-text u-text-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.</p>
                <p className="u-text u-text-3">Image from <a href="https://freepik.com/photos/people"
                                                         className="u-active-none u-border-1 u-border-black u-border-no-left u-border-no-right u-border-no-top u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1">Freepik</a>
                </p>
                <a href="https://nicepage.review"
                   className="u-active-grey-90 u-border-none u-btn u-btn-round u-button-style u-hover-grey-90 u-palette-1-base u-radius-8 u-text-active-white u-text-body-alt-color u-text-hover-white u-btn-2"><span
                  className="u-icon u-icon-1"><svg className="u-svg-content" viewBox="0 0 512 512"
                                               style={{width: "1em", height: "1em"}}><g id="Solid"><path
                  d="m239.029 384.97a24 24 0 0 0 33.942 0l90.509-90.509a24 24 0 0 0 0-33.941 24 24 0 0 0 -33.941 0l-49.539 49.539v-262.059a24 24 0 0 0 -48 0v262.059l-49.539-49.539a24 24 0 0 0 -33.941 0 24 24 0 0 0 0 33.941z"></path><path
                  d="m464 232a24 24 0 0 0 -24 24v184h-368v-184a24 24 0 0 0 -48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40v-192a24 24 0 0 0 -24-24z"></path>
</g></svg><img/></span>&nbsp;Download Pricing
                </a>
              </div>
            </div>
            <div className="u-shape u-shape-svg u-text-palette-5-light-1 u-shape-3">
              <svg className="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160" style={{}}>
                <use xlinkHref="#svg-a0bf"></use>
              </svg>
              <svg className="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-a0bf"
                   >
                <path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80
	s80-35.8,80-80S124.2,0,80,0L80,0z"></path>
              </svg>
            </div>
        </div>
      </section>
      <section className="u-clearfix u-white u-section-4" id="carousel_1a76">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-left-cell u-similar-fill u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-valign-top u-container-layout-1">
                    <h2 className="u-text u-text-palette-1-base u-text-1">We help and solve your business
                      problem.</h2>
                    <div className="u-border-6 u-border-palette-1-base u-line u-line-horizontal u-line-1"></div>
                  </div>
                </div>
                <div className="u-align-left u-container-style u-layout-cell u-right-cell u-similar-fill u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-valign-top u-container-layout-2">
                    <p className="u-text u-text-font u-text-grey-50 u-text-2"> Pretium aenean pharetra magna ac
                      placerat vestibulum lectus mauris. Placerat vestibulum lectus mauris ultrices eros in.
                      Viverra nibh cras pulvinar mattis nunc sed.</p>
                    <a href="https://nicepage.com/html-website-builder"
                       className="u-active-grey-90 u-btn u-btn-round u-button-style u-custom u-hover-grey-90 u-palette-1-base u-radius-8 u-text-active-white u-text-body-alt-color u-text-hover-white u-btn-1">read
                      more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-expanded-width u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-align-left u-container-style u-grey-10 u-list-item u-repeater-item u-list-item-1">
                <div className="u-container-layout u-similar-container u-container-layout-3">
                  <h5 className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-palette-1-base u-text-3">
                    Unlimited storage</h5>
                  <p className="u-text u-text-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
                    justo sagittis suscipit ultrices.&nbsp;Morbi enim nunc faucibus a pellentesque sit amet
                    porttitor. Sapien eget mi proin sed libero enim sed faucibus. Vel fringilla est ullamcorper
                    eget. </p>
                </div>
              </div>
              <div className="u-align-left u-container-style u-grey-10 u-list-item u-repeater-item u-list-item-2">
                <div className="u-container-layout u-similar-container u-container-layout-4">
                  <h5 className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-palette-1-base u-text-5">
                    Unmetered bandwidth</h5>
                  <p className="u-text u-text-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
                    justo sagittis suscipit ultrices.&nbsp;Morbi enim nunc faucibus a pellentesque sit amet
                    porttitor. Sapien eget mi proin sed libero enim sed faucibus. Vel fringilla est ullamcorper
                    eget. </p>
                </div>
              </div>
              <div className="u-align-left u-container-style u-grey-10 u-list-item u-repeater-item u-list-item-3">
                <div className="u-container-layout u-similar-container u-container-layout-5">
                  <h5 className="u-custom-font u-font-roboto-condensed u-text u-text-default u-text-palette-1-base u-text-7">
                    Domain registration</h5>
                  <p className="u-text u-text-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
                    justo sagittis suscipit ultrices.&nbsp;Morbi enim nunc faucibus a pellentesque sit amet
                    porttitor. Sapien eget mi proin sed libero enim sed faucibus. Vel fringilla est ullamcorper
                    eget. </p>
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
