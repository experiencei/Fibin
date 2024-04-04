import {RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <main>
        <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
        <RegisterLink>
            signup
          </RegisterLink>
        </div>   
      </main>
    </>
  );
}
