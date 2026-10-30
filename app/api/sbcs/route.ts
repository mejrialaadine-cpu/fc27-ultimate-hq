import {NextResponse} from "next/server";
import {sbcs} from "@/lib/data";

export async function GET(){
  return NextResponse.json({data:sbcs,source:"demo",updatedAt:null});
}
