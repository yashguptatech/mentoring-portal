import React from "react"
import logo from '../images/mrlogo.png'

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

export default function Footer(){
    return(
            <footer>
                <div id="footer" className="grid grid-rows-2 grid-flow-col gap-4 p-24">
                    <div className="row-end-3 row-span-2 ml-28">
                    <a className="" href='../index.js'>
                    <img className='h-24' src={logo} alt="MRlogo"/>
                    </a>
                        <p className="font-bold mt-5">Sector-43, Aravalli Hills, Delhi-Surajkund Road 
                        <br></br>
                        Faridabad - 121004 Haryana, India</p>
                   
                    </div>
                    
                    <div className="row-end-3 row-span-2 ">
                        <h3>About Us</h3>
                        <ul className="mt-5">
                            <li><a href="#">Company Profile</a></li>
                            <li><a href="#">CSR Inititative</a></li>
                            <li><a href="#">Read Articles</a></li>
                            <li><a href="#">Media Kit</a></li>
                        </ul>
                    </div>

                    <div className="row-end-3 row-span-2">
                        <h3>Connect with Us</h3>
                        <ul className="mt-5">
                            <li><a href="#">Employee Portal</a></li>
                            <li><a href="#">Customer Portal</a></li>
                            <li><a href="#">Offices</a></li>
                            <li><a href="#">Know More</a></li>
                        </ul>
                    </div>
                </div>
                <div> <p className="text-center text-1xl mb-4"> © { yearTxt } Manav Rachna Alumni Portal </p></div>
                </footer>
        );
    }