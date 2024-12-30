import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import React, { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Contact({setOpen}) {
  const [data, setData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const checkData = () => {
    let isValid = true;

    // Initialize a new errors object
    const newErrors = {};

        // Check email
        if (data.email === "") {
          newErrors.email = t("contact.email.error");
          isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
          newErrors.email = t("contact.email.error");
          isValid = false;
        }

    // Check name
    if (data.name === "") {
      newErrors.name = t("contact.name.error");
      isValid = false;
    }

    // Check phone
    if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = t("contact.phone.error");
      isValid = false;
    }

    // Check message
    if (data.message === "") {
      newErrors.message = t("contact.message.error");
      isValid = false;
    }

    // Update errors state at once
    setErrors(newErrors);

    // Return overall validity
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkData()) {
      // Submit form to server here
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/lead`,
          {
            email: data.email,
            name: data.name,
            phone: data.phone,
            message: data.message,
          },
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            },
          }
        );
        console.log("Form submitted successfully!" , response.data);
        setOpen(false); // Close the modal
        setData({
          email: "",
          name: "",
          phone: "",
          message: "",
        })
      } catch (err) {
        console.error("Error submitting form:", err);
      }
    }
  };

  const { t, i18n } = useTranslation();
  return (
    <div className={i18n.language === "ar" && "text-right"}>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-[22px] font-[700] text-center leading-[30px] bg-gradient-to-r from-[#19e7f7] to-[#067b84] bg-clip-text text-transparent">
          {t("contact.title")}
        </h1>
        <p className="text-[18px] text-white">{t("contact.subtitle")}</p>
      </div>
      <div className="pt-8 flex flex-col gap-4  ">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <Label>{t("contact.email.label")}</Label>
            <Input
              type="text"
              className=""
              value={data.email}
              placeholder={t("contact.email.placeholder")}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <div className={errors.email && "text-red-500 text-[]"}>{errors.email}</div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>{t("contact.name.label")}</Label>
            <Input
              type="text"
              className=""
              value={data.name}
              placeholder={t("contact.name.placeholder")}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <div className={errors.name && "text-red-500"}>{errors.name}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>{t("contact.phone.label")}</Label>
          <Input
            type="text"
            className=""
            value={data.phone}
            placeholder={t("contact.phone.placeholder")}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <div className={errors.phone && "text-red-500"}>{errors.phone}</div>
        </div>
        <div className="flex flex-col gap-2">
          <Label>{t("contact.message.label")}</Label>
          <textarea
            type="text"
            value={data.message}
            placeholder={t("contact.message.placeholder")}
            className="bg-[#5F6368] rounded-md px-3 py-2 h-[150px] text-white"
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
          <div className={errors.message && "text-red-500"}>
            {errors.message}
          </div>
        </div>
        <Button
          className="text-[20px] flex items-center gap-1"
          onClick={(e) => handleSubmit(e)}
        >
          <span>{t("contact.submit")}</span>
          <Send />
        </Button>
      </div>
    </div>
  );
}
