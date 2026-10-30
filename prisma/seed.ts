import {PrismaClient} from "@prisma/client";
const prisma=new PrismaClient();
async function main(){
 const demo=[
  {slug:"kylian-mbappe",name:"Kylian Mbappé",rating:93,position:"ST",positions:["ST","LW"],pace:97,shooting:92,passing:84,dribbling:93,defending:38,physical:84},
  {slug:"jude-bellingham",name:"Jude Bellingham",rating:91,position:"CAM",positions:["CAM","CM"],pace:86,shooting:88,passing:89,dribbling:90,defending:82,physical:86},
  {slug:"vinicius-junior",name:"Vinícius Jr.",rating:92,position:"LW",positions:["LW","ST"],pace:97,shooting:88,passing:85,dribbling:96,defending:39,physical:79}
 ];
 for(const player of demo) await prisma.player.upsert({where:{slug:player.slug},update:player,create:player});
 console.log(`Seeded ${demo.length} sample players.`);
}
main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect());
