import { Outlet } from "@remix-run/react";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function Home() {
  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
