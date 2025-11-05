import { RiMoonLine, RiSunLine } from '@remixicon/react'
import React, { useEffect, useState } from 'react'

const ToggleTheme = () => {
    const [isDark, setIsDark] = useState(true)
    // Save in local storage 
    useEffect(()=>{
        const saveTheme = localStorage.getItem("theme") || "dark"
        setIsDark(saveTheme === "dark")
        document.documentElement.classList.toggle("dark" , saveTheme === "dark")
    },[])
    const toggleTheme = () => {
        const newTheme = !isDark
        setIsDark(newTheme)
        document.documentElement.classList.toggle("dark" , newTheme)
        localStorage.setItem("theme" , newTheme ? "dark" : "light")
    }
  return (
    <button className='size-7 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors p-1 rounded-full' onClick={toggleTheme} >
        {isDark ? <RiSunLine /> : <RiMoonLine /> }
        
    </button>
  )
}

export default ToggleTheme