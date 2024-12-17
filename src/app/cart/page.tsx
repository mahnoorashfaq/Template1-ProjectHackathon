import { FaArrowRight } from "react-icons/fa";
export default function Cart(){
    return(
       <section className="cart-section flex flex-col ">
      <div className="mb-4 mr-auto"><p className="flex gap-2 text-xs items-center ">Home  <FaArrowRight/>Cart</p>
     <h1 className="text-2xl md:text-2xl font-bold">Your cart </h1></div>

        <div className="cart-boxes flex justify-center gap-10">
        <div className="cart-boxes-section1">
        <div className="cart-box1 flex gap-2 sm:gap-6 lg:gap-8">
         <div className="cartimg1 rounded"></div>
         <div><p className="text-xs md:text-sm font-semibold">Gradient Graphic T-shirt</p><p className="text-xs">Size: Large</p><p className="text-xs">Color: White</p><p className="text-sm font-bold" >$145</p></div>
         <div className="h-6 w-20 bg-gray-100 flex items-center text-sm justify-center rounded-lg mt-10"><p>-   1    +</p></div>
        </div>
        <hr />
        <div className="cart-box1 flex  gap-2 sm:gap-6 lg:gap-8">
         <div className="cartimg2 rounded"></div>
         <div><p className="text-xs md:text-sm font-semibold">Gradient Graphic T-shirt</p><p className="text-xs">Size: Large</p><p className="text-xs">Color: White</p><p className="text-sm font-bold" >$145</p></div>
         <div className="h-6 w-20 bg-gray-100 flex items-center text-sm justify-center rounded-lg mt-10"><p>-   1    +</p></div>
        </div>
        <hr />
        <div className="cart-box1 flex gap-2 sm:gap-6 lg:gap-8">
         <div className="cartimg3 rounded"></div>
         <div><p className="text-xs md:text-sm font-semibold">Gradient Graphic T-shirt</p><p className="text-xs">Size: Large</p><p className="text-xs">Color: White</p><p className="text-sm font-bold" >$145</p></div>
         <div className="h-6 w-20 bg-gray-100 flex items-center  text-sm justify-center rounded-lg mt-10"><p>-   1    +</p></div>
        </div>
        </div>
        
        <div className="cart-boxes-section2 flex flex-col justify-center pl-7 pr-5">
          <p className="text-sm sm:text-base font-bold pb-2">Order Summary</p>
         <div className="flex text-xs items-center gap-28 pb-3"> <div><p>Subtotal</p><p>Discount (-20%)</p><p>Delivery Fee</p></div><div><p>$565</p><p>-$113</p><p>$15</p></div></div><hr/>
         <div className="flex text-xs gap-44 pt-3"><p>Total</p> <p>$467</p></div>
            <div className="flex gap-4 mt-3"><input type="text" placeholder="Add promo code" className="text-xs h-6 bg-gray-100 w-40 rounded-xl pl-4"  /> <button className="text-xs h-6 bg-black w-16 text-white rounded-xl">Apply</button></div>
        <div className="cart-btn flex items-center  justify-center mt-3 h-8 w-56 rounded-xl text-xs "><input type="text" placeholder="Go to Checkout" className="outline-none bg-none"/> <FaArrowRight className="text-white text-xs"/>  </div>
        </div>
        </div>
       </section>
    )
}