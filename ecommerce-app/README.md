# AS Store — WhatsApp COD eCommerce

A modern full-stack eCommerce storefront built with Next.js, Tailwind CSS, and Supabase. Orders are sent via WhatsApp using a pre-filled message, and an admin panel is included for product, category, and order management.

## Features

- Home page with hero, featured products, and categories
- Product listing page with search and category filter
- Product detail page with multiple images and WhatsApp order button
- Cart system with quantity updates
- Checkout page with customer details and WhatsApp order generation
- Admin panel with Supabase Auth protection
- Product and category CRUD
- Optional Supabase order storage and order status updates

## Environment variables

Create a `.env.local` file in the project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Supabase setup

1. Create a Supabase project
2. Create a `product-images` storage bucket and set it as public
3. Create tables using SQL or Supabase Table Editor:

### categories
- id: integer, primary key, auto increment
- name: text

### products
- id: integer, primary key, auto increment
- name: text
- price: numeric
- description: text
- image_url: text
- images: text[] (optional)
- category_id: integer

### orders
- id: integer, primary key, auto increment
- customer_name: text
- phone: text
- address: text
- product_details: text
- status: text
- created_at: timestamp with time zone, default now()

4. Create an admin user with Supabase Auth in the Auth section
5. Add a row-level policy if desired for extra protection

## Scripts

```bash
npm install
npm run dev
```

## Deployment

### Render

1. Connect the repository to Render
2. Set build command: `npm run build`
3. Set start command: `npm run start`
4. Add environment variables in Render dashboard
5. Deploy

### Railway

1. Create a new Railway project and connect the repo
2. Add environment variables
3. Set the build command to `npm install && npm run build`
4. Set the start command to `npm run start`

## WhatsApp message helper

The app uses `src/lib/whatsapp.ts` for message encoding and pre-filled order text.

## Notes

- Orders are Cash on Delivery only
- Admin routes are protected by Supabase Auth
- Product image uploads are saved to Supabase Storage
- Checkout sends order details to WhatsApp and optionally stores orders in Supabase
