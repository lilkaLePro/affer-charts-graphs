"use client"
import * as d3  from "d3";
import React, { useEffect, useRef, useState } from "react"
import { number } from "zod";
import {scaleLinear , scaleBand} from 'd3-scale'
import applestok from '@visx/mock-data/lib/mocks/appleStock'


const datas = applestok.slice(80 , 100);
const data = [
    {height : 500 , color : 'purple'},
    {height : 270 , color : 'orange'},
    {height : 510 , color : 'red'},
    {height : 437 , color : 'yellow'},
    {height : 137 , color : 'dark'},
    {height : 237 , color : 'darkgreen'},
    {height : 137 , color : 'blue'},
]

const dimensions = {
    width : 1000,
    height : 500,
    chartWidth : 700,
    chartHeight : 400,
    marginLeft : 100,
}

export const BarChart : React.FC = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [selection , setselection] = useState< null | Selection< null ,unknown, null, undefined >>(null)

// const yAxis = axisLeft

    useEffect(() => {
         // scales x and y
    const y = scaleLinear()
        .domain([0 , d3.max(datas , d => d.close)])
        .range([0 , dimensions.chartHeight])
    const x = scaleBand()
        .domain(datas.map(d => d.date))
        .range([0 , dimensions.chartWidth])
        .paddingInner(0.2).paddingOuter(0.05)

        if(!selection){
            setselection(d3.select(svgRef.current!)) //ici le '!' regle la plainte de typescripte
        }else {
            selection 
                .append('rect')
                .attr('width' , dimensions.width)
                .attr('height' , dimensions.height)
                .attr('fill' , 'whitesmoke')

            selection 
                .append('g')
                .attr('transform' , `translate(${dimensions.marginLeft} , 0)`)
                .selectAll('rect')
                .data(datas)
                .enter()
                .append('rect')
                .attr('width' , 25)
                .attr('fill' , 'orange' )
                // .stroke('red')
                // .strokeWidth(1)
                .attr('x', d =>{
                    const xValue = x(d.date)
                    if(xValue){
                        return xValue
                    }else null
                })
                .attr('height', d => y(d.close))
        }
    },[selection])

    return(<svg ref={svgRef} width={dimensions.width} height={dimensions.height}>
    </svg>)
}