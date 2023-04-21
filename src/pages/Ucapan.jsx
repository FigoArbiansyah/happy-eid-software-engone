import React from 'react'
import { useState, useEffect } from 'react'
import anya from "../assets/anya.jpg"
import figo from "../assets/figo.jpeg"
import bulan from "../assets/bulan.png"
import bedug from "../assets/bedug.png"
import lentera from "../assets/lentera.png"
import { Link } from 'react-router-dom'

const Ucapan = () => {
  return (
    <div className={`ucapan flex min-h-screen overflow-hidden bg-white absolute w-full top-0 flex-col items-center`}>
        <img src={bulan} className='z-50 w-48' alt="" />
        <div className="p-4 md:w-5/12">
          <p className='flex gap-3 flex-col'>
            <span className="" style={{fontWeight: "600"}}>
            Assalamualaikum Warahmatullahi Wabarakatuh,
            </span>
            <span>
              <span  className='' style={{fontWeight: "600"}}>Selamat Hari Raya Idul Fitri 1444 Hijriyah!</span> Kami, Segenap Keluarga Besar XII RPL 1, mengucapkan selamat hari raya Idul Fitri kepada teman-teman yang merayakannya.
            </span> 
            <span>
              Semoga segala ibadah dan amalan puasa yang telah dilakukan selama sebulan penuh di bulan suci Ramadan diterima oleh Allah SWT dan mendapatkan pahala yang melimpah.
            </span> 
            <span className="" style={{fontWeight: "600"}}>
              Mohon maaf lahir dan batin jika ada kesalahan dan khilaf yang telah terjadi selama setahun terakhir.
            </span> 
            <span>
              Selamat Hari Raya Idul Fitri, Taqabbalallahu Minna Wa Minkum. Semoga kita semua mendapat limpahan rahmat Allah SWT. Aamiin.
            </span> 
            <span className="" style={{fontWeight: "600"}}>
              Wassalamualaikum Warahmatullahi Wabarakatuh.
            </span>
          </p>
            <div className="mt-5 pt-3">
              <Link to={"/our-team"} className='bg-yellow-500 text-white px-5 py-2 rounded'>Klik disini</Link>
            </div>
        </div>
        <img src={bedug} className='z-50 w-full md:w-5/12' alt="" />
    </div>
  )
}

export default Ucapan