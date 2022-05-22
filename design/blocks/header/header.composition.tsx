import React from "react";
import { menuContent } from "@teambit/design.ui.navigation.menu";
import { Logo } from "@teambit/design.ui.brand.logo";

import { Header } from "./header";

export const BasicHeader = () => {
  return <Header menuLinks={menuContent} />;
};

export const HeaderWithCustomLogoLink = () => {
  return (
    <Header
      menuLinks={menuContent}
      logo={
        <a href="https://bit.cloud">
          <Logo />
        </a>
      }
    />
  );
};
