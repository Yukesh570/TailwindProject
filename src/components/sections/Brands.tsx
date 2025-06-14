import React from "react"
import { Container } from "../shared/Container"
import { Title } from "../shared/Title"


const logos=["esewa","fb","github","images","insta","spotify"]
export const Brands=()=>{
    return(
        <section>
            {" "}
            <Container className="space-7-8">
                <div className="text-center max-w-3xl mx-auto  gap-y-4">
                    <Title>
                        Trusted by Industry leaders
                    </Title>
                </div>
                <div className="flex justify-center flex-wrap gap-2">
                    {logos.map((logo,key)=>
                    (
                        console.log("keysdfsd",key),
                    <div key={key} className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group mt-5">
                        <img src={`/logos/${logo}.png`} 
                        alt={logo}
                        width="100"
                        height="60"
                        className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-2 group-hover:scale-105"
                        />

                    </div>

                    ))}

                </div>

            </Container>
        </section>
    )
}