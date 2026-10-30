import {NextResponse} from "next/server";
import {z} from "zod";
import {players} from "@/lib/data";
const schema=z.object({q:z.string().trim().max(80).optional(),position:z.string().max(10).optional(),minRating:z.coerce.number().int().min(0).max(99).optional(),limit:z.coerce.number().int().min(1).max(100).default(50)});
export async function GET(request:Request){const url=new URL(request.url);const parsed=schema.safeParse(Object.fromEntries(url.searchParams));if(!parsed.success)return NextResponse.json({error:"Invalid query parameters"},{status:400});const {q,position,minRating,limit}=parsed.data;const data=players.filter(p=>(!q||p.name.toLowerCase().includes(q.toLowerCase())||p.club.toLowerCase().includes(q.toLowerCase()))&&(!position||p.positions.includes(position))&&(!minRating||p.rating>=minRating)).slice(0,limit);return NextResponse.json({data,total:data.length,source:"demo"},{headers:{"Cache-Control":"public, s-maxage=30, stale-while-revalidate=60"}});}
