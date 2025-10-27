// components/NavBar.jsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';

// Elements MUI
import {
  Avatar,
  ButtonBase,
} from "@mui/material";

// Iconos MUI
import {
  Extension,
  AddBox,
  ViewList,
  Inventory2,
  FolderOpen,
  Logout,
  ExpandLess,
  ExpandMore
} from "@mui/icons-material";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openSections, setOpenSections] = useState({
    services: true,
    storage: true
  });
  const [avatarSrc, setAvatarSrc] = useState(undefined);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const closeMobileNav = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const handleLogoClick = () => {
    closeMobileNav(); // Cerrar menú móvil si está abierto
  };

  return (
    <>
      {/* Botón menú móvil */}
      {isMobile && (
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
      )}

      {/* Overlay móvil */}
      {isMobile && isOpen && (
        <div 
          className={styles.mobileOverlay}
          onClick={closeMobileNav}
        />
      )}

      {/* Navbar principal */}
      <nav className={`${styles.navbar} ${isMobile && !isOpen ? styles.navbarHidden : ''}`}>
        {/* Logo clickeable */}
        <Link 
          href="/dashboard/home" 
          className={styles.logoSection}
          onClick={handleLogoClick}
        >
          <Image
            src="/logos/nez2-logo-512.png"
            alt="Nez Logo"
            width={165}
            height={50}
            className={styles.logo}
            priority
          />
        </Link>

        {/* Información usuario con Avatar MUI */}
        <div className={styles.userSection}>
          <ButtonBase
            component="label"
            role={undefined}
            tabIndex={-1}
            aria-label="Cambiar avatar"
            className={styles.avatarContainer}
          >
            <Avatar 
              alt="User name" 
              src={avatarSrc}
              sx={{ 
                width: 45, 
                height: 45,
                bgcolor: '#1D9CDB'
              }}
            />
            <input
              type="file"
              accept="image/*"
              className={styles.avatarInput}
              onChange={handleAvatarChange}
            />
          </ButtonBase>
          <div className={styles.userInfo}>
            <div className={styles.userName}>User name</div>
            <div className={styles.userRole}>Administrator</div>
          </div>
        </div>

        {/* Navegación */}
        <div className={styles.navContent}>
          {/* Sección Services */}
          <div className={styles.navSection}>
            <div 
              className={styles.navHeader}
              onClick={() => toggleSection('services')}
            >
              <div className={styles.navTitle}>
                <Extension className={styles.navIcon} />
                <span>Services</span>
              </div>
              {openSections.services ? 
                <ExpandLess className={styles.navIcon} /> : 
                <ExpandMore className={styles.navIcon} />
              }
            </div>
            
            {openSections.services && (
              <div className={styles.navItems}>
                <Link 
                  href="/dashboard/create-puzzle/choose-pieces" 
                  className={styles.navItem}
                  onClick={closeMobileNav}
                >
                  <AddBox className={styles.navIcon} />
                  <span>Create a service</span>
                </Link>
                
                <Link 
                  href="/dashboard/list-puzzles" 
                  className={styles.navItem}
                  onClick={closeMobileNav}
                >
                  <ViewList className={styles.navIcon} />
                  <span>List services</span>
                </Link>
              </div>
            )}
          </div>

          {/* Sección Storage */}
          <div className={styles.navSection}>
            <div 
              className={styles.navHeader}
              onClick={() => toggleSection('storage')}
            >
              <div className={styles.navTitle}>
                <Inventory2 className={styles.navIcon} />
                <span>Storage</span>
              </div>
              {openSections.storage ? 
                <ExpandLess className={styles.navIcon} /> : 
                <ExpandMore className={styles.navIcon} />
              }
            </div>
            
            {openSections.storage && (
              <div className={styles.navItems}>
                <Link 
                  href="/dashboard/catalogs" 
                  className={styles.navItem}
                  onClick={closeMobileNav}
                >
                  <FolderOpen className={styles.navIcon} />
                  <span>Catalogs</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Logout */}
        <div className={styles.logoutSection}>
          <Link 
            href="/auth/login" 
            className={styles.logoutButton}
            onClick={closeMobileNav}
          >
            <Logout className={styles.logoutIcon} />
            <span>Log out</span>
          </Link>
        </div>
      </nav>

      {/* Espacio para el contenido (solo en desktop) */}
      {!isMobile && <div className={styles.contentSpace} />}
    </>
  );
}