import enCommon from '../locales/en/common.json';
import enDonation from '../locales/en/donation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    returnNull: false;
    allowObjectInHTMLChildren: true;
    resources: {
      common: typeof enCommon;
      donation: typeof enDonation;
    };
  }
}
