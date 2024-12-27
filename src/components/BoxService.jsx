import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronRight, LayoutGrid } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ({ title, description, icon }) {
  const { t, i18n } = useTranslation();
  return (
    <Card className="bg-main-background z-[1000]  border-main-primary text-white px-5 py-8 flex flex-col items-center justify-center gap-3">
      {/* <img src={icon} className="t text-main-primary bg-[#5F5F5F33] p-3 rounded-full w-[80px] h-[80px]" /> */}
      <div className="t  bg-[#5F5F5F33] relative p-3 rounded-full w-[80px] h-[80px]">
        {icon}
      </div>
      <h3 className="text-[18px] text-center items-center font-[700]">
        {title}
      </h3>
      <p className={`text-[12px]  ${i18n.language === 'ar' ? "font-tajawal" : "font-outfit"} text-center text-main-text`}>
        {description}
      </p>
      <Button className="flex items-center gap-2 mt-4">
        <span>{t("service.more")}</span>
        <ChevronRight />
      </Button>
    </Card>
  );
}
