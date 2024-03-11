"use client"
import { useRef } from "react";

export default function Terminal() {
  
  const inputRef = useRef<HTMLInputElement>(null);
  const handleDivClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <header className="header flex h-[3vh] border-b p-1">
        <span>X</span>
        <span>-</span>
      </header>
      <main
        className="terminal flex flex-col h-[97vh] p-6">
        <div className="history h-[92vh]"
          onClick={handleDivClick}
        >

        </div>
        <div className="commands flex flex-col justify-items-start items-baseline h-[5vh] text-white border-t" 
          onClick={handleDivClick}
        >
          <span className="text-[#FF82F7] font-semibold">~</span>
          <input 
            id="command"
            ref={inputRef}
            className="w-full bg-transparent pl-1 text-lg font-light border-0"
            type="text" />
        </div>
      </main>
    </>
  );
}
