"use client"
import * as d3  from "d3";
import React, { useEffect, useRef, useState } from "react"
import {scaleLinear , scaleBand} from 'd3-scale'
import applestok from '@visx/mock-data/lib/mocks/appleStock'
import { useAppstore , useChartData } from "@/store";
import {axisLeft , axisBottom} from 'd3-axis'


const datas = applestok.slice(80 , 100);
const ini_data = [
    {height : 10 , color : 'purple'},
    {height : 270 , color : 'orange'},
    {height : 510 , color : 'red'},
    {height : 437 , color : 'yellow'},
    {height : 137 , color : 'dark'},
    {height : 237 , color : 'darkgreen'},
    {height : 137 , color : 'blue'},
]
const dimension = {
    width : 600,
    height : 400,
    marginLeft : 50,
}

export const BarChart : React.FC = () => {
const svgRef = useRef<SVGSVGElement | null >(null)
const [selection , setSelection] = useState<null | d3.Selection< SVGSVGElement | null , unknown , null , undefined >>()
const [data , setData] = useState(ini_data)
const {fill , displayGroupex , displayGroupey} = useAppstore()

useEffect(() => {

// scales x & y
const x = scaleBand()
    .domain(data.map(d => d.color))
    .range([0, dimension.width])
    .padding(0.05)
const y = scaleLinear()
    .domain([0 , d3.max(datas.map(d => d.close))])
    .range([0 , dimension.width ])
    // axis
const xAxis = axisBottom(x)
const yAxis = axisLeft(y)

    if(!selection){
        setSelection(d3.select(svgRef.current!))
    }else{
        const xAxisGroup =  selection
        .append('g')
        .call(xAxis)
        .attr('transform' , `translate( ${dimension.marginLeft}, ${dimension.height})`)
        
        
        const yAxisGroup = selection
        .append('g')
        .call(yAxis)
        .attr('transform' , `translate( ${dimension.marginLeft})`)
        
        selection
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('width' , x.bandwidth)
            .attr('height' , 0)
            .attr('x' , d => x(d.color))
            .attr('y' , dimension.height)
            .attr('fill' , "blue")
            .attr('transform' , `translate(${dimension.marginLeft } )`)
            .transition()
            .duration(1000)
            .delay(( _ , i ) => i*100)
            .attr('fill' , 'orange')
            .attr('height' , d => dimension.height - y(d.height))
            .attr('y' , d => y(d.height))   
            
    }
},[selection , data , displayGroupex , displayGroupey ])

    return(<div className="flex justify-center items-center border w-[800px] h-[500px] p-6 m-2 ">
        <svg ref={svgRef} className="w-full h-full font-bold" />
    </div>)
}
// Je peu creer un composant Line chart ici
