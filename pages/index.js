import { useRef, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Intro from "../components/Intro";
import SideNameLogo from "../components/SideNameLogo";
import Work from "../components/Work";
import WorkRight from "../components/WorkRight";

export default function index() {
  return (
    <Parallax
      pages={5}
      style={{ top: "0", left: "0" }}
      innerStyle={{ zIndex: 3 }}
      className="page-wrapper"
    >
      <ParallaxLayer offset={0} speed={0.5}>
        <Intro />
      </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 0, end: 0.3 }} style={{ zIndex: 0 }}>
        <SideNameLogo />
      </ParallaxLayer>

      <ParallaxLayer sticky={{ start: 0.95, end: 3 }} style={{ zIndex: 2 }}>
        <div className="bg-primary h-screen w-[60vw]" />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.7}
        // sticky={{start:1, end: 1.3}}
        style={{ zIndex: 4 }}
      >
        <Work />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.2}
        // sticky={{start:0.9, end: 1.4}}
        style={{ zIndex: 4 }}
      >
        <WorkRight />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.7}
        // sticky={{start:2, end: 2.5}}
        style={{ zIndex: 4 }}
      >
        <Work />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.2}
        // sticky={{start:1.9, end: 2.4}}
        style={{ zIndex: 4 }}
      >
        <WorkRight />
      </ParallaxLayer>

      <ParallaxLayer offset={4}>
        <div className="h-screen">about</div>
      </ParallaxLayer>
    </Parallax>
  );
}
