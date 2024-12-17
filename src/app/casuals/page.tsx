import { LiaStarSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
export default function Casuals (){
    return (
        <section className="casual-section">
<div className="left-casuals pt-5">
  <div className="section1-casual flex items-center justify-between pl-2 pr-2" >
    <p>Filters</p><div></div>
  </div>
  <hr />
  <div className="pl-2 pr-2 casual-height">
    <p className="flex items-center text-xs text-gray-400 gap-28">T-shirts <MdArrowForwardIos />    </p>
    <p className="flex items-center text-xs text-gray-400 gap-28">Shorts <MdArrowForwardIos />    </p>
    <p className="flex items-center text-xs text-gray-400 gap-28">Shirts <MdArrowForwardIos />    </p>
    <p className="flex items-center text-xs text-gray-400 gap-28">Hoodie <MdArrowForwardIos />    </p>
    <p className="flex items-center text-xs text-gray-400 gap-28">Jeans <MdArrowForwardIos />    </p>
  </div>
  <hr className="w-full"/>
  <div className="casualprice ml-2 mr-2"></div>
  <hr className="w-full"/>
  <div className="flex flex-col items-center justify-between pl-2 pr-2" >
    <p className="flex items-center text-base font-bold gap-28">Color<IoIosArrowUp /> </p><br />
     <div className="flex flex-wrap gap-3 mt-2">
      <div className="rounded-full w-6 h-6 bg-lime-600"></div>
      <div  className="rounded-full w-6 h-6 bg-red-700"></div>
      <div  className="rounded-full w-6 h-6 bg-yellow-500"></div>
      <div  className="rounded-full w-6 h-6 bg-orange-600"></div>
      <div  className="rounded-full w-6 h-6 bg-blue-400"></div>
      <div  className="rounded-full w-6 h-6 bg-blue-800"></div>
      <div  className="rounded-full w-6 h-6 bg-purple-600"></div>
      <div  className="rounded-full w-6 h-6 bg-pink-600"></div>
      <div  className="rounded-full w-6 h-6 bg-white"></div>
      <div  className="rounded-full w-6 h-6 bg-black"></div>
     </div><br />
     <hr className="w-full"/><br />
     <div >
     <p className="flex items-center text-base font-bold gap-28"> Size<IoIosArrowUp /> </p><br />
     <div className="casual-size"></div>
     </div><br />
     <hr className="w-full"/><br />
     <div>
     <p className="flex items-center text-base font-bold gap-28 ">Style<IoIosArrowUp /> </p><br />
     <div className="pl-2 pr-2 casual-height">
    <p className="flex items-center text-xs text-gray-400 gap-28">T-shirts <MdArrowForwardIos />    </p>
    <p className="flex items-center text-xs text-gray-400 gap-28">Shorts <MdArrowForwardIos />    </p>
    <p className="flex items-center text-xs text-gray-400 gap-28">Shirts <MdArrowForwardIos />    </p>
    <p className="flex items-center text-xs text-gray-400 gap-28">Hoodie <MdArrowForwardIos />    </p>
    <p className="flex items-center text-xs text-gray-400 gap-28">Jeans <MdArrowForwardIos />    </p>
  </div>
     </div><br />
<button className="h-8 bg-black text-white w-44 text-xs rounded-2xl	">Apply Filter</button>
  </div>
</div>
       <div className="right-casuals mb-2 mt-2">
       <div className="flex gap-10 pb-2 pt-3 md:gap-56 md:justify-evenly"> <h1 className="text-lg md:text-lg font-bold">Casual</h1><p className="items-center text-xs hidden md:flex">Showing 1-10 of 100 Products Sort by: Most Popular <RiArrowDropDownLine />     </p></div>
<div className="right-casuals-boxes  gap-x-3 gap-y-6 justify-center">
        {/* box 1 */}
       <div>
<div className="box flex items-center justify-center">
  <div className="new-img9"></div>
</div>
<div><p className="pt-2 text-xs font-medium">Gradient Graphic T-shirt</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$145</p>
</div>
</div>
 {/* box 2 */}
<div>
<div className="box flex items-center justify-center">
  <div className="new-img10"></div>
</div>
<div><p className="pt-2 text-xs font-medium">Polo with Tipping Details</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$180</p>
</div>
</div>
 {/* box 3 */}
<div>
<div className="box flex items-center justify-center">
  <div className="new-img11"></div>
</div>
<div><p className="pt-2 text-xs font-medium">Black Striped T-shirt</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$120</p>
</div>
</div>
 {/* box 4 */}
<div>
<div className="box flex items-center justify-center">
  <div className="new-img2"></div>
</div>
<div><p className="pt-2 text-xs font-medium">SKINNY FIT JEANS</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$240</p>
</div>
</div>
 {/* box 5 */}
<div>
<div className="box flex items-center justify-center">
  <div className="new-img3"></div>
</div>
<div><p className="pt-2 text-xs font-medium">CHECKERED SHIRT</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$180</p>
</div>
</div>
 {/* box 6 */}
<div>
<div className="box flex items-center justify-center">
  <div className="new-img4"></div>
</div>
<div><p className="pt-2 text-xs font-medium">SLEEVE STRIPED T-SHIRT</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$130</p>
</div>
</div>
 {/* box 7 */}
<div>
<div className="box flex items-center justify-center">
  <div className="new-img5"></div>
</div>
<div><p className="pt-2 text-xs font-medium">VERTICAL STRIPED SHIRT</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$212</p>
</div>
</div>
 {/* box 8 */}
<div>
<div className="box flex items-center justify-center">
  <div className="new-img6"></div>
</div>
<div><p className="pt-2 text-xs font-medium">COURAGE GRAPHIC T-SHIRT</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$145</p>
</div>
</div>
 {/* box 9 */}
<div>
<div className="box flex items-center justify-center">
  <div className="new-img7"></div>
</div>
<div><p className="pt-2 text-xs font-medium">LOOSE FIT BERMUDA SHORTS</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$80</p>
</div>
</div>
<hr  className="w-full text-gray-400 hidden md:block"/>
<div className="casual-end hidden md:block"></div>  
     </div>
     </div>
        </section>
    )
}