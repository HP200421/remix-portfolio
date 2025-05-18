import { Outlet } from "@remix-run/react";
import Navbar from "~/components/navbar";

export default function Home() {
  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <Outlet />
    </main>
  );
}
