import React from 'react';
import '../app/globals.css';
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} transition= { {duration: 1} } animate={{ opacity: 1 } } >
    <div className="  py-5 d-flex flex-column justify-content-center align-items-start">
  <div className="main-content px-5 d-flex flex-column justify-content-center align-items-center  ">
    <div className="d-flex flex-column justify-content-center align-items-start text-center mb-4">
      <div className="mt-5">
        <h3 className="main-title">HELLO I AM</h3>
      </div>
      <div>
        <h2 className="mt-2">Samira Omidvar</h2>
      </div>
      <div>
        <p className="mt-2">
          FrontEnd Developer | JavaScript , React.js , Redux.js , Next.js
        </p>
      </div>
    </div>
    <div className="main-content__btns d-flex w-75 m-auto  justify-content-around align-items-center text-center my-4">
      <div className="main-content__btns--left  p-3">
        <Link href="" className="text-white ">
          Start Consulating
        </Link>
      </div>
      <div className="main-content__btns--right p-3">
        <Link href="" className="text-dark">
          Available for Frelance
        </Link>
      </div>
    </div>
   
  </div>
</div>
</motion.div>  );
}
