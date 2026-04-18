# 🌶️ Asali Swad — Premium eCommerce Platform

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-blue?logo=supabase)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, high-performance eCommerce storefront for **Asali Swad**, specializing in handmade Bori and premium grocery products. Built with a focus on speed, user experience, and a seamless WhatsApp-based ordering system.

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 18+
- A Supabase Project
- A GitHub Account

### 2. Local Installation
```bash
# Clone the repository
git clone https://github.com/rahuladhikaey/ownskill2.git
cd ownskill2/ecommerce-app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## 🛠️ Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Backend/Database:** [Supabase](https://supabase.com/) (PostgreSQL + Auth + Storage)
- **Order System:** WhatsApp Business Integration (Cash on Delivery)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 🔗 Database Connection (Supabase)

To connect your database, follow these steps in your [Supabase Dashboard](https://supabase.com/dashboard):

1. **Get Credentials**: Go to **Project Settings > API** and copy your `URL` and `anon public` key.
2. **Setup Tables**: Run the following SQL in the **SQL Editor**:
   - Create `categories`, `products`, and `orders` tables.
   - Refer to [ecommerce-app/README.md](./ecommerce-app/README.md#supabase-setup) for specific column schemas.
3. **Storage**: Create a **public** bucket named `product-images` for product photos.

---

## 🌐 Deployment & Hosting (Your Domain)

To host this website on your own domain (e.g., `yourdomain.com`), we recommend using **Vercel**:

### 1. Deploy to Vercel
1. Go to [Vercel](https://vercel.com/) and click **"Add New" > "Project"**.
2. Connect your GitHub repository (`ownskill2`).
3. Set the **Root Directory** to `ecommerce-app`.
4. Add your **Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click **Deploy**.

### 2. Connect Your Domain
1. In the Vercel Dashboard, go to **Settings > Domains**.
2. Type your domain name (e.g., `asaliswad.com`).
3. Follow the instructions to add **A Records** or **CNAME** in your domain registrar (GoDaddy, Namecheap, etc.).
4. Vercel will automatically generate an SSL certificate for you.

---

## 📂 Project Structure

```text
/
├── ecommerce-app/        # Main Next.js application
│   ├── src/app/          # Application routes and pages
│   ├── src/components/   # Reusable UI components
│   ├── src/lib/          # Supabase client and utilities
│   └── public/           # Static assets
└── Asali Swad pic/       # Original product photography and assets
```

---

## 📄 License

This project is licensed under the MIT License.

---

Developed with ❤️ for **Asali Swad**.
