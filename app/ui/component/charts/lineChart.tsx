'use client'

import d3, { max, scale, select , Selection } from "d3"
import React, { useRef, useState, useEffect } from "react"
import {line , curveCardinal, } from 'd3-shape'
import {axisBottom } from 'd3-axis'
import {scaleLinear} from 'd3-scale'

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
    const [data , setData ] = useState(ini_data.map(d => d.height))
    const [selection , setSelection] = useState<null | Selection< SVGSVGElement | null , unknown , null , undefined >>()
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        // scales x et y
    const xScale = scaleLinear()
        .domain([0 , data.length])
        .range([0, 700]) // 700 represente le svg width
        
    const yScale = scaleLinear()
        .domain([0 , max(data)])
        .range([0, 400]) // 200 represente le svg height
        // creer les axis x et y
    const xAxis = axisBottom(xScale)
        
        const myLine = line()
            .x((v , i ) => xScale(i))
            .y((v ) => 500 - v)
            .curve(curveCardinal)

        if(!selection){
            setSelection(select(svgRef.current!))
        }else{
                

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

    return (<div className="w-[700px] h-[400px] flex justify-center items-center">
        <svg ref={svgRef} className=" border w-full h-full">
            <g id="xg" />
        </svg>
    </div>)
}

