import React, { useState } from "react";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { useSelector,useDispatch } from "react-redux";
import { addTest } from "../../feature/testSlice";

export const CTA = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTestHandler = (e) => {
    e.preventDefault();
    dispatch(addTest(input));
    setInput("");
  };
  const test= useSelector((state:any)=>state.tests)
  console.log("hello word",test)
  return (
    <section className="pb-20 relative">
      {" "}
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              {" "}
              Quick Start you{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                own AI
              </span>{" "}
              Business
            </h1>
            <Paragraph className="pt-10">
              Leverage our AI-powered platform to revolutionize your digital
              marketing efforts. Get data-driven insights and automation at your
              fingertips.
            </Paragraph>
            <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
              <div className="flex sm:flex-row flex-col gap-5 w-full">
                <form
                  onSubmit={addTestHandler}
                  className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3
                                          shadow-lg shadow-box-shadow border border-box-border
                                          bg-box-bg rounded-full ease-linear focus-within:bg-body
                                          focus-within:border-primary"
                >
                  <input
                    type="text"
                    className="w-full py-3 outline-none bg-transparent"
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}
                  />
                  <Button className="min-w-max text-white">
                    <span className="relative z-[5]">Get Started</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
