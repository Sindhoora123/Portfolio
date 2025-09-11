export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
        Hi, I'm Sindhoora
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-300">
        Full Stack Developer • Flutter Enthusiast • Java Geek
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 transition rounded-full shadow-lg"
      >
        View My Work
      </a>
<div className="mt-6 flex flex-col md:flex-row gap-4">
  <a
    href="/Portfolio/Sindhoora-Resumee.pdf"
    download
    className="px-6 py-3 bg-pink-600 hover:bg-pink-700 transition rounded-full shadow-lg"
  >
    Download My Resume
  </a>
  <a
    href="/Portfolio/Sindhoora-Resumee.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-pink-600 hover:bg-pink-700 transition rounded-full shadow-lg"
  >
    View My Resume
  </a>
</div>


    </section>
  );
}
