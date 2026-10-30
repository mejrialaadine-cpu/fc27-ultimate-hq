import {NextResponse} from "next/server";
import {evolutions} from "@/lib/data";

export async function GET(){
  return NextResponse.json({data:evolutions,source:"demo",updatedAt:null});
}
