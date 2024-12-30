import React from "react";
import { Card } from "./ui/card";
import image2 from "../assets/Frame 947.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ({ project }) {
  const { i18n } = useTranslation();
  
  return (
    <Card className="border-main-primary bg-main-background ">
      <Link to={`/business/${project.id}`}>
        <img src={import.meta.env.VITE_API_IMG + project.images[0]} className="rounded-t-lg w-full h-[260px] " />
        <div className="p-4 flex flex-col gap-3 ">
          <h2 className="text-[18px] font-[700] text-main-primary">
            {i18n.language === "ar" ? project.type.ar : project.type.en}
          </h2>
          <p className="text-[17px] text-white">
            {i18n.language === "ar" ? project.name.ar : project.name.en}
          </p>
          <p className={`text-[14px] text-main-text text-center ${i18n.language === "ar" ? "font-tajawal" : "font-outfit"} font-outfit`}>
            {i18n.language === "ar" ? project.description.ar : project.description.en}
          </p>
        </div>
        <hr className="mx-4" />
        <div className="flex items-center justify-between px-4 py-2 text-[12px] text-white">
          <span>Number of working days</span>
          <span>{project.days} Days</span>
        </div>
      </Link>
    </Card>
  );
}
