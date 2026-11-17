// Edit this file to change shop details. No other code needs touching.

export const STORE = {
  name: 'Kolhapuri Chappal House',
  nameMr: 'कोल्हापुरी चप्पल',

  // TODO: replace these three with your real number.
  phoneDisplay: '+91 00000 00000',
  phoneTel: '+910000000000', // used for the tap-to-call link
  whatsapp: '910000000000', // country code + number, digits only

  // TODO: replace with your shop email.
  email: 'hello@example.com',

  // Delivery rules shown on the site and used at checkout.
  freeDeliveryAbove: 1999,
  deliveryFee: 79,
  deliveryDays: '3 to 6 working days',
};

// Optional: real "Continue with Google" button. See README.
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
