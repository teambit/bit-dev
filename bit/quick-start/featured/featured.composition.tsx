import React from "react";
import { Featured } from "./featured";
import { cardsMock } from "./card.mock";
import { BrowserRouter } from "react-router-dom";

export const BasicFeatured = () => {
  return (
    <BrowserRouter>
      <Featured cards={cardsMock} />
    </BrowserRouter>
  );
};
