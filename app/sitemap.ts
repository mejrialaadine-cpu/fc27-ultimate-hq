import type {MetadataRoute} from "next";
import {players} from "@/lib/data";

export default function sitemap():MetadataRoute.Sitemap{
  const base=process.env.NEXT_PUBLIC_SITE_URL??"https://example.com";
  const routes=["","/players","/compare","/squad-builder","/sbcs","/evolutions","/market"];
  return [
    ...routes.map(route=>({url:`${base}${route}`,lastModified:new Date(),changeFrequency:"daily" as const,priority:route===""?1:0.7})),
    ...players.map(player=>({url:`${base}/players/${player.slug}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:0.6}))
  ];
}
