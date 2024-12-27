import React from "react";
import { Card } from "./ui/card";
import image2 from "../assets/Frame 947.png"

export default function ({title , image , company , description , days}) {
  return (
    <Card className="border-main-primary bg-main-background ">
      <img src={image} className="rounded-t-lg w-full h-[260px] " />
      <div className="p-4 flex flex-col gap-3 ">
        <h2 className="text-[18px] font-[700] text-main-primary">
          {title}
        </h2>
        <p className="text-[17px] text-white">{company}</p>
        <p className="text-[14px] text-main-text text-center font-outfit">
         {description}
        </p>
      </div>
      <hr className="mx-4" />
      <div className="flex items-center justify-between px-4 py-2 text-[12px] text-white">
        <span>Number of working days</span>
        <span>{days} Days</span>
      </div>
    </Card>
  );
}
