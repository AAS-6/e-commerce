import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase";
import { useDispatch } from "react-redux";
import { toggleLoginOverlay } from "@/store/ui-slice";
export default function LoginOverlay() {
  const dispatch = useDispatch();

  const handleLoginOverlay = () => {
    dispatch(toggleLoginOverlay());
  };

  return (
    <div className='w-screen h-screen absolute flex items-center top-0 z-20'>
      <div
      className="w-full h-full absolute top-0 left-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        onClick={handleLoginOverlay}
      ></div>
      <div className='bg-white p-10 max-w-2xl mx-auto relative rounded-lg z-30'>
        <h1 className='font-semibold text-[#5F72FF] text-2xl'>Masuk</h1>
        <Auth
          supabaseClient={supabase}
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
          providers={["google"]}
          view='magic_link'
        />
      </div>
    </div>
  );
}
