export type Player = {
  id:string; slug:string; name:string; rating:number; position:string; positions:string[];
  nation:string; nationCode:string; club:string; league:string; price:number; change:number;
  pace:number; shooting:number; passing:number; dribbling:number; defending:number; physical:number;
  weakFoot:number; skillMoves:number; foot:string; workRates:string; height:string;
  playstyles:string[]; color:"promo"|"gold"|"icon"|"hero"; meta:number;
  stats:Record<string,number>;
};
export type SquadSlot={id:string;position:string;playerId?:string};
