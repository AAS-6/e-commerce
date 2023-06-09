"use client";

import Navbar from "@/components/layout/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import { Provider, useSelector } from "react-redux";
import { store } from "@/store";
import Footer from "@/components/layout/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { selectLoginOverlay } from "@/store/ui-slice";
import LoginOverlay from "@/components/overlay/LoginOverlay";
import CartOverlay from "@/components/cart/CartOverlay";

export const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <LoginOverlay />
        <CartOverlay />
        <Navbar />
        {children}
        <Footer />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
