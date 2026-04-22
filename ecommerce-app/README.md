# 🛍️ Asali Swad eCommerce Storefront

A modern full-stack eCommerce storefront built with **Next.js**, **Tailwind CSS**, and **Supabase**. Orders are sent via WhatsApp using a pre-filled message, designed specifically for Cash on Delivery (COD) services.

## ✨ Key Features

- **Modern UI/UX**: Responsive design with stunning visuals and glassmorphism.
- **Product Management**: categories, images, and descriptions.
- **WhatsApp Checkout**: Seamless integration for easy order processing.
- **Admin Panel**: Secure portal for managing products and tracking orders.
- **AI Assistant**: Smart search and product recommendations.

## 🛠️ Getting Started

### 1. Installation
```bash
npm install
```

### 2. Configuration
Create a `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=j.your-anon-key
```

### 3. Database Schema (Supabase)

Run these SQL scripts in the Supabase SQL Editor:

#### Categories
```sql
CREATE TABLE categories (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
```

#### Products
```sql
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  description TEXT,
  image_url TEXT,
  images TEXT[] DEFAULT '{}',
  category_id BIGINT REFERENCES categories(id)
);
```

#### Orders
```sql
CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  product_details TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 4. Storage Setup
1. Open the **Storage** tab in Supabase.
2. Create a new bucket named `product-images`.
3. Set the bucket to **Public**.

## 🚀 Deployment

We recommend deploying with **Cloudflare Pages** using the `@cloudflare/next-on-pages` adapter.

1. **Connect to GitHub**: Link your repository in the Cloudflare Dashboard.
2. **Build Settings**:
   - **Framework Preset**: `None` (or `Next.js` if available, but manual config is safer)
   - **Build Command**: `npm run build-pages`
   - **Build Output Directory**: `.vercel/output/static`
3. **Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`: `https://zhmftnlqkfppqnofpgjz.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `sb_publishable_Pe9Nk-lo1h0F4UYFyw1tOw_9okQFDi1`
4. **Deploy**: Click **Save and Deploy**.

## 📦 Scripts

- `npm run dev`: Start local development server.
- `npm run build`: Build production bundle.
- `npm run start`: Start production server.
- `npm run lint`: Run ESLint.

---

Built for **Asali Swad**.
