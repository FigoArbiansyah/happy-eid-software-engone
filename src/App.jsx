import { useState, useEffect } from 'react'
import anya from "./assets/anya.jpg"
import figo from "./assets/figo.jpeg"
import bulan from "./assets/bulan.png"
import bedug from "./assets/bedug.png"
import lentera from "./assets/lentera.png"

function App() {
  const [show, setShow] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    setInterval(() => {
      setText("Klik dimanapun")
    }, 5000)
  }, [])

  return (
    <section onClick={() => {setShow(true)}}>
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
      <div className={`ucapan ${show ? "flex" : "hidden"} min-h-screen overflow-hidden bg-white absolute w-full top-0 flex-col items-center`}>
        <img src={bulan} className='z-50 w-48' alt="" />
        <div className="p-4 md:w-5/12">
          <p className='flex gap-3 flex-col'>
            <span className="font-semibold">
            Assalamualaikum Warahmatullahi Wabarakatuh,
            </span>
            <span>
              <span  className='font-semibold'>Selamat Hari Raya Idul Fitri 1444 Hijriyah!</span> Kami, Segenap Keluarga XII RPL 1, mengucapkan selamat hari raya Idul Fitri kepada teman-teman yang merayakannya.
            </span> 
            <span>
              Semoga segala ibadah dan amalan puasa yang telah dilakukan selama sebulan penuh di bulan suci Ramadan diterima oleh Allah SWT dan mendapatkan pahala yang melimpah.
            </span> 
            <span className="font-semibold">
              Mohon maaf lahir dan batin jika ada kesalahan dan khilaf yang telah terjadi selama setahun terakhir.
            </span> 
            <span>
              Selamat Hari Raya Idul Fitri, Taqabbalallahu Minna Wa Minkum. Semoga kita semua mendapat limpahan rahmat Allah SWT. Aamiin.
            </span> 
            <span className="font-semibold">
              Wassalamualaikum Warahmatullahi Wabarakatuh.
            </span>
          </p>
        </div>
        <img src={bedug} className='z-50 w-full md:w-5/12' alt="" />
      </div>
    </section>
  )
}

export default App
