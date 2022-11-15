import * as React from 'react';

import { Header } from 'app/components/Header/index';
import { Footer } from 'app/components//Footer';
import { Promo } from 'app/components/Promo';
import { Benefits } from 'app/components/Benefits';
import { Faq } from 'app/components/Faq';
import { Contact } from 'app/components/Contact';
import { Plans } from 'app/components/Plans';

export function HomePage() {
  return (
    <>
      <Header/>
      <Promo />
      <Benefits />
      <Plans />
      <Faq />
      <Contact />
      <Footer/>
    </>
  );
}