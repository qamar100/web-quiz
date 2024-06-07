import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { LogIn } from "lucide-react"
import Link from "next/link"


export default async function Home() {
  
  const { userId } = await auth();
  const isAuth = !!userId; {/* to check whether the user is log in or not*/ }
  
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col items-center text-center ">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold"> Welcome to twitter</h1>
            <UserButton afterSignOutUrl="/" />  {/* after sign out this will redirect them to the original base url */}
          </div>
           
          <div className="flex mt-2">
  <Link href="/chat">
    {isAuth && <Button>Lets join the conversation</Button>}
  </Link>
</div>
        
          <div className="w-full mt-4">   {/*in below line if user is signed in then file upload or sign in link */}
         
              <Link href="/sign-in">
                <Button> Login to get started
                  <LogIn className="m-4 h-4 ml-2"/>

               
                </Button>
              </Link>
           
          </div>

        </div>
    </div>
    </div>
  );
}
