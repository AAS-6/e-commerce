import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Auth } from "@supabase/auth-ui-react";

export default function Profile() {
  const signoutHandler = () => {
    supabase.auth.signOut();
  };
  return (
    <button
      className='bg-[#5F72FF] py-2 px-5 rounded-lg text-white'
      onClick={signoutHandler}
    >
      Sign out
    </button>
  );
}
