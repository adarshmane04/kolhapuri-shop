# Kolhapuri Chappal House: React shop

A small online shop for Kolhapuri chappals. Men's and women's styles with prices, a cart,
Gmail login, an order form, and delivery to all 36 districts of Maharashtra.

## Run it

You need Node.js 18 or newer (https://nodejs.org).

```bash
npm install
npm run dev        # opens at http://localhost:5173
```

Build the final site:

```bash
npm run build      # creates the dist/ folder
npm run preview    # test the built site locally
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, or your own
hosting). The site uses `#` links, so it works without any server settings.

## Change your shop details (do this first)

Open `src/config.js` and replace:

- `phoneDisplay`, `phoneTel`, `whatsapp`: your phone number (currently `00000 00000`)
- `email`: your shop email
- `name`: the shop name, if you want something other than "Kolhapuri Chappal House"
- `freeDeliveryAbove`, `deliveryFee`, `deliveryDays`: delivery rules

## Change chappals and prices

Open `src/data/products.js`. Each pair has a name, price, MRP, sizes, description, style and
leather colour. The prices in the file are examples, so set your own.

To show real photos instead of the drawn chappals, put the image in `public/products/` and add
`image: './products/my-photo.jpg'` to that product.

## Logo

The logo is in `src/components/Logo.jsx`. A copy to download is in `public/logo.svg`, and the
browser tab icon is `public/favicon.svg`.

## Gmail login

By default the login page asks for a name and a Gmail address (it must end in `@gmail.com`).
This is a simple sign-in with no password check, so anyone can type any Gmail address.

For the real "Continue with Google" button:

1. Create an OAuth client (type: Web application) at https://console.cloud.google.com/apis/credentials
2. Add your site address (and `http://localhost:5173` for testing) under Authorised JavaScript origins.
3. Copy `.env.example` to `.env` and paste the client ID after `VITE_GOOGLE_CLIENT_ID=`
4. Restart `npm run dev` (or run `npm run build` again).

## Important: where orders go

This project has no server. Carts, logins and orders are saved in the customer's own browser.
So that you actually receive orders, the "My orders" page has a **Send order on WhatsApp**
button that opens WhatsApp to your number with the full order filled in.

To get orders automatically (email, dashboard) and to take online payment, you will need a
backend or a service such as Firebase, Supabase, Razorpay or EmailJS. Payment here is cash or
UPI on delivery only.

## Delivery check

`src/data/maharashtra.js` holds the 36 districts and the pincode rule. A pincode is accepted if
it starts with 400-402, 410-416, 421-425, 431 or 440-445. This is a quick check by prefix and
does not confirm that a particular village is serviceable.

## Files

```
src/config.js            shop details
src/data/products.js     chappals and prices
src/data/maharashtra.js  districts and pincode check
src/sections/            hero, shop, craft, delivery
src/pages/               login, checkout, orders
src/components/          header, footer, cart, logo, chappal drawing
src/styles.css           all styling
```
