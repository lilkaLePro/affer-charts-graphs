import { ChartParams } from "@/app/ui/component/myspace/ChartParams";
import { InputGroupe } from "@/app/ui/component/myspace/chartsInputs";
import React from "react";

export default function Page({children} : {children : React.ReactNode}){
    return (
    <div className="w-full md:flex-col">
       <div className="w-full md:flex">
            <div>
            {children}
            </div>
            <div className="">
                <ChartParams width={50} height={50}  />
            </div>
       </div>
       <div>
            <InputGroupe />
       </div>
    </div>
    ) 
}