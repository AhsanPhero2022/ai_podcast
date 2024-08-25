"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const RightSidebar = () => {
  return (
    <section className={cn("right_sidebar h-[calc(100vh-5px)]")}>
      <h1 className="text-20 font-bold text-white-1">Right sidebar</h1>
    </section>
  );
};

export default RightSidebar;
