"use client"
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
export default function Header(){
    const [isOpen , setisOpen] = useState (false)
  function toggleMenu() {
    setisOpen (!isOpen)
  } 
    return(
        <section className="header">
            <div className="header-label">
                <p>Sign up and get 20% off to your first order. Sign Up Now</p>
            </div>
            <div className="header-container">
           <div className="header_hum"> 
            <button className="hamburger" onClick={()=>toggleMenu()}><RxHamburgerMenu />  </button>
                <div className="header-logo">
                    <p> <Link href="/">SHOP.CO</Link></p>
                </div></div>
                {isOpen || ( 
                <div className="header-menu">
                    <ul>
                    <li ><Link href="/casuals" className="header-shop">Shop <RiArrowDropDownLine /> </Link>
                    </li>
                    <li><Link href="#sale">On Sale</Link></li>
                    <li><Link href="/casuals">New Arrivals</Link></li>
                    </ul>
                </div>
                  )} 
                <div className="header-search">
                <Link href="/"><CiSearch /> </Link>
                    <input type="text" placeholder="Search for products..." />  
                </div>
                <div className="header-icons-section" >
                <div className="header-icons">
                <Link href="/cart"><FiShoppingCart /></Link>
               <Link href="/"><VscAccount /></Link> 
                </div>
               </div>
                </div>
            <hr />
        </section>
    )
}