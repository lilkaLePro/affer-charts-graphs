"use client"
import { Input } from "@/app/input"
import clsx from "clsx"
import { useAppstore} from "@/store"
import { Checkbox } from "../../checkbox"
import { Button } from "../../button"
import React from "react"

export type chartparams = {
    barLength : number,
    width : number,
    height : number,
    className : string,
}

 const ChartParams : React.FC = () => {
    
    const {length , updateLength, displayGroupex,updateDisplayGroupex,
        displayGroupey, updateDisplayGroupey, svgW , updateSvgW ,strokewidth,
        svgH, updateSvgH, updateStroke} = useAppstore()

    return (<div className="border flex flex-col gap-4 px-5">

        <div className="flex gap-5 ">
            <InputEl onchange={(e :{e : number | string}) => updateLength()} name="length" value={length} label="length" />
            <InputEl name="width" value={svgW} label="width" onchange={() => updateSvgW()} />
            <InputEl name="height" value={svgH} label="height" onchange={() => updateSvgH()} />
        </div>

        <div className="flex gap-4 items-center">
            <CheckBox label="x-axis" checked={displayGroupex} 
            onchange={()=> updateDisplayGroupex() } />
            <CheckBox label="y-axis" checked={displayGroupey} 
            onchange={()=> updateDisplayGroupey()}/>
             <InputEl name="stroke" value={strokewidth} label="stroke" onchange={() => updateStroke()}/>
           {/* faire le stroke */}
        </div>
        <div>
            <Button className="text-md right-2 ">Generate</Button>
        </div>
        </div>)
}

const InputEl = ({value , name , label , onchange}: {label: string , value : number , name : string , onchange : () => void}) => {
    return (<div className="flex flex-col">
        <div className="flex flex-col">
        <label className="text-center" htmlFor={name}>{label} </label>
        <Input onChange={onchange} name={name} className={clsx("w-16 p-0 text-center text-md font-semibold focus:outline-none") }
            type="number"min={0} max={1000} value={value} />
        </div>
    </div>)
}
const CheckBox = ({label , onchange , checked}: {label: string,onchange: () => void , checked: boolean}) => {
    return (<div className="flex gap-2 items-center font-semibold">
        <Checkbox onCheckedChange={onchange} checked={checked} /><p>{label}</p>
    </div>)
}


export {ChartParams , }

