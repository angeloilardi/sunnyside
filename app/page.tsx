import Navbar from '@/components/Navbar'
import Image from 'next/image'
import testimonials from './../data/testimonials.json'
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="h-screen bg-[url(/images/mobile/image-header.jpg)] bg-cover w-full bg-center relative">
        <Navbar />
        <div className="flex flex-col items-center flex-wrap justify-center gap-14 relative top-[30%] mx-auto">
          <h1 className="font-fraunces font-[900] text-4xl tracking-widest text-center">
            WE ARE CREATIVES
          </h1>
          <Image
            src="/images/icon-arrow-down.svg"
            width={36}
            height={114}
            alt=""
          />
        </div>
      </header>

      {/* Transform yor brand */}
      <div className="flex flex-col">
        <Image
          src="/images/mobile/image-transform.jpg"
          width={375}
          height={200}
          alt=""
        />
        <div className="bg-white flex flex-col py-16 px-7 gap-8 text-center">
          <h2 className="font-fraunces font-[700] text-3xl text-black">
            Transform your brand
          </h2>
          <p className="text-cool_gray font-semibold">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="uppercase text-black font-fraunces tracking-wide">
            Learn More
          </button>
        </div>
      </div>

      {/* Stand out */}

      <div className="flex flex-col">
        <Image
          src="/images/mobile/image-stand-out.jpg"
          width={375}
          height={200}
          alt=""
        />
        <div className="bg-white flex flex-col py-16 px-7 gap-8 text-center">
          <h2 className="font-fraunces font-[700] text-3xl text-black">
            Stand out to the right audience
          </h2>
          <p className="text-cool_gray font-semibold">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="uppercase text-black font-fraunces tracking-wide">
            Learn More
          </button>
        </div>
      </div>

      {/* Graphic design */}

      <div className="flex flex-col w-full h-[600px] bg-[url(/images/mobile/image-graphic-design.jpg)] bg-cover justify-end py-16 gap-10 items-center text-brunswick_green px-6">
        <h1 className="font-fraunces text-3xl font-bold">Graphic Design</h1>
        <p className="font-barlow text-center">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>

      {/* Photography */}

      <div className="flex flex-col w-full h-[600px] bg-[url(/images/mobile/image-photography.jpg)] bg-cover justify-end py-16 gap-10 items-center text-brunswick_green px-6">
        <h1 className="font-fraunces text-3xl font-bold">Photography</h1>
        <p className="font-barlow text-center">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>

      {/* Testimonials */}

      <div className="flex flex-col gap-16 items-center mb-16">
        <h3 className="font-fraunces py-16 tracking-widest text-french_gray">
          CLIENT TESTIMONIALS
        </h3>
        {testimonials.map((testimonial, i) => {
          return (
            <Testimonials
              key={i}
              name={testimonial.name}
              icon={testimonial.icon}
              position={testimonial.position}
              content={testimonial.content}
            />
          );
        })}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 grid-rows-2">
        <Image
          src="/images/mobile/image-gallery-milkbottles.jpg"
          width={200}
          height={200}
          alt=""
        />
        <Image
          src="/images/mobile/image-gallery-orange.jpg"
          width={200}
          height={200}
          alt=""
        />
        <Image
          src="/images/mobile/image-gallery-cone.jpg"
          width={200}
          height={200}
          alt=""
        />
        <Image
          src="/images/mobile/image-gallery-sugar-cubes.jpg"
          width={200}
          height={200}
          alt=""
        />
      </div>
    </main>
  );
}
