import React from "react";
import { Card } from "./card";
import { cardsMock } from "./card.mock";

export const BasicCard = () => {
  return <Card {...cardsMock[1]} />;
};

export const SelectedCard = () => {
  return <Card {...cardsMock[0]} selected />;
};
