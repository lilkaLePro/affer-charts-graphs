import React from "react";
import SideNav from "../ui/component/myspace/sideNav";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";


export default function Layout ({ children }: {children: React.ReactNode}){
    return (
        <div className="flex-col">
            <div className="h-14 w-full flex flex-row items-center justify-between fixed">
                <Link href="/" className="flex gap-2 text-alte font-semibold ">
                    <ArrowLeftCircle /> Go back home
                </Link>
                <div className="w-9 h-9 border rounded-full"></div>
            </div>

            {/* all sapce */}
        <div className="fixed top-14 w-full flex h-screen overflow-auto">

            <div className=" min-w-64 ">
                <SideNav />
            </div>
            
            <div className=" flex flex-row justify-between w-full">
                {/* content */}
                <div> {children} </div>
                <div className="min-w-48 p-3 relative right-0 border"> la page des parametres a la creation des graphiques </div>
            </div>

        </div>

        </div>
    )
}