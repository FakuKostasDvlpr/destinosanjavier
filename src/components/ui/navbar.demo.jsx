"use client";
import React, { useState } from "react";
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
  
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item={<Link to="tour" smooth={true} duration={500}>Shows</Link>} />
        <MenuItem setActive={setActive} active={active} item={<Link to="videos" smooth={true} duration={500}>Estrenos</Link>} />
        <MenuItem setActive={setActive} active={active} item={<Link to="discos" smooth={true} duration={500}>Discos</Link>} />
      </Menu>
    </div>
  );
}
