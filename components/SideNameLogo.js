import React from 'react'
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function SideNameLogo() {
  return (
    <div className={`${styles.bigLogoSide} big-logo-slide`}>
        <Image
          src={`/big-vivevio.svg`}
          width={143}
          height={777}
          alt="logo vive vio"
        />
      </div>
  )
}
