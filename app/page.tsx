'use client';
import React from 'react';
import Header from "@/public/components/header/header";
import Footer from "@/public/components/footer/footer";
import BodyComponent from "@/public/components/landingPageBody/bodyComponent";

const Lander = () => {
    return(
        <div>
            <Header/>
            <BodyComponent/>
            <Footer/>
        </div>
    );
}

export default function Home() {

  return (
    <div>
        <Lander/>
    </div>
  )
}
