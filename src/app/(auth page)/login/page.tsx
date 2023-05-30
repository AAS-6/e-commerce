"use client";

// turn ogg layout

import { supabase } from "@/lib/supabase";
import { Suspense, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Loading from "./loading";
import Logo from "@/components/layout/Logo";

const initialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

export default function Login() {
  const [features, setFeatures] = useState<"magic_links" | "email">(
    "magic_links"
  );
  return (
    <main>
      <div className='max-w-2xl mx-auto mt-20 flex flex-col gap-y-5'>
        <Logo width={256} height={256} />

        <Auth
          supabaseClient={supabase}
          providers={["google"]}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#5F72FF",
                  brandAccent: "#e4ebf5",
                },
              },
            },
          }}
          view={"magic_link"}
          localization={{
            variables: {
              magic_link: {
                button_label: "Masuk dengan Email",
                confirmation_text: "Cek email anda melihat link masuk",
                email_input_label: "Email",
                email_input_placeholder: "Masukkan email anda",
                link_text: "Masuk tanpa password",
                loading_button_label: "Mengirim link ke email anda",
              },

              sign_up: {
                button_label: "Daftar Sekarang",
                confirmation_text: "Cek email anda untuk melanjutkan",
                email_input_placeholder: "Masukkan email anda",
                email_label: "Email",
                link_text: "Belum punya akun? Daftar",
                password_input_placeholder: "Masukkan password anda",
                loading_button_label: "Memproses...",
                password_label: "Password",
              },
              sign_in: {
                button_label: "Masuk",
                email_input_placeholder: "Masukkan email anda",
                email_label: "Email",
                link_text: "Sudah punya akun? Masuk",
                password_input_placeholder: "Masukkan password anda",
                password_label: "Password",
                loading_button_label: "Memproses...",
              },
              forgotten_password: {
                button_label: "Reset Password",
                confirmation_text: "Cek email anda untuk melanjutkan",
                email_input_placeholder: "Masukkan email anda",
                email_label: "Email",
                link_text: "Lupa password?",
                loading_button_label: "Memproses...",
                password_label: "Password",
              },
            },
          }}
          magicLink={true}
          redirectTo='/'
        />
      </div>
    </main>
  );
}
