'use client'
import { useState } from 'react'
import Image from 'next/image'

const ProfileImage=()=> {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="w-full flex justify-center items-center mb-4">
      {!isLoaded && (
        <div className="w-[160px] h-[160px] rounded-full bg-zinc-800 animate-pulse" />
      )}

      <Image
        className={`rounded-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        priority={true}
        src="/imgs/logo/omidvar.webp"
        alt="Samira Omidvar"
        width={160}
        height={160}
        onLoadingComplete={() => setIsLoaded(true)}
      />
    </div>
  )
}
export default ProfileImage;