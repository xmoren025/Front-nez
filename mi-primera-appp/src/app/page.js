"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
//import { FaLock } from "react-icons/fa";
//import { FaEnvelope } from "react-icons/fa";



export default function Home() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const handleChange = ({ target: { name, value }}) =>
  {
    setUserData({...userData, [name]: value})
  }


  // Validaciones y demás 
  const handleSubmit = (e) => {
    e.preventDefault()

    if (userData.password.length < 8) {
      alert("La contraseña debe contener 8 caracteres o más.")
      
    }

    if (!userData.password){
      alert("Complete el campo de conttraseña")
    }


  }

  useEffect(() => {console.log(userData)}, [userData])

  return (
    <div className="login-page" >
      <form className="login-form" onSubmit={handleSubmit}>
        <Image
          src="/images/logos/nez2-logo-512.png"
          alt="Nez logo"
          width={300}
          height={200}
        />
        <p className="login-text">Sig in to start your sesion</p>
        <hr className="h-[1px] bg-gray-500  my-2" />
        <input className="login-input" type="email" name="email" placeholder="Email" onChange={handleChange}/>
        <input className="login-input" type="password" name = "password" placeholder="Password" onChange={handleChange}/>
        <div className="button-wrapper">
          <button className="submit-btn">Iniciar sesión</button>
        </div>
        <Link href={"/forget-password"} className="login-link">Olvidaste tu contra</Link>
        <Link href={"/register"} className="login-link">Registrarse</Link>    
      </form>
    </div>
  );
}
