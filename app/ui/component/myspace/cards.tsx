import { BarChart4, LucideTimer } from "lucide-react";
import React from "react";

const icons = {
    chartCount : BarChart4,
    recentChart : LucideTimer,
}

export default async function StateCards(){

    return (<>
       <div className="grid grid-cols-3 md:gap-14">
       <Card title="total graph" count={'5'} 
            type="chartCount"
            />
        <Card title="graphique recent" type="recentChart" desc="revenue mensuel" />
       </div>
    </>)
}

export function Card({
    title , count , type , desc
} : {
    title : string;
    desc : string;
    count : number | string ;
    type : 'chartCount' | 'recentChart'

}) {
    const Icones = icons[type]
    return (
        <div className="rounded-xl bg-gray-50 p-2 px-5 shadow-sm bg-background font-semibold">
            <div className="flex gap-3 justify-between items-center">
                {Icones ? <Icones className="w-9 h-9 text-alte-foreground" /> : null}
                <p>{title}</p>
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
        <div className="rounded-xl bg-gray-50 p-2 px-5 shadow-sm bg-background ">
            {children}
        </div>
    )
}