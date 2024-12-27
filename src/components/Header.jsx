import { Globe, Menu } from "lucide-react";
import React, { useState } from "react";
import logo from "../assets/Frame 843.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import Contact from "./Contact";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("En");
  const { t, i18n } = useTranslation();
  const [openNav, setOpenNav] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // change language
    document.body.dir = language === "ar" ? "rtl" : "ltr"; // change arrow direction
    document.body.className = language === "ar" && "font-tajawal"; // change font
    setLang(language); // update state with the new language
  };
  return (
    <div className="flex items-center justify-between py-4 container relative px-4">
      {/* Logo and Menu Button */}
      <div className="flex items-center gap-1">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setOpenNav(!openNav)}
          className="block md:hidden w-10 h-10"
        >
          <Menu />
        </button>
        {/* Logo */}
        <Link to={"/"} className="flex">
          <img src={logo} className="w-[125px]" alt="Logo" />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          openNav ? "block" : "hidden"
        } absolute md:static top-[70px] left-0 w-full md:w-auto bg-main-accent md:bg-transparent z-50 md:flex md:items-center`}
      >
        <ul className="flex flex-col md:flex-row items-center md:gap-[60px] text-[18px] text-white p-4 md:p-0">
          <li className="py-2 md:py-0">
            <Link to={"/"}>{t("header.home")}</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to={"#"}>{t("header.about")}</Link>
          </li>
          <li className="py-2 md:py-0">
            <a href="#">{t("header.services")}</a>
          </li>
          <li className="py-2 md:py-0">
            <Link to={"/business"}>{t("header.business")}</Link>
          </li>
          <Button
          onClick={() => setOpen(true)}
          className="md:hidden text-white py-2 px-4 rounded-md"
        >
          {t("header.contact")}
        </Button>
        </ul>
      </nav>

      {/* Contact Button and Language Dropdown */}
      <div className="flex items-center gap-5">
        <Button
          onClick={() => setOpen(true)}
          className="hidden md:block text-white py-2 px-4 rounded-md"
        >
          {t("header.contact")}
        </Button>
        <div className="flex gap-1 items-center">
          <span className="text-[15px]">{lang}</span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Globe />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => changeLanguage("ar")}>
                Arabe
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("en")}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="md:w-[700px] w-[95%] bg-[#030B1599]">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <Contact />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
