import React from 'react';
import PlanetCard from './planetCard';
const Allplanets = () => {
    return ( 
        <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1  mx-auto px-7 py-8 gap-4">
            <PlanetCard name={"Earth"} desc= {"Here is Life and Water"}/>
            <PlanetCard name={"Neptune"} desc= {"one of two ice giants"}/>
            <PlanetCard name={"Jupiter"} desc= {"the largest planet"}/>
            <PlanetCard name={"mercury"} desc= {"the fastest planet"}/>
            <PlanetCard name={"Saturn"} desc= {"Adorned with thousands of beautiful ringlets"}/>
            <PlanetCard name={"mars"} desc= {"The red planet"}/>
        </div>
        </>
     );
}
 
export default Allplanets;