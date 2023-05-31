import React from 'react';
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";



const Section = (props) => {
    return (
        <section className={`h-screen flex flex-col justify-center p-6 ${
        props.right ? "items-end" : "items-start"
            }`}
        style={{
            opacity: props.opacity
        }}

        >

            

      <div className="w-1/3 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12 shadow-xl">
            {props.children}
          </div>
        </div>
      </div>
    </section >
  );
};

export const Overlay = () => {
    // Scroll Opacity constants
    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityThirdSection, setOpacityThirdSection] = useState(1);
    const [opacityFourthSection, setOpacityFourthSection] = useState(1);
    const [opacityFifthSection, setOpacityFifthSection] = useState(1);

    useFrame(() => {
        setOpacityFirstSection(1 - scroll.range(0, 1 / 5));
        setOpacitySecondSection(scroll.curve(1 / 5, 1 / 5));
        setOpacityThirdSection(scroll.range(2 / 5, 1 / 5));
        setOpacityFourthSection(scroll.range(3 / 5, 1 / 5));
        setOpacityFifthSection(scroll.range(4 / 5, 1 / 5));
    });


    return (
        <Scroll html>
          <div class ="w-screen">
                <Section opacity={
                    opacityFirstSection
                }>
                <h1 className="font-semibold font-serif text-2xl">
                   <a href="https://www.google.com/">Hello, I'm Wawa Sensei</a>
                </h1>
                <p className="text-gray-500">Welcome to my beautiful portfolio</p>
                <p className="mt-3">I know:</p>
                <ul className="leading-5">
                    <li> 🧑‍💻 How to code</li>
                    <li> How to learn</li>
                    <li> How to deliver</li>
                </ul>
                    <p className="animate-bounce  mt-6">⬆  ⬆  ⬆</p>
            </Section>

           
                <Section opacity={
                    opacitySecondSection
                }>
                    <h1 className="font-semibold font-serif text-2xl">
                    Hello, I'm Wawa Sensei
                </h1>
                <p className="text-gray-500">Welcome to my beautiful portfolio</p>
                <p className="mt-3">I know:</p>
                <ul className="leading-2">
                    <li> How to code</li>
                </ul>
                <p className="animate-bounce  mt-6">↓</p>
            </Section>


                <Section right opacity={
                    opacityThirdSection
                }>
                <h1 className="font-semibold font-serif text-2xl">
                    Hello, I'm Wawa Sensei
                </h1>
                <p className="text-gray-500">Welcome to my beautiful portfolio</p>
                <p className="mt-3">I know:</p>
                <ul className="leading-3">
                    <li> How to code</li>
                </ul>
                <p className="animate-bounce  mt-6">↓</p>
            </Section>


                <Section right opacity={
                    opacityFourthSection
                }>
                <h1 className="font-semibold font-serif text-2xl">
                    Hello, I'm Wawa Sensei
                </h1>
                <p className="text-gray-500">Welcome to my beautiful portfolio</p>
                <p className="mt-3">I know:</p>
                <ul className="leading-3">
                    <li> How to code</li>

                </ul>
                <p className="animate-bounce  mt-6">↓</p>
            </Section>


                <Section right opacity={
                    opacityFifthSection
                }>
                <h1 className="font-semibold font-serif text-2xl">
                    Hello, I'm Wawa Sensei
                </h1>
                <p className="text-gray-500">Welcome to my beautiful portfolio</p>
                <p className="mt-3">I know:</p>
                <ul className="leading-5">
                    <li> How to code</li>
                    <li> How to learn</li>
                    <li> How to deliver</li>
                </ul>
                <p className="animate-bounce  mt-6">↓</p>
            </Section>
          </div>
        </Scroll>
    )
};