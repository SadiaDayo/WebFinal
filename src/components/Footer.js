import '../components/Footer.css';

import logo from '../assets/images/Logo.png';


function Footer(){

    return (
    <>
    <div className={"footer"}>
    
    <p>
    <img height={60.84} className="d-block w-152" src={logo} alt='imagec' />
         Web3Makr
White paper
Services
Tool
Contact us</p>
<p className="bottom text-white font-bold-light">
        Copyright 2023
        web3makr.com
      </p>
    </div>
    </>
    );
    
    }
    export default Footer;