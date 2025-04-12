import Image from "next/image";
import React from "react";
import styles from "./styles/Home.module.css";

export default function Home(): React.ReactNode {
  return (
    <main className={`flex flex-col min-h-screen ${styles.sunsetGradient}`}>
      <div
        className={`flex-1 flex h-screen flex-col items-center justify-center text-center p-4 `}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Kruki Family
        </h1>
        <div className="w-full max-w-[1000px] h-auto relative">
          <div className="relative w-full pt-[50%]">
            <Image
              src="/family.png"
              alt="Kruki Family"
              fill
              sizes="(max-width: 1000px) 100vw, 1000px"
              className="object-contain absolute inset-0"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, transparent 95%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, transparent 95%)",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
