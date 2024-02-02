'use client'
import { Textarea } from "@/app/textarea"

const InputGroupe = () => {

return (<div className="m-5 border flex justify-between w-[700px] ">
        
        <div className="flex flex-col justify-center">
            <span className="text-center font-semibold">X</span>
        <Textarea className=' w-[300px] text-lg' 
         />    
        </div>

        <div className="flex flex-col justify-center">
            <span className="text-center font-semibold ">Y</span>
            <Textarea className=' w-[300px] text-lg' 
            />  
        </div>

    </div> )
}
// 

export {InputGroupe}