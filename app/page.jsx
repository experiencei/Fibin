import React from "react";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import { Hero } from "../components/Hero";

function page() {
  return (
    <div>
      <NavBar />
      <Header />
      <Hero />
    </div>
  );
}

export default page;
