"use client";
import {useEffect,useState} from "react";
import {Bookmark,Trash2} from "lucide-react";
import {players} from "@/lib/data";
import {PlayerCard,Heading} from "@/components/ui";

const STORAGE_KEY="ultimatehq:watchlist";
export default function WatchlistPage(){
  const [ids,setIds]=useState<string[]>([]);
  useEffect(()=>{try{setIds(JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]"));}catch{setIds([]);}},[]);
  function remove(id:string){const next=ids.filter(x=>x!==id);setIds(next);localStorage.setItem(STORAGE_KEY,JSON.stringify(next));}
  const saved=players.filter(p=>ids.includes(p.id));
  return <><div className="page-title"><div><small className="eyebrow">YOUR CLUB / PERSONAL COLLECTION</small><h1>Watchlist<span>.</span></h1><p>Your bookmarked cards, ready for the next squad decision.</p></div><aside><b>{saved.length}</b><small>SAVED PLAYERS</small></aside></div><section className="section"><Heading eyebrow="SAVED CARDS" title="Your collection" description="Saved locally in this browser. Sign-in and cloud sync can be connected later."/>{saved.length?<><div className="watchlist-grid">{saved.map(p=><div className="watchlist-item" key={p.id}><PlayerCard player={p}/><button className="remove-watch" onClick={()=>remove(p.id)}><Trash2 size={13}/> Remove</button></div>)}</div></>:<div className="empty-watch"><Bookmark size={26}/><b>No saved players yet</b><span>Open a player profile and select “Save player” to add it here.</span></div>}</section></>;
}
