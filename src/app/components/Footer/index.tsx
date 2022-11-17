/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

export const Footer = ((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const currentYear = (new Date().getFullYear())
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

  return (
    <>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-2260">
        <div className="u-clearfix u-sheet u-sheet-1">
          <p className="u-small-text u-text u-text-variant u-text-1">
            © { yearTxt } Service - Developed by Company
          </p>
        </div>
      </footer>
    </>
  );
});

// const Div = styled.div``;
