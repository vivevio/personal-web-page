import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.scss";
import MainNav from "./MainNav";

export default function Intro() {
  return (
    <div className="min-h-screen">
      <div className="ve-container">
        <header className="flex justify-between main-top">
          <div className="ve-logo">
            <Image
              src={`/logo-text.svg`}
              width={76}
              height={23}
              alt="big text"
            />
          </div>

          <MainNav />
        </header>

        <div className={`${styles.introContainer} intro-container h-[calc(100vh-81px)]`}>
          <div className={`${styles.introAvatar} avatar`}>
            <Image
              src={`/vive-avatar.webp`}
              width={124}
              height={124}
              alt="avatar vivevio"
            />
          </div>
          <div className={`${styles.introContent} intro-content`}>
            <div className="left">
              <p>Hi There,</p>
              <h1>
                I am Vive <span>Vio</span>
              </h1>
              <h3>Front End Developer</h3>

              <a href="#">Download Resume</a>
            </div>
            <div className="right">
              <section className={styles.introDetailGroup}>
                <p className={styles.introDetailLabel}>Email</p>
                <p className={styles.introDetailValue}>hi@vivevio.co</p>
              </section>

              <section className={styles.introDetailGroup}>
                <p className={styles.introDetailLabel}>Location</p>
                <p className={styles.introDetailValue}>Jakarta, Indonesia</p>
              </section>

              <section className={styles.introDetailGroup}>
                <p className={styles.introDetailLabel}>Skills</p>
                <p className={styles.introDetailValue}>
                  React Native, React, Javascript, HTML&CSS, Laravel
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
