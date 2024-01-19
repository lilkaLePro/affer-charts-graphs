import { BarChart4, LucideTimer } from "lucide-react";
import React from "react";

const icons = {
    chartCount : BarChart4,
    recentChart : LucideTimer,
}

export default async function StateCards(){

    return (<div className="">
       <div className="grid grid-cols-2 gap-4">
       <Card title="total graph" count={'5'} 
            type="chartCount" desc=""
            />
        <Card title="graphique recent" count='' type="recentChart" desc="revenue mensuel" />
       </div>
    </div>)
}

export function Card({
    title , count , type , desc
} : {
    title : string;
    count : number | string ;
    type : 'chartCount' | 'recentChart';
    desc : string;
}) {
    const Icones = icons[type]
    return (
        <div className="rounded-xl p-2 px-5 shadow-sm bg-primary-foreground font-semibold">
            <div className="flex gap-3 justify-between items-center">
                {Icones ? <Icones className="w-9 h-9 text-alte" /> : null}
                <p className="text-[#365314] ">{title}</p>
            </div>
            <div className="flex justify-center">
                <span className="p-4 text-xl">{count} </span>
                <span>{desc} </span>
            </div>
        </div>
    )
}

export function CardMuted({children} : {children : React.ReactNode}){

    return (
        <div className="text-primary font-semibold rounded-xl bg-gray-50 p-2 px-5 shadow-sm bg-background ">
            {children}
        </div>
    )
}