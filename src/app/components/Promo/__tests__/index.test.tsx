import * as React from 'react';
import { render } from '@testing-library/react';

import { Promo } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Promo  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Promo />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
