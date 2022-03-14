import React from "react";
import { WhatIsBitQuickStart } from "./";
import { WhatIsBit } from "./index";
import { Size } from "./what-is-bit";

export const Long = () => <WhatIsBit />;
export const Short = () => <WhatIsBit size={Size.MEDIUM} />;
export const QuickStart = () => <WhatIsBitQuickStart />;
