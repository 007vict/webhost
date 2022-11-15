import * as React from 'react';

import { Header } from 'app/components/Header/index';
import { Footer } from 'app/components//Footer';
import { Promo } from 'app/components/Promo';
import { Benefits } from 'app/components/Benefits';

export function HomePage() {
  return (
    <>
      <Header/>
      <Promo />
      <Benefits />
      <Footer/>
    </>
  );
}