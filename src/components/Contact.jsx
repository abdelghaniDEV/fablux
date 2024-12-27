import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import React from "react";
import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t , i18n} = useTranslation()
  return (
    <div className={i18n.language === "ar" && "text-right"} >
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-[22px] font-[700] text-center leading-[30px] bg-gradient-to-r from-[#19e7f7] to-[#067b84] bg-clip-text text-transparent">
          {t('contact.title')}
        </h1>
        <p className="text-[18px] text-white">
          {t('contact.subtitle')}
        </p>
      </div>
      <div className="pt-8 flex flex-col gap-4  ">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <Label >{t('contact.email.label')}</Label>
            <Input type="text" className="" placeholder={t('contact.email.placeholder')} />
          </div>
          <div className="flex flex-col gap-2">
            <Label>{t('contact.name.label')}</Label>
            <Input
              type="text"
              className=""
              placeholder={t('contact.name.placeholder')}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>{t('contact.phone.label')}</Label>
          <Input type="text" placeholder={t('contact.phone.placeholder')} />
        </div>
        <div className="flex flex-col gap-2">
          <Label>{t('contact.message.label')}</Label>
          <textarea
            type="text"
            placeholder={t('contact.message.placeholder')}
            className="bg-[#5F6368] rounded-md px-3 py-2 h-[150px]"
          />
        </div>
        <Button className="text-[20px] flex items-center gap-1">
            <span>{t('contact.submit')}</span>
            <Send />
        </Button>
      </div>
    </div>
  );
}
