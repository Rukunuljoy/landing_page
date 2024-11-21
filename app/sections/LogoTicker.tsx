import Quantum from "@/app/assets/images/quantum.svg"
import echoValleyLogo from "@/app/assets/images/echo-valley.svg"
import pulseLogo from "@/app/assets/images/pulse.svg"
import outsideLogo from "@/app/assets/images/outside.svg"
import apexLogo from "@/app/assets/images/apex.svg"
import celestialLogo from "@/app/assets/images/celestial.svg"
import twiceLogo from "@/app/assets/images/twice.svg"
import acmeLogo from "@/app/assets/images/acme-corp.svg"
import Image from "next/image"

const logos = [
    {name: "Quantum", image:Quantum},
    {name: "Echo Valley", image:echoValleyLogo},
    {name: "Pulse", image:pulseLogo},
    {name: "Outside", image:outsideLogo},
    {name: "Apex", image:apexLogo},
    {name: "Celestial", image:celestialLogo},
    {name: "Twice", image:twiceLogo},
    {name: "Acme Corp", image:acmeLogo}
]

const LogoTicker = () => {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">Already chosen by these market leaders</h3>
                <div className="overflow-hidden mt-12" style={{ maskImage: 'linear-gradient(to right, transparent 10%, black 90%, transparent)' }}>
                {/* Content here */}
                    <div className="flex gap-24 pr-24">
                        {
                            logos.map((logo)=>(
                                <Image src={logo.image} alt="logo" key={logo.name}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoTicker;

