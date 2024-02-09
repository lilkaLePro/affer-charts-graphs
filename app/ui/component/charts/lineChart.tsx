'use client'

import d3, { max, scale, select , Selection } from "d3"
import React, { useRef, useState, useEffect } from "react"
import {line , curveCardinal, } from 'd3-shape'
import {axisBottom , axisLeft} from 'd3-axis'
import {scaleLinear} from 'd3-scale'
import  appleStock ,{AppleStock} from '@visx/mock-data/lib/mocks/appleStock'
const aStockData = appleStock


const ini_data = [
    {height : 10 , color : 'purple'},
    {height : 100 , color : 'purpl'},
    {height : 310 , color : 'purpe'},
    {height : 270 , color : 'orange'},
    {height : 410 , color : 'red'},
    {height : 437 , color : 'yellow'},
    {height : 137 , color : 'dark'},
    {height : 237 , color : 'darkgreen'},
    {height : 137 , color : 'blue'},
]

export const CurvChart : React.FC = () => {
    const [data , setData ] = useState(aStockData.map(d => d.close))
    const [selection , setSelection] = useState<null | Selection< SVGSVGElement | null , unknown , null , undefined >>()
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        // scales x et y
    const xScale = scaleLinear()
        .domain([0 , data.length])
        .range([0, 750]) // 700 represente le svg width
        
    const yScale = scaleLinear()
        .domain([0 , max(data)])
        .range([0, 500]) // 200 represente le svg height
        // creer les axis x et y
    const xAxis = axisBottom(xScale)
    const yAxis = axisLeft(yScale)
        
        const myLine = line()
            .x((v , i ) => xScale(i))
            .y((v ) => 500 - v)
            .curve(curveCardinal)

        if(!selection){
            setSelection(select(svgRef.current!))
        }else{
            selection
                .append('g')                
                .call(xAxis)
                .attr('transform' , `translate(${50})`)
                
            selection   
                .append('g')
                .call(yAxis)

            selection
                .selectAll('path')
                .data([data])
                .join('path')
                .attr('d' , myLine)
                .attr('fill' , 'none')
                .attr('stroke' , 'blue')
                .attr('strokewidth' , 4)
                .select('#xAxis')
                .call(xAxis)

         
            }
    }, [data , selection])

    return (<div className="w-[800px] h-[500px] flex justify-center items-center">
        <svg ref={svgRef} className="border w-full h-full">
        </svg>
    </div>)
}

