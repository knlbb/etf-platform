import { redirect } from "next/navigation";

import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";
import PageWrapper from "@/components/page-wrapper";
import MarginWidthWrapper from "@/components/margin-width-wrapper";
import Login from "./(pages)/login/page";
// import { AuthProvider } from "@/components/AuthProvider";


export default function Home(){

  if (process.env.LOGGED_IN === "true") {
    redirect('dashboard')
  }else{
    redirect('login')
  }

  // return (
    // <AuthProvider>
      // <div className="flex">
      //   <Sidebar/>
      //   <main className="flex-1">
      //   <div className="flex bg-[#f7faff] flex-col lg:mr-96  min-h-screen">
      //       <Header/>
      //       <div className="pt-2 px-12 space-y-2 bg-[#f7faff] flex-grow pb-4">{children}</div>
      //     </div>
      //   </main>
      // </div>
    // </AuthProvider>
  // )
}


