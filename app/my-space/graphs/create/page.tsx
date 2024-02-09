import { Button } from "@/app/ui/button";
import { BarChart } from "@/app/ui/component/charts/barchart";
import { CurvChart } from "@/app/ui/component/charts/lineChart";

export default async function Page(){

    return(<div className="">
        
        <div className="shadow-md w-[800px] h-[500px]">
            <CurvChart />
            {/* <BarChart /> */}
        </div>
    </div>)
}