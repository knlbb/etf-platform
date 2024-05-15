import { redirect } from "next/navigation";
export default function Home() {
  if (process.env.LOGGED_IN === "true") {
    redirect('dashboard')
  }else{
    redirect('login')
  }
  return (
    <>
    </>
  );
}


