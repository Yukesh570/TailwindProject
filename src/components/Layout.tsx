import { useEffect } from "react";
import { Footer } from "./elements/Footer";
import { Navbar } from "./elements/Navbar";
import React from "react";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}
export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    //useEffect is reacthook that let tou run side effect after a component renders
    document.title = title;
  }, [title]); //[title] means only rerun this effect when title changes
  return (
    <>
      {/* <Navbar /> */}
      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};
