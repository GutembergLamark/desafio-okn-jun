"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import BannerDektop from "../../../assets/svg/illustration-sign-up-desktop.svg";
import BannerMobile from "../../../assets/svg/illustration-sign-up-mobile.svg";

import "./NewsBanner.scss";

interface IBanner {
  src: string;
  height: number;
  width: number;
  blurWidth: number;
  blurHeight: number;
}

const NewsBanner = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const banner: IBanner = windowWidth > 768 ? BannerDektop : BannerMobile;

  return (
    <>
      <figure className="banner">
        <Image
          src={banner.src}
          width={banner.width}
          height={banner.height}
          alt="Banner"
          loading="eager"
          priority
        />
      </figure>
    </>
  );
};

export { NewsBanner };
