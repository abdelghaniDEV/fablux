import React from "react";
import Header from "../components/Header";
import logoHero from "../assets/Asset 13 1.png";
import desighn from "../assets/Frame 840.png";
import GroupImg from "../assets/Mask group.png";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Box,
  BriefcaseBusiness,
  Building2,
  Camera,
  ChevronRight,
  File,
  LayoutGrid,
  Medal,
  PanelTop,
  PenTool,
} from "lucide-react";
import icon1 from "../assets/pajamas_applications.png";
import BoxService from "../components/BoxService";
import map from "../assets/kh.png";
import design02 from "../assets/Frame 866.png";
import desighn03 from "../assets/Frame 894.png";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="overflo overflow-hidden">
      <div className="container"> 
        {/* hero */}
        <div className="md:flex   items-center gap-[100px] py-10 relative z-[40]">
          <div className="md:w-[700px] text-center md:text-start z-[10]">
            <h3 className=" text-[30px] md:text-[50px] text-main-primary font-[700]">
              Fablux Group
            </h3>
            <h1 className="text-[30px] md:text-[50px] font-[700] leading-[38px] md:leading-[65px] pb-5">
              {t("hero.title")}
            </h1>
            <p
              className={`md:text-[20px] ${
                i18n.language === "ar" ? "font-tajawal" : "font-outfit"
              } text-[#CFCFCF] `}
            >
              {t("hero.text")}
            </p>
          </div>
          <div className="z-[20] hidden md:block">
            <img src={logoHero} className="w-[350px]" alt="Logo Hero" />
          </div>
          <div className="absolute right-[30px] z-[-1] hidden">
            <img src={desighn} className="z-[-1] w-[500px]" alt="Design" />
          </div>
        </div>
        <div className="flex justify-center flex-col items-center gap-4 md:py-4  z-[1000]">
          <h1 className=" text-[25px] md:text-[28px] font-[700] text-center leading-[30px] bg-gradient-to-r from-[#19e7f7] to-[#067b84] bg-clip-text text-transparent">
            {t('hero.title1')}
          </h1>
          <Button className="text-[20px] flex items-center gap-3">
            <span>{t('hero.button')}</span>
            <BriefcaseBusiness />
          </Button>
        </div>
        <div>
          <img
            src={desighn}
            className="absolute right-0 top-20 opacity-[0.6] w-[600px] z-[-1]"
          />
          <img
            src={desighn}
            className="absolute left-0 top-30 opacity-[0.6] w-[600px] z-[-1]"
          />
          <img
            src={desighn}
            className="absolute left-0 top-[80px] opacity-[0.6] w-[600px] z-[-1]"
          />
        </div>
        {/* about */}
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-[80px] md:px-10 py-4 relative ">
          <div className="z-[]">
            <img src={GroupImg} className="md:w-full w-[200px]" alt="Group Image" />
          </div>
          <div className="z-[1000] text-center md:text-start">
            <h2 className="text-[28px] md:text-[40px] font-[700] text-main-primary">
              {t("about.about")}
            </h2>
            <h1 className="text-[30px] md:text-[36px] font-[700]">{t("about.title")}</h1>
            <p className="leading-[25px] py-3 font-outfit  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute mollit anim id
              est laborum magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute mollit anim id est laborum.
            </p>
          </div>
          <div className="absolute right-[-200px] top-1 z-[-1]">
            <img src={design02} className="w-[800px]" alt="Map" />
          </div>
        </div>
        {/* our Services */}
        <div className="relative">
          <div className="absolute left-[-200px] top-20 z-[100]">
            <img src={design02} className="w-[800px] scale-x-[-1]" alt="Map" />
          </div>
          {/* <div className="absolute right-[-200px] bottom-[-200px] z-[100]">
            <img src={design02} className="w-[800px]" alt="Map" />
          </div> */}
          <div className="z-[1000]">
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-[28px] md:text-[40px] font-[700] text-main-primary">
                {t("service.title")}
              </h2>
              <p className="md:px-[200px] text-center md:text-[20px] font-[700]">
                {/* <span className="text-[#00C4F499]">Fablux Group</span>  */}
                {t("service.description")}
              </p>
            </div>
          </div>
          {/* list Service */}
          <div className="grid md:grid-cols-4 gap-[10px] my-8 z-[1000]">
            <BoxService
              icon={
                <LayoutGrid className=" text-main-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
              }
              title={t("service.services.app.title")}
              description={t("service.services.app.description")}
            />
            <BoxService
              icon={
                <PanelTop className=" text-main-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
              }
              title={t("service.services.web.title")}
              description={t("service.services.web.description")}
            />
            <BoxService
              icon={
                <PenTool className=" text-main-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
              }
              title={t("service.services.brand.title")}
              description={t("service.services.brand.description")}
            />
            <BoxService
              icon={
                <Camera className=" text-main-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
              }
              title={t("service.services.photo.title")}
              description={t("service.services.photo.description")}
            />
            <BoxService
              icon={
                <Box className=" text-main-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
              }
              title={t("service.services.3d.title")}
              description={t("service.services.3d.description")}
            />
            <BoxService
              icon={
                <Building2 className=" text-main-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
              }
              title={t("service.services.business.title")}
              description={t("service.services.business.description")}
            />
            <BoxService
              icon={
                <File className=" text-main-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
              }
              title={t("service.services.company.title")}
              description={t("service.services.company.description")}
            />
            <BoxService
              icon={
                <Medal className=" text-main-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
              }
              title={t("service.services.marketing.title")}
              description={t("service.services.marketing.description")}
            />
          </div>
        </div>
        {/* our Client */}
        <div className="flex flex-col md:flex-row  items-center gap-[80px] md:px-10 pt-4 pb-10 relative ">
          <div className="absolute left-0 top-0 z-[1000]">
            <img src={desighn03} className="w-[800px] scale-x-[-1]" alt="Map" />
          </div>
          <div className="md:w-[600px] z-[1000]">
            <h2 className="text-[40px] font-[700] text-main-primary">
              {t('vision.title')}
            </h2>
            <h1 className="text-[30px] font-[700]">
              {t('vision.subtitle')}
            </h1>
            <p className="leading-[25px] py-3 font-outfit text-main-text   ">
              {t('vision.text')}
            </p>
            <div className="grid grid-cols-3 items-center">
              <div className="font-outfit flex flex-col items-center">
                <h4 className="text-[30px] font-[700]">32K+</h4>
                <span>People Joined</span>
              </div>
              <div className="font-outfit flex flex-col items-center">
                <h4 className="text-[30px] font-[700]">250+</h4>
                <span>Vip Users</span>
              </div>
              <div className="font-outfit flex flex-col items-center">
                <h4 className="text-[30px] font-[700]">87+</h4>
                <span>Big Company</span>
              </div>
            </div>
          </div>
          <div className="z-[1000]">
            <img src={map} className="w-full z-[1000]" alt="Group Image" />
          </div>
          <img
            src={desighn}
            className="w-[800px] absolute scale-x-[-1] right-[-200px] opacity-[0.6] top-1 z-[100]"
            alt="Map"
          />
          <img
            src={desighn}
            className="w-[800px] absolute  left-[-200px] opacity-[0.6] top-1 z-[100]"
            alt="Map"
          />
        </div>
      </div>
    </div>
  );
}
