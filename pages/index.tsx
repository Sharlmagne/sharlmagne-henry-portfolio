
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/layout/Contact";
import Projects from "@/components/layout/Projects";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";


export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}
