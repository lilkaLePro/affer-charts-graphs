import StateCards, { CardMuted } from "@/app/ui/component/myspace/cards";
import React from "react";

// la page pour la vue d'ensemble du site web

export default async function Page() {
    
    return (
        <div className="grid grid-cols-2 gap-20 h-full overflow-auto bg-accent p-10" >
            
           <StateCards />

           <div className="flex gap-6 ">
            <CardMuted >
                <h1> month revevue 2024 </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque velit deserunt atque vero sapiente odit asperiores ea quasi natus pariatur molestias eligendi enim reprehenderit rem nihil, corporis eum nam voluptatum?</p>
            </CardMuted>
           
           </div>

        </div>
    )
}
