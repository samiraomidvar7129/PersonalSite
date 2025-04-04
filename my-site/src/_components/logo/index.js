import React from 'react';
import Image from 'next/image';
const Logo=()=>{
    return(
<div>
    <Image
             loading='lazy'
             src="/imgs/logo/logo.png"
             alt="logo-samiraomidvar"
             width={100}
             height={100}
           />
</div>
    )
}
export default Logo;