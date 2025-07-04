import React from 'react'

function Hero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden z-30 bg-black
                before:absolute before:inset-0 before:bg-black before:opacity-60 before:z-0">
  {/* Fullscreen background image */}
  <img
    className="absolute inset-0 w-full h-full object-cover z-0"
    src="https://imgs.search.brave.com/fRTwwPcrsMTMdcnIclfCFIxGcMo2Fz1KCCZfZLdmpqk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kaWdp/dGFsLW1hcmtldGlu/Zy1jb250ZW50LXBs/YW5uaW5nLWFkdmVy/dGlzaW5nLXN0cmF0/ZWd5LWNvbmNlcHQt/MTA0NTEyMDczLmpw/Zw"
    alt="Background"
  />

  {/* Foreground content */}
  <div className="relative z-10 flex items-center flex-col md:flex-row justify-between text-white pt-10 px-6 md:px-52">
    <div className="max-w-[500px] py-10 px-5 md:py-0 md:px-0">
      <h1 className="text-6xl md:text-8xl font-semibold leading-[1em] outlined-text">
        Digital
      </h1>
      <h1 className="text-6xl md:text-8xl font-semibold">Marketing</h1>
      <p className="mt-4">
        Powering your digital success. Unlock your digital potential. Drive
        growth and maximize your online presence with strategic digital
        marketing solutions that deliver measurable results.
      </p>
    </div>

    <div className=" w-[360px] bg-zinc-800 p-4 text-white font-sans overflow-auto 
             rounded-lg hover:shadow-emerald-400  transition-all duration-500 
             focus-within:ring-4 focus-within:ring-teal-400 focus-within:ring-opacity-50">
  <form className="space-y-3">
    {/* Name */}
    <div>
      <label className="block text-sm mb-1">Name*</label>
      <input
        type="text"
        className="w-full bg-transparent border-b border-teal-400 outline-none px-1 py-1 
                   focus:outline-none focus:border-teal-300"
      />
    </div>

    {/* Phone with Flag */}
    <div className="flex gap-2">
      <div className="flex items-center gap-1 w-[120px] border-b border-teal-400 pb-1">
        <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-4" />
        <span>+91</span>
        <select className="bg-transparent outline-none text-white">
          <option value="+91">▼</option>
        </select>
      </div>
      <input
        type="tel"
        placeholder="Phone No*"
        className="flex-1 bg-transparent border-b border-teal-400 outline-none px-1 py-1 
                   focus:outline-none focus:border-teal-300"
      />
    </div>

    {/* Email and Dropdown */}
    <div className="flex gap-2">
      <input
        type="email"
        placeholder="Email*"
        className="w-1/2 bg-transparent border-b border-teal-400 outline-none px-1 py-1 
                   focus:outline-none focus:border-teal-300"
      />
      <select className="w-1/2 bg-transparent border-b border-teal-400 outline-none text-white">
        <option>Digital Marketing</option>
        <option>Web Dev</option>
      </select>
    </div>

    {/* Business */}
    <div>
      <input
        type="text"
        placeholder="Which Business do you have ?*"
        className="w-full bg-transparent border-b border-teal-400 outline-none px-1 py-1 
                   focus:outline-none focus:border-teal-300"
      />
    </div>

    {/* Location */}
    <div>
      <input
        type="text"
        placeholder="Location*"
        className="w-full bg-transparent border-b border-teal-400 outline-none px-1 py-1 
                   focus:outline-none focus:border-teal-300"
      />
    </div>

    {/* Message */}
    <div>
      <textarea
        placeholder="Message*"
        rows="2"
        className="w-full bg-transparent border-b border-teal-400 outline-none px-1 py-1 resize-none 
                   focus:outline-none focus:border-teal-300"
      ></textarea>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="w-full mt-2 bg-teal-400 hover:bg-white transition-all duration-500 ease-out text-black font-medium py-2 "
    >
      Connect With Vdigtech Today ↑
    </button>
  </form>
</div>

  </div>
</div>

  )
}

export default Hero;