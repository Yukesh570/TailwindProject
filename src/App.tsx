import React from "react";
import { Testcard } from "./components/cards/testcard";
import { Layout } from "./components/Layout";
import { ValentinePage } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <Layout title="Edge">
      <ValentinePage />

      {/* <Hero />
    <Brands />
    <Services/>
    <AboutUs/>
    <Pricing/>
    <CTA/>
    <Testcard/> */}
    </Layout>
  );
}

export default App;
