import React from 'react';
import ProductCard from './ui/productCard';


export default function Products() {
    return (
        <div className=" px-20 text-neutral-900  flex flex-col w-full h-full items-center justify-center gap-5 py-10">
            <h1 className="text-[#265853] text-start w-full text-[8vw] md:text-[6vw] lg:text-[4.3vw]">
                Our <span className="font-bold">Products</span>
            </h1>

            <div className='flex '>
                <ProductCard />
                <ProductCard />
              
            </div>
        </div>
    );
}
