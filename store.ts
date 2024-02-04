"use client"
import { create } from "zustand";
import { population, Population } from "./lib/data";
type UseAppstore  = {
    fill: string,
    length: number,
    updateLength: () => void,
    displayGroupex: boolean,
    updateDisplayGroupex : () => void,
    displayGroupey : boolean,
    updateDisplayGroupey: () => void,
    strokewidth: number,
    updateStroke : () => void,
    svgW : number,
    updateSvgW : () => void,
    svgH : number,
    updateSvgH: () => void,
    menuW : number,
    updateMenuW : () => void,
    datax : any,
    datay :any,
    updateDatay : () => void,
    updateDatax : () => void,

}


export const useAppstore = create<UseAppstore>((set) => ({
    fill : 'blue',
    length: population.length ,
    updateLength(length : {length : number}) {
        set({length: length})
    },
    displayGroupex: true ,
    updateDisplayGroupex(displayGroupex: {displayGroupex : boolean }){
        set({displayGroupex: displayGroupex})
    },
    displayGroupey: true ,
    updateDisplayGroupey(displayGroupey : {displayGroupey : boolean}){
        set({displayGroupey: displayGroupey})
    },
    strokewidth : 1,
    updateStroke(strokewidth : {strokeWidth : number}){
        set({strokewidth : strokewidth})
    },
    svgW : 800,
    updateSvgW(svgW : {svgW : number}){
        set({svgW: svgW})
    },
    svgH : 400,
    updateSvgH(svgH : {svgH : number}){
        set({svgH: svgH})
    },
    menuW : 80,
    updateMenuW(menuW : {manuW : number}){
        set({menuW : menuW})
    },
    datax : [],
    updateDatax(datax : {datax : string | number}){
        set({datax : datax})
    },
    datay : [],
    updateDatay(datay : {datay : number}){
        set({datay : datay})
    }

}))


