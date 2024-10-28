import Image from "next/image";
import React from "react";
import chrisnutrition from "@/public/chrisnutrition.png";
import creafannym from "@/public/creafannym.png";

export const RealisationContainer = () => {
  return (
    <div className=" bg-background">
      <div className="container px-24 py-20 m-auto">
        <h2 className="pb-12 text-3xl font-semibold text-center text-foreground">
          Réalisations
        </h2>
        <div className="flex justify-center gap-6 p-3">
          <a href="https://creafannym.fr" target="_blank">
            <div className="p-3 transition-all duration-300 border-2 rounded-lg shadow-lg border-border bg-card w-96 hover:cursor-pointer hover:scale-105">
              <Image
                src={creafannym}
                alt=""
                className="object-cover w-full border rounded-t h-52 border-border"
              />
              <h3 className="py-3 text-2xl font-semibold text-center text-foreground">
                Creafannym.fr
              </h3>
            </div>
          </a>
          <a href="https://chrisnutrition.com" target="_blank">
            <div className="p-3 transition-all duration-300 border-2 rounded-lg shadow-lg border-border bg-card w-96 hover:cursor-pointer hover:scale-105">
              <Image
                src={chrisnutrition}
                alt=""
                className="object-cover w-full border rounded-t h-52 border-border"
              />
              <h3 className="py-3 text-2xl font-semibold text-center text-foreground">
                Chrisnutrition.com
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
