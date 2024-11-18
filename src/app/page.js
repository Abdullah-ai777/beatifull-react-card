// At the top of your page.js file
"use client"; 

import { useState } from "react";
import OuterCard from "./outerCard";
import InnerCard from "./innerCard";

export default function Page() {
  

  return (
    <>
      <OuterCard/>
      <InnerCard/>
    </>
  );
}
