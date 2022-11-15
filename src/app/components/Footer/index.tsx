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

export const Footer = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      {t('')}
      {/*  {t(...messages.someThing())}  */}
      <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-2260">
        <div className="u-clearfix u-sheet u-sheet-1">
          <p className="u-small-text u-text u-text-variant u-text-1">Sample text. Click to select the text box. Click
            again or
            double click to start editing the text.</p>
        </div>
      </footer>

    </>
  );
});

// const Div = styled.div``;
