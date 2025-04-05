import React from "react";
import Image from "next/image";
import Link from "next/link";
import './profileCard.css';
import Networks from "../network";

const ProfileCard=()=> {
  return (
    <div className="profileCard  p-3 w-100 h-auto d-flex flex-column justify-content-center align-items-center text-center  d-none d-md-block">
    <div className="profileCard-item w-75 h-50 m-auto mt-2">
    <Image
        className="profileCard-item__img m-auto w-[100px] h-[100px]"
        priority={true}
        src="/imgs/omidvar.webp"
        alt="WebSite Owner"
        width={100}
        height={100}
    />
</div>
      <h5 className=" profileCard-title__owner mt-3 text-white">
        Samira Omidvar
      </h5>
      <h6 className=" profileCard-title__owner-skills mt-3 text-white">
      A passionate frontend developer from Iran
      </h6>
      <div className="profileCard-button mt-3">
        <div className="profileCard-button__item py-3">
          <Link href="" download className="d-block w-100 h-100">
            Download CV
          </Link>
        </div>
      </div>
      <div className="profileCard-socialIcons mt-3">
        <Networks />
      </div>
    </div>
  );
}
export default ProfileCard;