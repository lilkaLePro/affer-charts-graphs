import React from "react";

export default function Page({children} : {children : React.ReactNode}){
    return (
    <div className="border w-full">
        ici place a des fonctionnalités de heading 
        {children}
    </div>
    ) 
}