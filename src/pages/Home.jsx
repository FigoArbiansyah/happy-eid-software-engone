import React, { useEffect, useState } from 'react'
import anya from "../assets/anya.jpg"
import figo from "../assets/figo.jpeg"
import bulan from "../assets/bulan.png"
import bedug from "../assets/bedug.png"
import lentera from "../assets/lentera.png"
import { Link } from 'react-router-dom'

const Home = () => {
    
  const [text, setText] = useState("")

  useEffect(() => {
    setInterval(() => {
      setText("Klik dimanapun")
    }, 3000)
  }, [])

  return (
    <Link to={"/ucapan"}>
    <div className="container min-h-screen flex items-center justify-center">
      <span className="absolute bottom-2 text-sm text-slate-400">{text}</span>
        <div className="animate__animated animate__fadeInDownBig animate__delay-1s h-[350px] md:w-[370px] w-8/12 border-2 overflow-hidden border-yellow-600 relative bg figure" style={{borderRadius: "51% 49% 0% 0% / 43% 43% 57% 57% "}}>
          <img src={figo} alt="" className="w-full h-full object-cover" />
        </div>
          <div className='animate__animated animate__fadeInUpBig animate__delay-1s md:w-[370px] w-8/12 scale-125 h-[50px] absolute bottom-10 rounded flex flex-col justify-center items-center' style={{background: ""}}>
            <h1 className='title text-2xl font-extrabold'>Happy Eid al-Fitr</h1>
            <span className="w-1/2 h-[2px] bg-yellow-600 rounded-full mt-3"></span>
          </div>
        <img src={lentera} className='max-md:w-96 max-md:h-96 absolute -top-28 max-md:left-0 -z-10 animate__animated animate__fadeInDown' alt="" />
    </div>
    </Link>
  )
}

export default Home