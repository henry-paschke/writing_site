import Image from "next/image";

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
        The only thing you need to get started is a guitar and a pick. Using clear instructions, pictures, and audio clips, we will cover two simple chords,
        and learn the classic song “A Horse with No Name” by America."
        />
        <Slide title="Holding the guitar" content="">
          <p className="text-gray-400">
            To hold the guitar, place the curved part of the body on your right
            knee with the strings facing away from you.
          </p>
          <div className="flex justify-center my-[15px]">
            <Image
              src="/Hold.jpg"
              width={400}
              height={300}
              alt="How to hold the guitar"
              priority
              className="h-auto w-[45%] mx-[15px] border border-white [border-width:2px] [border-radius:5%]"
            />
          </div>
          <p className="text-gray-400">
            Hold the pick like this between your thumb and fingers in your right
            hand:
          </p>
          <div className="flex justify-center my-[15px]">
            <Image
              src="/Pick.jpg"
              width={400}
              height={300}
              alt="How to hold the guitar"
              priority
              className="h-auto w-[45%] mx-[15px] border border-white [border-width:2px] [border-radius:5%]"
            />
          </div>
          <p className="text-gray-400">
            Put your left thumb on the back of the guitar neck, with your
            remianing fingers on top of the strings:
          </p>
          <div className="flex justify-center my-[15px]">
            <Image
              src="/Hand.jpg"
              width={400}
              height={300}
              alt="How to hold the guitar"
              priority
              className="h-auto w-[45%] mx-[15px] border border-white [border-width:2px] [border-radius:5%]"
            />
          </div>
          <p className="text-gray-400">
            Now you are holding the guitar properly.
          </p>
        </Slide>
        <Slide title="Tuning" content="">
          <p className="text-gray-400">
            The next step is to tune your guitar. There are many apps and
            websites with tuners on them, but the easiest one I've found to use
            is{" "}
            <a
              href="https://tuner-online.com/"
              className="text-blue-600 underline"
              target="_blank"
            >
              this one.
            </a>{" "}
            Open up the tuner app on your phone, turn your microphone on, and
            press the start button. Each string needs to be adjusted until it is
            the right note. Notes follow the cycle A, A♯, B, C, C♯ , D, D♯, E,
            F, F♯, G, G♯, which repeats over and over. To indicate which cycle
            we are in, called the octave, we write a note with a number after
            it, like this "A3", which indicates A in the 3rd octave. Pluck just
            one string at a time, and adjust it until it is the correct note.
            The correct notes starting with the thinnest string are E4, B3, G3,
            D3, A2, and E2.
          </p>
          <audio controls className="w-[70%] my-[15px]">
            <source src="/Tune.m4a" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Slide>
        <Slide title="Chords" content="">
          <p className="text-gray-400">
            Now that the guitar is in tune, it is time to play your first 2
            chords. The first chord is E minor. It has a somber and mysterious
            sound. Use 2 of your fingers to push down on these two frets, as
            close as you can to the metal without making any buzzing noises.
          </p>
          <div className="flex justify-center my-[15px]">
            <Image
              src="/Em.jpg"
              width={400}
              height={300}
              alt="How to hold the guitar"
              priority
              className="h-auto w-[45%] mx-[15px] border border-white [border-width:2px] [border-radius:5%]"
            />
            <Image
              src="/Em_diagram.jpg"
              width={400}
              height={300}
              alt="How to hold the guitar"
              priority
              className="h-auto w-[45%] mx-[15px] border border-white [border-width:2px] [border-radius:5%]"
            />
          </div>
          <p className="text-gray-400">This is what it should sound like:</p>
          <audio controls className="w-[70%] my-[15px]">
            <source src="/Em.m4a" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p className="text-gray-400">
            Next up is D6/9. This chord is a little easier than the last one,
            you only need one finger. Do the same thing as the last chord,
            placing that one finger as close to the metal as you can and trying
            to find a "sweet spot" with no buzzing.
          </p>
          <div className="flex justify-center my-[15px]">
            <Image
              src="/D69.jpg"
              width={400}
              height={300}
              alt="How to hold the guitar"
              priority
              className="h-auto w-[45%] mx-[15px] border border-white [border-width:2px] [border-radius:5%]"
            />
            <Image
              src="/D69_diagram.jpg"
              width={400}
              height={300}
              alt="How to hold the guitar"
              priority
              className="h-auto w-[45%] mx-[15px] border border-white [border-width:2px] [border-radius:5%]"
            />
          </div>
          <p className="text-gray-400">This is what it should sound like:</p>
          <audio controls className="w-[70%] my-[15px]">
            <source src="/D69.m4a" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Slide>
        <Slide title="Your First Song">
          <p className="text-gray-400">
            {" "}
            Now that you know the two chords, you are ready to play the song. We
            are going to alternate between the chords, strumming with our pick 4
            times each. That's it! Once you can confidently switch between those
            chords and strum along you can play the song, and even try to sing
            along. Be warned, the original song is in a different tuning, so it
            will not sound correct if you play it along with the recording. The
            final product sounds like this:
          </p>
          <audio controls className="w-[70%] my-[15px]">
            <source src="/Song.m4a" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Slide>
        <Slide title="Additional Resources">
          <p className="text-gray-400">
            Once you've learned this song, if you are excited for more, there
            are plenty of resources to learn more songs and skills. To learn
            more songs, you can find chords for almost every song ever on{" "}
            <a
              href="https://tabs.ultimate-guitar.com/"
              className="text-blue-600 underline"
              target="_blank"
            >
              this website.
            </a>{" "}
            To get better at playing the guitar with high quality video lessons
            for free, I highly recommend{" "}
            <a
              href="https://www.justinguitar.com/"
              className="text-blue-600 underline"
              target="_blank"
            >
              this website.
            </a>{" "}
          </p>
        </Slide>
      </section>
    </main>
  );
}

function Slide({ title, content, children }) {
  return (
    <div className="border-l-4 border-gray pl-4">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {content && <p className="text-gray-400">{content}</p>}
      {children}
    </div>
  );
}
