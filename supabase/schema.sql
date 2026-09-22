create extension if not exists pgcrypto;

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  username text not null,
  password text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.holdings (
  id uuid primary key default gen_random_uuid(),
  name text,
  qty numeric,
  avg numeric,
  price numeric,
  net text,
  day text,
  created_at timestamptz not null default now()
);

create table if not exists public.positions (
  id uuid primary key default gen_random_uuid(),
  product text,
  name text,
  qty numeric,
  avg numeric,
  price numeric,
  net text,
  day text,
  is_loss boolean,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  name text,
  qty numeric,
  price numeric,
  mode text,
  created_at timestamptz not null default now()
);