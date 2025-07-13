const projects = [
  {
    title: "Scientific Calculator (Flutter)",
    description: "A dark-themed calculator app with advanced scientific functions.",
    link: "https://github.com/Sindhoora123/ScientificCalculator",
  },
  {
    title: "Chat App (MERN)",
    description: "A real-time chat app with JWT authentication and file sharing.",
    link: "https://github.com/Sindhoora123/RealtimeChatbot",
  },
  {
    title: "Embracelet - E-commerce Site",
    description: "MERN-based shopping site for handmade bracelets with auth and cart.",
    link: "https://github.com/Sindhoora123/Fullstack-embracelet",
  },
  {
    title: "Spotify Clone (React)",
    description: "A responsive Spotify UI clone with music playback features.",
    link: "https://github.com/Sindhoora123/Spotify-clone",
  },
];


export default function Projects() {
  return (
    <section className="py-12 px-6 bg-gray-900" id="projects">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl p-6 hover:scale-105 transition transform shadow-lg"
          >
            <h3 className="text-xl font-semibold text-pink-400">{proj.title}</h3>
            <p className="text-gray-300 mt-2">{proj.description}</p>
            <a
              href={proj.link}
              className="text-blue-400 underline mt-2 inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
