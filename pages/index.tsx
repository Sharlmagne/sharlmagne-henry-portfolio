
import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Contact from "@/components/Layout/Contact";
import Projects from "@/components/Layout/Projects";
import Hero from "@/components/Layout/Hero";
import About from "@/components/Layout/About";


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
