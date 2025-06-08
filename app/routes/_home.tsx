import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function Home() {
  return (
    <main className="bg-slate-300/20">
      <Navbar />

      <section className="max-container">
        <h1 className="head-text ">
          I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Haridas Pawar,
          </span>
        </h1>
      </section>

      <Footer />
    </main>
  );
}
