import React from "react";
import image from "../assets/Frame 947.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronRight, Layers } from "lucide-react";

export default function SliderProject() {
  const projects = useSelector((state) => state.projects);
  const { t, i18n } = useTranslation();
  return (
    <div className="">
      <div
        className="md:p-6 p-4 text-left "
        dir="rtl"
        style={{ width: "100%", height: "100%" }}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          rtl={true}
          speed={1000}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          autoplay={{
            delay: 3000, // مدة الانتظار بين الشرائح (3 ثوانٍ)
            disableOnInteraction: false, // يستمر التشغيل التلقائي حتى بعد التفاعل
          }}
          style={{ direction: "ltr" }}
        >
          {projects?.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <Link
                  to={`/business/${project.id}`}
                  className={`grid grid-cols-1 md:grid-cols-2 md:gap-10 ${
                    i18n.language === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  <div>
                    <img
                      src={import.meta.env.VITE_API_IMG + project?.images[0]}
                      className="rounded-[20px] w-full h-[250px] md:h-[400px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-5 pt-5">
                    <h2 className="text-[20px] md:text-[30px] text-main-primary font-[600]">
                     {i18n.language === "ar" ?  " أخر أعملنا" : "Latest works"}
                    </h2>
                    <h1 className="text-[25px] md:text-[30px] font-[600]">
                      {i18n.language === "ar"
                        ? project.name.ar
                        : project.name.en}{" "}
                      /{" "}
                      <span className="text-[25px] text-main-primary">
                        {i18n.language === "ar"
                          ? project.type.ar
                          : project.type.en}
                      </span>
                    </h1>
                    <p
                      className={`text-[16px] leading-[30px] text-main-text ${
                        i18n.language === "ar" ? "font-tajawal" : "font-outfit"
                      } `}
                    >
                      {i18n.language === "ar"
                        ? project.description.ar
                        : project.description.en}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex justify-center">
        <Button className="my-8 text-[18px] py-3 px-4 text-center flex items-center justify-center gap-2">
          <span>{i18n.language === "en" ? "View full business history" : "مشاهدة معرض الاعمال"}</span>
          <Layers className="h-7 w-7" />
        </Button>
      </div>
    </div>
  );
}
