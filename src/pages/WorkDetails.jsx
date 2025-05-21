import React from "react";
import image from "../assets/photo.png";
import framer from "../assets/Frame 866.png";
import framer01 from "../assets/Frame 840.png";
import image01 from "../assets/Frame 964.png";
import image003 from "../assets/Frame 9600.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
export default function WorkDetails() {
  const prams = useParams();
  console.log(prams.id);
  const projects = useSelector((state) => state.projects);
  const { i18n } = useTranslation();
  // filter projects
  const findProject = projects?.find((project) => {
    return project.id === prams.id;
  });

  return (
    <div className="container relative  overflow-hidden ">
      <div className="">
        <div className="flex flex-col items-center gap-4  justify-center py-3 md:py-10 ">
          <h1 className="text-[28px] font-[700] text-center leading-[30px] bg-gradient-to-r from-[#19e7f7] to-[#067b84] bg-clip-text text-transparent">
            {findProject?.type}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 justify-between md:py-3 ">
          <div className="flex flex-col gap-3 justify-between">
            <div>
              <h3 className="text-[30px] font-[600]">{findProject?.name}</h3>
              <p
                className={`${
                  i18n.language === "ar" ? "font-tajawal" : "font-outfit"
                }  text-[18px] pt-4`}
              >
                {findProject?.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-[700]">
                {i18n.language === "ar"
                  ? "عدد ايام العمل"
                  : "Number of working days"}
              </span>
              <span className="font-[700]">
                {findProject?.days} {i18n.language === "ar" ? "يوم" : "days"}
              </span>
            </div>
          </div>
          <div className="">
            <img
              src={import.meta.env.VITE_API_IMG + findProject?.image}
              alt="Work Details"
              className="w-full h-[350px] border-[2px] rounded-[10px] border-main-primary "
            />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <h2 className="text-[40px] font-[700] text-main-primary">
          {i18n.language === "ar" ? "" : "over View"}
        </h2>
      </div> */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-5">
          
          {findProject?.images.map((image , index) => {
            return (
              <img key={index} src={import.meta.env.VITE_API_IMG + image} alt="Work Details" className="w-full h-[160px] md:h-[260px] rounded-[20px] border-[2px] border-main-primary " />
            )
          })}
      </div> */}
      {findProject?.sections.map((section) => {
        return (
          <div className="z-[1000]">
            <div className="flex z-[1000] flex-col items-center gap-4  justify-center py-5 md:py-10">
              <h1 className="text-[28px] font-[700] text-center leading-[30px] bg-gradient-to-r from-[#19e7f7] to-[#067b84] bg-clip-text text-transparent">
                {section.title}
              </h1>
              <p className=" font-outfit text-[18px] md:t-4 text-center md:px-[100px] ">
                {section.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 z-[1000]">
              {section.photos.map((image) => {
                return (
                  <img
                    key={image}
                    src={import.meta.env.VITE_API_IMG + image}
                    alt="Work Details"
                    className="w-full h-[280px]"
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      <div>
        <img
          src={framer}
          className="w-[800px] absolute bottom-0 right-[-60px] z-[-1]"
        />
        <img
          src={framer}
          className="w-[800px] absolute top-[30%] left-[-60px] z-[-1]"
        />
        <img
          src={framer01}
          className="w-[800px] opacity-[0.5] absolute top-[20px] left-[-60px] z-[-1]"
        />
      </div>
    </div>
  );
}
