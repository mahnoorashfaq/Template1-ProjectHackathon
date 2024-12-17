import { LiaStarSolid } from "react-icons/lia";
import { TiTick } from "react-icons/ti";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
   <section className="hero-section">
 <div className="hero-des">
  <h1>FIND CLOTHES <br />
   THATS MATCHES  <br />
   YOUR STYLE</h1>
   <p>Browse Through our diverse range of meticulously crafted garments, designed <br /> 
   to bring out you individuality and cater to ypur sense and style.</p>
   <button><Link  href="/casuals">Shop Now</Link></button>
 </div>
 <div className="hero-review">
 <div><h4>200+</h4><p>International Brands</p></div><hr />
 <div><h4>2000+</h4><p>High-Quality Products</p></div>
 <div><h4>30000+</h4><p>Happy Customers</p></div>
 </div>
 <div className="heroimg1">
 <div className="heroimg2"></div>
 <div className="heroimg3"></div>
 </div>
   </section>

   <section className="brands-name  bg-black w-full flex flex-wrap items-center justify-center gap-10" id="brands-name">
    <div className="name1"></div>
    <div className="name2"></div>
    <div className="name3"></div>
    <div className="name4"></div>
    <div className="name5"></div>
   </section>

   
   {/* New Arrival Section */}
   <section className="new-arrival-section" >
    <h1>New Arrival</h1>
   <div className="new-arrival flex flex-wrap justify-center items-center gap-8">
    {/* box1 */}
<div>
<div className="box flex items-center justify-center">
  <div className="new-img1"></div>
</div>
<div><p className="pt-2 text-xs font-medium">T-SHIRT WITH TAPE DETAILS</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$120</p>
</div>
</div>
 {/* box2 */}
 <div>
<div className="box flex items-center justify-center">
<div className="new-img2"></div>
</div>
<div><p className="pt-2 text-xs font-medium">SKINNY FIT JEANS</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$240 <span className="line-through	text-zinc-300">$260</span></p>
</div>
</div>
 {/* box3 */}
 <div>
<div className="box flex  items-center justify-center">
<div className="new-img3"></div>
</div>
<div><p className="pt-2 text-xs font-medium">CHECKERED SHIRT</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$180</p>
</div>
</div>
 {/* box4 */}
 <div>
<div className="box flex items-center justify-center">
<div className="new-img4"></div>
</div>
<div><p className="pt-2 text-xs font-medium">SLEEVE STRIPED T-SHIRT</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$130  <span className="line-through	text-zinc-300">$160</span> </p>
</div>
</div>
</div>
<div className="flex justify-center mt-6"><button className="h-9 w-36 bg-slate-100 text-xs text-black rounded-2xl		"><Link href="/casuals">View All</Link></button></div>
   </section>      
<hr />
{/* top selling Section */}
<section className="new-arrival-section" id="sale">
    <h1>Top selling</h1>
   <div className="new-arrival  flex flex-wrap justify-center items-center gap-8">
    {/* box5 */}
<div>
<div className="box flex items-center justify-center">
  <div className="new-img5"></div>
</div>
<div><p className="pt-2 text-xs font-medium">VERTICAL STRIPED SHIRT</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$212 <span className="line-through	text-zinc-300">$232</span></p>
</div>
</div>
 {/* box6 */}
 <div>
<div className="box flex items-center justify-center">
<div className="new-img6"></div>
</div>
<div><p className="pt-2 text-xs font-medium">COURAGE GRAPHIC T-SHIRT</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$145</p>
</div>
</div>
 {/* box7 */}
 <div>
<div className="box flex  items-center justify-center">
<div className="new-img7"></div>
</div>
<div><p className="pt-2 text-xs font-medium">LOOSE FIT BERMUDA SHORTS</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$80</p>
</div>
</div>
 {/* box8 */}
 <div>
<div className="box flex  items-center justify-center">
<div className="new-img8"></div>
</div>
<div><p className="pt-2 text-xs font-medium">FADED SKINNY JEANS</p>
<p className="flex items-center text-yellow-300 pt-1 text-sm sm:text-base"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <span className=" text-gray-300 text-xs sm:sm">4.5/5</span></p>
<p className="pt-1 text-xs md:text-sm font-bold">$210</p>
</div>
</div>
</div>
<div className="flex justify-center mt-6"><button className="h-9 w-36 bg-slate-100 text-xs text-black rounded-2xl		"><Link href="/casuals">View All</Link></button></div>
</section> 
{/* Dress Style Section */}
<section className="Style-section">
  <div className="Style-section-box">
    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center pb-4">BROWSE BY DRESS STYLE</h1>
   <div className="style-big-div flex flex-wrap justify-center gap-5"> 
    <div className="style-box1"><p className="text-sm md:text-lg font-bold pt-5 pl-7">Casual</p></div>
    <div className="style-box2"><p className="text-sm md:text-lg font-bold pt-5 pl-7">Formal</p></div>
    <div className="style-box3"><p className="text-sm md:text-lg font-bold pt-5 pl-7">Party</p></div>
    <div className="style-box4"><p className="text-sm md:text-lg font-bold pt-5 pl-7">Gym</p></div></div>
  </div>
</section>
{/* Review Section */}

 <section className="review-section w-full h-64 pt-4 pb-3">
  <h2 className="font-extrabold text-xl md:text-3xl text-center">OUR HAPPY CUSTOMERS</h2>
  <div className="review-main-box flex flex-wrap justify-center gap-5 mt-5" >
    <div className="review-box1 h-44 w-44 flex flex-col justify-center pl-4 pr-4 rounded-xl">
    <p className="flex text-base text-yellow-500 pb-2"><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> </p>
    <p className="flex font-semibold text-sm md:text-base pb-2 items-center gap-2">Sarah M. <span className="h-5 w-5 rounded-full bg-green-600 text-white flex justify-center items-center"><TiTick />    </span></p>
    <p className="text-xs">I m blown away by the quality and style of the <br />
     clothes I received from Shopco From casual <br />
     wear to elegant dresses every piece I ve bought <br />
     has exceeded my expectations.</p>
    </div>
    <div className="review-box1 h-44  flex flex-col justify-center pl-4 pr-4 rounded-xl">
    <p className="flex text-base text-yellow-500 pb-2 "><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> </p>
    <p className="flex font-semibold text-sm md:text-base pb-2 items-center gap-2">Alex K. <span  className="h-5 w-5 rounded-full bg-green-600 text-white flex justify-center items-center"><TiTick />    </span></p>
    <p className="text-xs ">I m blown away by the quality and style of the <br />
     clothes I received from Shop co From casual <br />
     wear to elegant dresses every piece I ve bought <br />
     has exceeded my expectations.</p>
    </div>

    <div className="review-box1 h-44  flex flex-col justify-center pl-4 pr-4 rounded-xl">
    <p className="flex text-base text-yellow-500 pb-2 "><LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> <LiaStarSolid /> </p>
    <p className="flex font-semibold text-sm md:text-base pb-2 items-center gap-2">James L. <span  className="h-5 w-5 rounded-full bg-green-600 text-white flex justify-center items-center"><TiTick />    </span></p>
    <p className="text-xs ">I m blown away by the quality and style of the <br />
     clothes I received from Shop co From casual <br />
     wear to elegant dresses every piece I ve bought <br />
     has exceeded my expectations.</p>
    </div>

  </div>
 </section>
    </div> 
      );
}