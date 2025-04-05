import Link from 'next/link';

const HomePage=()=>{
    return (

        <div className="py-5 flex flex-col justify-center items-start bg-red-600 w-100">
      <div className="main-content px-5 flex flex-col justif-center items-center  ">
        <div className="flex flex-col justify-center items-start text-center mb-4">
          <div className="mt-5">
            <h3 className="main-title text-5xl">HELLO I AM</h3>
          </div>
          <div>
            <h2 className="my-4 font-bold text-lg text-yellow-700">Samira Omidvar</h2>
          </div>
          <div>
            <p className="my-4 text-sm">
              FrontEnd Developer | JavaScript , React.js , Redux.js , Next.js
            </p>
          </div>
        </div>
        <div className=" w-full m-auto   flex justify-around items-center text-center my-4">
          <div className="rounded-xl border border-1 border-yellow-700 p-3 text-sm font-bold bg-yellow-700">
            <Link href="/" className="text-white block w-full h-full">
              Start Consulating
            </Link>
          </div>
          <div className="rounded-xl border border-1 border-yellow-700 p-3 text-sm font-bold">
            <Link href="/" className="text-dark block w-full h-full">
              Available for Frelance
            </Link>
          </div>
        </div>
       
      </div>
    </div>
    )
};
export default HomePage;