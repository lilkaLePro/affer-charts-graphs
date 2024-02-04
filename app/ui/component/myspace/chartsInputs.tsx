'use client'
import { Textarea } from "@/app/textarea"
import { useAppstore } from "@/store"


const InputGroupe = () => {
const {datax , datay , updateDatax , updateDatay} = useAppstore()

return (<div className="m-5 border flex justify-between w-[700px] ">
        
        <div className="flex flex-col justify-center">
            <span className="text-center font-semibold">X</span>
        <Textarea className=' w-[300px] text-lg' 
         value={datax} onChange={() => updateDatax()} />    
        </div>

        <div className="flex flex-col justify-center">
            <span className="text-center font-semibold ">Y</span>
            <Textarea className=' w-[300px] text-lg' 
            value={datay} onChange={() => updateDatay()} />  
        </div>

    </div> )
}
// 

export {InputGroupe}