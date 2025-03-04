import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Sidebar from "../components/Sidebar"
import Navbar from "@/components/Navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />


    </UserProvider>
  );

}




