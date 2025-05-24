import React from "react";
import design02 from "../assets/Frame 866.png";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import GroupImg from "../assets/Mask group.png";

export default function About() {
    const { t, i18n } = useTranslation();
  
  return (
    <div>
      <div
        id=""
        className="flex flex-col md:flex-row items-center gap-5 md:gap-[80px] md:px-20 py-4 relative overflow-hidden "
      >
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="z-[]"
        >
          <img
            src={GroupImg}
            className="md:w-[1100px] w-[200px]"
            alt="Group Image"
          />
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="z-[1000] text-center md:text-start"
        >
          <h2 className="text-[28px] md:text-[40px] font-[700] text-main-primary">
            {t("about.about")}
          </h2>
          <h1 className="text-[25px] md:text-[28px] font-[700]">
            {t("about.title")}
          </h1>

          {i18n.language === "en" ? (
            <p className="text-[18px]">
              Fablux Group is a leading company specializing in programming and
              digital marketing solutions.
              <br /> We combine innovation, creativity, and cutting-edge
              technology to deliver tailored services that drive businesses
              toward success.
              <br /> Our team is dedicated to crafting powerful digital
              experiences, from developing custom software and mobile
              applications to creating impactful marketing strategies.
              <br /> At Fablux Group, we turn your vision into reality, ensuring
              measurable results and sustainable growth.
            </p>
          ) : (
            <p className="text-[18px]">
              من نحن فابلوكس جروب هي شركة رائدة متخصصة في حلول البرمجة والتسويق
              الرقمي.
              <br /> نجمع بين الابتكار والإبداع وأحدث التقنيات لتقديم خدمات
              مخصصة تدفع الأعمال نحو النجاح يكرّس فريقنا جهوده لصنع تجارب رقمية
              قوية،
              <br /> من تطوير البرمجيات والتطبيقات المخصصة وصولاً إلى ابتكار
              استراتيجيات تسويقية مؤثرة في فابلوكس جروب، نحول رؤيتك إلى واقع، مع
              ضمان تحقيق نتائج ملموسة ونمو مستدام.
            </p>
          )}
        </motion.div>
        <div className="absolute right-[-200px] top-1 z-[-1]">
          <img src={design02} className="w-[800px]" alt="Map" />
        </div>
      </div>
    </div>
  );
}
