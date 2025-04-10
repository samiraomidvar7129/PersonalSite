'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const BioImage=()=> {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#171717] p-3 rounded-xl flex justify-center items-center overflow-hidden 
        w-38 h-38 sm:w-60 sm:h-60 md:w-60 md:h-60 lg:w-60 lg:h-60"
    >
      {!isLoaded && (
        <div className="absolute w-full h-full bg-zinc-800 animate-pulse rounded-xl" />
      )}

      <Image
        className={`rounded-xl object-cover w-full h-full transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        src="/imgs/logo/omidvar.webp"
        alt="Samira Omidvar"
        width={300}
        height={300}
        priority={true}
        onLoadingComplete={() => setIsLoaded(true)}
      />
    </motion.div>
  )
}
export default BioImage;