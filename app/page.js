export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12 space-y-16">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Learning Guitar for Beginners
        </h1>
        <p className="text-gray-400 text-lg">A presentation by Henry Paschke</p>
      </header>

      <section className="w-full max-w-4xl space-y-12">
        <Slide
          title="Introduction"
          content="Welcome to the course. Guitar is a very rewarding instrument to learn, but
        starting out can feel overwhelming without someone to guide you. This beginner-friendly guide
        will walk you through everything, step-by-step and designed to feel like there is a musician helping you in person.
        The only thing you need to get started is a guitar. Using clear instructions, pictures, and audio clips, we will cover two simple chords,
        and learn the classic song “A Horse with No Name” by America."
        />
        <Slide
          title="Lesson 1"
          content="Understand the basics before diving deep."
        />
        <Slide
          title="Lesson 2"
          content="Practice through real examples and hands-on tasks."
        />
        <Slide
          title="Conclusion"
          content="You've made it! Let's summarize what you've learned."
        />
      </section>
    </main>
  );
}

function Slide({ title, content }) {
  return (
    <div className="border-l-4 border-black pl-4">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400">{content}</p>
    </div>
  );
}
