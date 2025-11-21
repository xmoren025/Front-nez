"use client"
import { redirect } from 'next/navigation';
<meta name="viewport" content="width=device-width, initial-scale=1" />

// Source - https://stackoverflow.com/a
// Posted by NearHuscarl, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-21, License - CC BY-SA 4.0



export default function Home() {
  redirect("/auth/login");
}