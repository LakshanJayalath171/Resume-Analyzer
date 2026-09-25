import React from 'react'

interface SidebarCardProps {
    icon: React.ReactNode;
    text: string;
    setSelectedMenu?: (menu: string) => void;
    selectedText?: string;
}

const Sidebar_card = ({icon,text,setSelectedMenu,selectedText}: SidebarCardProps) => {
  return (
    <div>
        <div onClick={()=>setSelectedMenu(text)} className={`w-full h-full flex items-center justify-start gap-2 rounded-lg px-4 py-2 cursor-pointer ${selectedText === text ? 'bg-special' : ''}`}>
            <h1 className={`font-bold flex items-center justify-start gap-3 text-sm ${selectedText === text ? 'text-white' : 'text-black/80'}`}>{icon}{text}</h1>
        </div>
    </div>
  )
}

export default Sidebar_card