"use client";

import React, { useState } from "react";
import Header from "./component/header";
import Card from "./component/card";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between bg-blue-200 p-24">
        <ul>
          <Card />
          <Card />
          <Card />
        </ul>
      </main>
    </>
  );
}
