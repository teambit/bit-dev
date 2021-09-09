import React from "react";
import { Image } from "./image";

export const BasicImage = () => (
  <Image
    src="https://static.bit.dev/bit-logo.svg"
  />
);
export const BackgroundImage = () => (
  <Image
    isBackground
    src="https://static.bit.dev/homepage-bit/backgrounds/01-purple-gradient.svg"
    style={{
      width: 600,
      backgroundSize: "contain",
      height: 500,
      color: "white",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <>
      children displayed over the backgound image
    </>
  </Image>
);
