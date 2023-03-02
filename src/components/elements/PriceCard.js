import React from 'react';
import Image from 'next/image';

function PriceCard({ item }) {
  return (
    <div>
      <a href="#" className="group relative block m-6 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={500}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative ">
          <div className="p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-brand">
              {item.label}
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              {item.name}
            </p>
          </div>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 duration-300">
              <p className="text-xl font-semibold font-secondary text-center text-lightShade bg-brand/80 p-6">
                Add to card
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PriceCard;
