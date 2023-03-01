import React from 'react';
import { TfiHome } from 'react-icons/tfi';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HeroWrapper from './HeroWrapper';

function Hero({ pageName, bgImage }) {
  const router = useRouter();
  console.log('router', router);
  return (
    <HeroWrapper bgImage={bgImage} isSmall>
      <div className="bg-black/40 md:h-[65vh] h-[65vh] ">
        <div className="h-full flex justify-center items-center">
          <p className="text-lightShade  flex  justify-center items-center">
            <Link href="/" className="flex hover:text-brand">
              <span className="  mr-1">
                <TfiHome className=" w-5 h-5   " />
              </span>
              <span className=" font-semibold"> Home &gt;</span>
            </Link>
            <span className="ml-1 capitalize">
              {pageName || router?.asPath?.replace('/', '')}
            </span>{' '}
          </p>
        </div>
      </div>
    </HeroWrapper>
  );
}

export default Hero;
