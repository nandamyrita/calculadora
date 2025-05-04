"use client";
import { useState } from "react";
 
export default function Calculadora() {

  const [mode, setMode] = useState(1);
  const chooseMode1  = () => {
    setMode(1)
  } 
  const chooseMode2  = () => {
    setMode(2)
  } 
  const chooseMode3  = () => {
    setMode(3)
  } 
  const bgColor =
  mode === 1
    ? "bg-zinc-800" : mode === 2 
    ? "bg-blue-600"  : "bg-yellow-400"; 

  const btnEspecials = mode === 1 ? "text-red-600" : mode === 2 ? "text-orange-600" : "text-cyan-400";
  const caracterHeader = mode === 1 ? "text-white" : mode === 2 ? "text-stone-950" : "text-yellow-400";
  const caracterBody = mode === 1 ? "text-zinc-950" : mode === 2 ? "text-stone-950" : "text-yellow-400";
  
  const tecla = mode === 1 ? "text-zinc-950" : mode === 2 ? "text-stone-950" : "text-yellow-400";

  return (
    <main className={`w-full h-screen flex justify-center items-center ${bgColor}`}>
      <article className="w-[600px] h-[800px] ">
        <div className="w-full flex justify-between">
          <h1 className="text-white text-lg font-semibold"> calc </h1>
          <div className="w-40 flex gap-5 justify-end items-end text-white">
            <h2 className="uppercase text-xs font-semibold"> theme </h2>
            <div className="box_state w-20 ">
              <div className="states flex gap-4 w-full justify-center">
                <p> 1</p>
                <p> 2</p>
                <p> 3</p>
              </div>

              <div className="w-full h-6 bg-zinc-900 flex items-center rounded-xl px-2 justify-between"> 
                <button onClick={chooseMode1} className={`w-4 h-4 ${mode === 1 ? " rounded-full bg-red-600" : "bg-transparent cursor-pointer" }`} />
                <button onClick={chooseMode2} className={`w-4 h-4 ${mode === 2 ? " rounded-full bg-orange-600" : "bg-transparent cursor-pointer" }`} />
                <button onClick={chooseMode3} className={`w-4 h-4 ${mode === 3 ? " rounded-full bg-cyan-400" : "bg-transparent cursor-pointer" }`} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
