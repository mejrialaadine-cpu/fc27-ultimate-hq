"use client";
import {useEffect,useState} from "react";
import {Bookmark,BookmarkCheck} from "lucide-react";

const STORAGE_KEY="ultimatehq:watchlist";
export function WatchlistButton({playerId}:{playerId:string}){
  const [saved,setSaved]=useState(false);
  useEffect(()=>{try{const ids=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]") as string[];setSaved(ids.includes(playerId));}catch{setSaved(false);}},[playerId]);
  function toggle(){
    try{
      const ids=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]") as string[];
      const next=saved?ids.filter(id=>id!==playerId):Array.from(new Set([...ids,playerId]));
      localStorage.setItem(STORAGE_KEY,JSON.stringify(next));setSaved(!saved);
    }catch{/* Local storage may be disabled by the browser. */}
  }
  return <button className="outline-btn" onClick={toggle}>{saved?<BookmarkCheck size={14}/>:<Bookmark size={14}/>} {saved?"Saved":"Save player"}</button>;
}
