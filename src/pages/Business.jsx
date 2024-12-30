import React from "react";
import { Card } from "../components/ui/card";
import photo from "../assets/photo.png";
import framer01 from "../assets/Frame 866.png";
import back from "../assets/background.png";
import framer02 from "../assets/Frame 840.png";
import image2 from "../assets/Frame 947.png";
import BoxWorks from "../components/BoxWorks";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Business() {
  const { t } = useTranslation()
  const projects = useSelector((state) => state.projects)
  return (
    <div className="container relative overflow-hidden">
      <div className="flex flex-col items-center gap-4  justify-center py-10">
        <h1 className="text-[20px] md:text-[28px] font-[700] text-center leading-[30px] bg-gradient-to-r from-[#19e7f7] to-[#067b84] bg-clip-text text-transparent">
          {t('portfolio.title')}
        </h1>
        <p className="md:px-[380px] text-center">
          {t('portfolio.description')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative ">
        {projects.map((project) => {
          return (
            <BoxWorks
              project={project}
            />
          );
        })}
        
        
      </div>
      <div className="">
        <img
          src={framer01}
          className="w-[800px]  absolute top-0 right-[-250px] z-[-1] "
        />
        <img
          src={framer02}
          className="w-[800px]  absolute top-0 left-[-150px] z-[-1] "
        />
        <img
          src={back}
          className="w-full absolute h-[700px] top-[25%] opacity-[0.5] left-[50%] translate-x-[-50%]  z-[-1] "
        />
       
      </div>
    </div>
  );
}
