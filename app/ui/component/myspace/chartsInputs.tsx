'use client'
import { Textarea } from "@/app/textarea"
import { useAppstore, useChartData } from "@/store"


const InputGroupe = () => {
const {population , updatePopulationData} = useAppstore()
return (<div className="m-5 border flex justify-between w-[700px] ">
        
        <div className="flex flex-col justify-center">
            <span className="text-center font-semibold">X</span>
        <Textarea className=' w-[300px] text-lg' 
         value={population.map(d => d.pays)} onChange={() => updatePopulationData()} />    
        </div>

        <div className="flex flex-col justify-center">
            <span className="text-center font-semibold ">Y</span>
            <Textarea className=' w-[300px] text-lg' 
            value={population.map(d => d.pop)} onChange={() => updatePopulationData()} />  
        </div>

    </div> )
}
// 

export {InputGroupe}