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
import { motion } from "motion/react";
import BoxService from "../components/BoxService";
import map from "../assets/kh.png";
import design02 from "../assets/Frame 866.png";
import desighn03 from "../assets/Frame 894.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SliderProject from "../components/sliderProject";

export default function Home() {
  const { t, i18n } = useTranslation();
  const title = t("hero.title");
  const text = "Fablux Group";
  const titleService = t("service.title");
  return (
    <div className="overflo overflow-hidden ">
      <div className="containeer">
        {/* hero */}
        <div className="md:flex   items-center gap-[100px] py-10 relative z-[40]">
          <motion.div className="md:w-[700px] text-center md:text-start z-[10]">
            <h3 className=" text-[30px] md:text-[50px] text-main-primary font-[700]">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
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
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="z-[20] hidden md:block"
          >
            <img src={logoHero} className="w-[350px]" alt="Logo Hero" />
          </motion.div>
          <div className="absolute right-[30px] z-[-1] hidden">
            <img src={desighn} className="z-[-1] w-[500px]" alt="Design" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center flex-col items-center gap-4 md:pt-4 md:pb-[100px]  z-[1000]"
        >
          <h1 className=" text-[25px] md:text-[28px] font-[700] text-center leading-[30px] bg-gradient-to-r from-[#19e7f7] to-[#067b84] bg-clip-text text-transparent">
            {t("hero.title1")}
          </h1>
          <Button className="">
            <Link
              to={"/business"}
              className="text-[20px] flex items-center gap-3"
            >
              <span>{t("hero.button")}</span>
              <BriefcaseBusiness />
            </Link>
          </Button>
        </motion.div>
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
        
        {/* our Services */}
        <div id="services" className="relative">
          <div className="absolute left-[-200px] top-20 z-[100]">
            <img src={design02} className="w-[800px] scale-x-[-1]" alt="Map" />
          </div>
          {/* <div className="absolute right-[-200px] bottom-[-200px] z-[100]">
            <img src={design02} className="w-[800px]" alt="Map" />
          </div> */}
          <div className="z-[1000]">
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-[28px] md:text-[40px] font-[700] text-main-primary">
                {titleService.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="md:px-[200px] text-center md:text-[20px] font-[700]"
              >
                {/* <span className="text-[#00C4F499]">Fablux Group</span>  */}
                {t("service.description")}
              </motion.p>
            </div>
          </div>
          {/* list Service */}
          <div className="grid md:grid-cols-4 gap-[10px] my-8 z-[1000]">
            <BoxService
            border={true}
              icon={
                <LayoutGrid className=" text-main-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
              }
              title={t("service.services.app.title")}
              description={t("service.services.app.description")}
            />
            <BoxService
            border={false}
              icon={
                <PanelTop className=" text-main-primary absolute top-[22%] left-[20px] w-[40px] h-[40px]" />
              }
              title={t("service.services.web.title")}
              description={t("service.services.web.description")}
            />
            <BoxService
            border={true}
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
            border={true}
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
            border={true}
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
        {/* slider */}
        <SliderProject />
        {/* our Client */}
        <div className="flex flex-col md:flex-row  items-center gap-[80px] md:px-10 pt-4 pb-10 relative ">
          <motion.div className="absolute left-0 top-0 z-[1000]">
            <img src={desighn03} className="w-[800px] scale-x-[-1]" alt="Map" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-[600px] z-[1000]"
          >
            <h2 className="text-[40px] font-[700] text-main-primary">
              {t("vision.title")}
            </h2>
            <h1 className="text-[30px] font-[700]">{t("vision.subtitle")}</h1>
            <p className="leading-[25px] py-3 font-outfit text-main-text   ">
              {t("vision.text")}
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="z-[1000]"
          >
            <img src={map} className="w-full z-[1000]" alt="Group Image" />
          </motion.div>
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
