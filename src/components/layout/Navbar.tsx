"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Search from "./Search";
import Logo from "./Logo";
import Menu from "./Cart";
import NavbarButton from "../button/NavbarButton";
import Profile from "../button/Profile";

export default function Navbar() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ user }: any) => setSession(user));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session?.user ?? null);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <header className='px-4 flex items-center justify-around py-3 sticky top-0'>
      <Logo height={72} width={72} />
      <Search />
      <Menu />
      {!session && <NavbarButton />}
      {session && <Profile />}
    </header>
  );
}
