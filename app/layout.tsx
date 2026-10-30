import type {Metadata} from "next";
import "./globals.css";
import {Shell} from "@/components/shell";
export const metadata:Metadata={title:{default:"Ultimate HQ — FC 27 Database",template:"%s | Ultimate HQ"},description:"Explore Ultimate Team players, compare stats, build squads and track the transfer market."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}
