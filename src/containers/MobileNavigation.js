import NavLinks from "./NavBar";
import 'C:/Users/Eyosiyas/Desktop/New folder/eu/src/Home.css';
import {CgMenuRound, CgCloseO} from 'react-icons/cg';
import { useState } from "react";

const MobileNavigation = () =>{

    const [open, setOpen] = useState(false);

    const humburgerIcon = <CgMenuRound className="humburger" size={"40px"}
                            color="black" 
                            onClick={()=> setOpen(!open)}
                            />
    const coseIcon = <CgCloseO className="humburger" size={"40px"}
                            color="black" 
                            onClick={()=> setOpen(!open)}
                            />

    return(
        <nav className={"MobileNavigation"}>
            {open? coseIcon : humburgerIcon}
            {open && <NavLinks/>}
        </nav>
        
    );
}

export default MobileNavigation;