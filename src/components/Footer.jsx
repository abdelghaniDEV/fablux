import React from "react";
import logo from "../assets/Frame 843.png";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t , i18n } = useTranslation();
  return (
    <div className=" bg-[#00C4F44D]  mt-10 ">
      <div className={`container grid md:grid-cols-4 gap-[22px] ${i18n.language === "ar" ? "font-Tajawal" : "font-outfit"}  p-10`}>
        <div className="flex flex-col gap-5 ">
          <img src={logo} className="w-[200px] text-main-text" />
          <p>{t("footer.description")}</p>
          <div>
            <ul className="flex gap-3">
              <li className="]">
                <i className="bx bxl-facebook text-main-primary text-[30px] rounded-full bg-[#FFFFFF] p-[6px]"></i>
              </li>
              <li>
                <i className="bx bxl-instagram text-main-primary text-[30px] rounded-full bg-[#FFFFFF] p-[6px]"></i>
              </li>
              <li>
                <i className="bx bxl-linkedin text-main-primary text-[30px] rounded-full bg-[#FFFFFF] p-[6px]"></i>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-[26px] font-[600]">
            {t("footer.services.title")}
          </h3>
          <ul className="flex flex-col gap-2 pt-2 text-[14px]">
            <li className="flex items-center gap-1">
              <i className="bx bx-check text-main-primary text-[30px]"></i>
              <span>{t("footer.services.app")}</span>
            </li>
            <li className="flex items-center gap-1">
              <i className="bx bx-check text-main-primary text-[30px]"></i>
              <span>{t("footer.services.business")}</span>
            </li>
            <li className="flex items-center gap-1">
              <i className="bx bx-check text-main-primary text-[30px]"></i>
              <span>{t("footer.services.video")}</span>
            </li>
            <li className="flex items-center gap-1">
              <i className="bx bx-check text-main-primary text-[30px]"></i>
              <span>{t("footer.services.3d")}</span>
            </li>
            <li className="flex items-center gap-1">
              <i className="bx bx-check text-main-primary text-[30px]"></i>
              <span>{t("footer.services.marketing")}</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[26px] font-[600]">{t("footer.pages.title")}</h3>
          <ul className="flex flex-col gap-[14px] pt-2 text-[16px]">
            <li>
              <Link to={"/"}>{t("header.home")}</Link>
            </li>
            <li>
              <Link href="#">{t("header.about")}</Link>
            </li>
            <li>
              <a href="#">{t("header.services")}</a>
            </li>
            <li>
              <Link to={"/business"}>{t("header.business")}</Link>
            </li>
            <li>
              <Link to={"/business"}>{t("footer.pages.vision")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[26px] font-[600]">{t('footer.contact.title')}</h3>
          <ul className="flex flex-col gap-[14px] pt-2 text-[14px]">
            <li className="flex gap-2 items-center">
              {/* <i className="bx bx-phone text-main-primary text-[30px]"></i> */}
              <Phone className="text-main-primary" />
              <spna>(205) 555-01000</spna>
            </li>
            <li className="flex gap-2 items-center">
              <Clock className="text-main-primary" />
              <spna>Mon - Fri : 9 am- 11 pm</spna>
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="text-main-primary" />
              <spna>Email@Fablux Group.com</spna>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
