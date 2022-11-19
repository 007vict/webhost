/**
 *
 * PlanCard
 *
 */
import React, { ReactFragment } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { selectAllCard } from './slice/index'

import { useSelector } from 'react-redux'
import { select } from './slice/selectors'

interface Props {}

export const PlanCard = ((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const cardAll = selectAllCard.card

  return (
    <>
      {t('')}
      {/*  {t(...messages.someThing())}  */}



    </>
  );
});

const Div = styled.div``;
