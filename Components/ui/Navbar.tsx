"use client"

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem,  Button } from "@nextui-org/react"
import Link from 'next/link';


const NavbarTop = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const pathname = usePathname();

    
  
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
      
    ];
  
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} className=" absolute top-0">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
   
            <p className="font-bold text-inherit text-2xl">krishna Chaturvedi</p>
          </NavbarBrand>
        </NavbarContent>
  
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => ( <NavbarItem key={`${item}-${index}`}>
                  <Link
         
                    color={pathname === item.path ? "primary" : "foreground"}
                    className={`w-full text-sm md:text-xl font-bold ${pathname === item.path ? "text-blue-600" : "text-gray-600"}` }
                    href={item.path}>
            {item.name}
            </Link>
          </NavbarItem>))}
     
        </NavbarContent>
       
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                //  color={pathname === item.path ? "primary" : "foreground"}
                className={`w-full text-sm md:text-lg font-bold ` + `${pathname === item.path ? "white" : "foreground"}`}
                href={item.path}
              
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }

export default NavbarTop
