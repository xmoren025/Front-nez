"use client"
import { redirect } from 'next/navigation';

<meta name="viewport" content="width=device-width, initial-scale=1" />

export default function Home() {
  redirect("/auth/login");
}