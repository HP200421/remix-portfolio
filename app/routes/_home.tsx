import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export default function Home() {
  return (
    <main className="bg-slate-300/20">
      <Navbar />

      <section className="max-container">
        <h1 className="head-text mt-40">
          {" "}
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Haridas Pawar
          </span>{" "}
        </h1>
        <p className="text-lg mt-10 text-gray-700 text-justify leading-relaxed mb-4">
          A passionate <b>Full Stack Developer</b> with expertise in modern web
          technologies. I love creating innovative solutions and turning ideas
          into reality through clean, efficient code. Always eager to learn new
          technologies and take on challenging projects.
        </p>
        <hr />
      </section>
      <Footer />
    </main>
  );
}
