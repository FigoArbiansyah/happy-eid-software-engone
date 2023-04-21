import React from 'react'
import our from "../assets/our.jpeg"

const Our = () => {
  return (
    <div className='relative min-h-screen' style={{background: `url(${our})`, backgroundPosition: "center", backgroundSize: "cover"}}>
        <div className="w-full min-h-screen bg-[#0A4D68] bg-opacity-[30%] flex flex-col justify-center items-center">
          <p className="text-white" style={{textShadow: "0px 0px 0 black", fontWeight: "600"}}>Selamat Hari Raya</p>
          <p className="text-5xl font-extrabold text-white font-custom" style={{textShadow: "2px 2px 8 black"}}>Idul Fitri</p>
          <p className="text-white" style={{textShadow: "0px 0px 0 black", fontWeight: "600"}}>1444 Hijriyah</p>
        </div>
    </div>
  )
}

export default Our