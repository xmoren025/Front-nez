"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("@/components/forms/loginForm"), {
  ssr: false,
});

export default function Login() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
    >
      {/* El componente LoginForm ahora contiene ambas columnas */}
      <LoginForm />
    </div>
  );
}