"use client";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Logo from "./Logo";
import Link from "next/link";
import { Lato } from "next/font/google";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Services", href: "/services" },
  { id: 3, name: "About Me", href: "/aboutme" },
  { id: 4, name: "Portfolio", href: "/portfolio" },
  { id: 5, name: "Contact Me", href: "/contactme" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu
  const buttonRef = useRef(null); 
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        isMobileOpen &&
        !menuRef.current?.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      ) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMobileOpen]);

  return (
    <header className="flex justify-between items-center px-20 pt-[57px] md:py-[57px] ">
     <Link href={"/"} alt='logo'>
     <Logo />
     </Link>

      <nav className="hidden md:flex ">
        <ul className={`list-none flex items-center gap-15 ${lato.className}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`font-bold text-[20px] ${
                  pathname == link.href ? "text-[#FD6F00]" : "text-text-color"
                } transition-colors duration-200 ease-in-out`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
     <div className="hidden sm:hidden md:inline-flex">
<Link href={'/contactme'}>

      <Button children="Hire Me" />
</Link>
     </div>

      {isMobileOpen ? (
        <RxCross2
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="cursor-pointer flex md:hidden lg:hidden"
          style={{ fontSize: 24 }}
        />
      ) : (
        <IoMenu
        ref={buttonRef}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="cursor-pointer flex md:hidden lg:hidden"
          style={{ fontSize: 24 }}
        />
      )}

      {isMobileOpen && (
        <div ref={menuRef} className="absolute top-30 right-30 z-500 flex flex-col p-5 rounded-xl bg-orange-100 md:hidden lg:hidden">
          <ul
            className={`list-none flex flex-col items-center gap-5 z-30  ${lato.className}`}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={`font-bold text-[20px] ${
                    pathname == link.href ? "text-[#FD6F00]" : "text-text-color"
                  } transition-colors duration-200 ease-in-out`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
