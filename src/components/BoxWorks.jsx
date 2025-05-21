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
        <img src={project.image} className="rounded-t-lg w-full h-[260px] " />
        <div className="p-4 flex flex-col gap-3 ">
          <h2 className="text-[18px] font-[700] capitalize text-main-primary">
            {project.type}
          </h2>
          <p className="text-[17px] text-white capitalize">
            {project.name}
          </p>
          <p className={`text-[14px] text-main-text capitalize text-center ${i18n.language === "ar" ? "font-tajawal" : "font-outfit"} font-outfit`}>
            {project.description}
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
