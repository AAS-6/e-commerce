import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Auth } from "@supabase/auth-ui-react";
import Link from "next/link";

export default function Profile() {
  const signoutHandler = () => {
    supabase.auth.signOut();
  };
  return (
    <div className='flex gap-x-6 border-slate-300 border-l-2 pl-6'>
      <Link href='/shop'>
        <button className='border-[#5F72FF] text-[#5F72FF] py-2 px-5 rounded-lg border-2 font-medium'>
          Buka Toko
        </button>
      </Link>
      <button
        className='bg-[#5F72FF] py-2 px-5 rounded-lg text-white'
        onClick={signoutHandler}
      >
        Sign out
      </button>
    </div>
  );
}
