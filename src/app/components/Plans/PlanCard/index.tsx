/**
 *
 * PlanCard
 *
 */
import React, { memo, ReactFragment } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { selectAllCard } from './slice/index'



interface Props {}

export const PlanCard = ((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const cardAll = selectAllCard.card

  return (
    <>
      {t('')}
      {/*  {t(...messages.someThing())}  */}

      {
        cardAll.map(
          (card) =>
            <div className="u-align-center u-container-style u-layout-cell u-shape-rectangle u-size-15 u-size-30-md u-white u-layout-cell-2">
              <div className="u-container-layout u-container-layout-2">
                <h4 className="u-text u-text-grey-50 u-text-5">{card.title}</h4>
                <div className="u-align-center u-container-style u-expanded-width u-group u-group-1">
                  <div className="u-container-layout u-valign-middle u-container-layout-3">
                    <h2 className="u-text u-text-6">$ {card.price}</h2>
                  </div>
                </div>
                <p className="u-text u-text-7">{card.countUser} full user <br/>{card.countEmail} Email Previews <br/>{card.contacts} contacts
                  <br/>{card.coffeeCup} coffee cups<br/>
                </p>
                <a href="https://nicepage.com/k/aesthetic-website-templates"
                   className="u-border-none u-btn u-btn-round u-button-style u-grey-15 u-hover-palette-1-base u-radius-8 u-btn-1"
                   target="_blank">buy now</a>
              </div>
            </div>
        )
      }

    </>
  );
});

const Div = styled.div``;
