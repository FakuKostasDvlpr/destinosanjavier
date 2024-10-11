"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Link } from 'react-scroll'; // Asegúrate de tener react-scroll instalado
import '../../styles/css.css';

export function NavbarDemo() {
  return (
    <Navbar className="top-2 " />
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0); // Para guardar la última posición del scroll

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY < lastScrollY.current) {
          // Scroll hacia arriba
          setVisible(true);
        } else {
          // Scroll hacia abajo
          setVisible(false);
        }
        lastScrollY.current = window.scrollY; // Actualiza la última posición del scroll
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpieza del evento al desmontar
    };
  }, []);

  return (
    <div className={cn(`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`, className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item={<Link to="tour" smooth={true} duration={500}>Shows</Link>} />
        <MenuItem setActive={setActive} active={active} item={<Link to="videos" smooth={true} duration={500}>Estrenos</Link>} />
        <MenuItem setActive={setActive} active={active} item={<Link to="discos" smooth={true} duration={500}>Discos</Link>} />
      </Menu>
    </div>
  );
}
