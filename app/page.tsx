import Navbar from '@/components/Navbar'
import Image from 'next/image'
import testimonials from './../data/testimonials.json'
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="h-screen bg-[url(/images/mobile/image-header.jpg)] bg-cover w-full bg-center relative md:bg-[url(/images/desktop/image-header.jpg)]">
        <Navbar />
        <div className="flex flex-col items-center flex-wrap justify-center gap-14 relative top-[30%] md:top-[20%] mx-auto">
          <h1 className="font-fraunces font-[900] text-4xl tracking-widest text-white text-center">
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
      <div className="flex flex-col md:flex-row">
        <div className="w-full bg-[url(/images/mobile/image-transform.jpg)] md:bg-[url(/images/desktop/image-transform.jpg)] bg-cover bg-no-repeat aspect-[11/9] md:w-[50%]"></div>
        <div className="bg-white flex flex-col py-16 px-7 gap-8 text-center md:text-left md:order-1 md:w-[50%] md:px-28 justify-center">
          <h2 className="font-fraunces font-[700] text-3xl text-black">
            Transform your brand
          </h2>
          <p className="text-cool_gray font-semibold">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <div className="flex flex-col items-center md:items-start relative">
            <button className="uppercase text-black font-fraunces tracking-wide z-10 peer">
              Learn More
            </button>
            <div className="rounded-full w-[140px] h-2.5 bg-gold-800 text-center -mt-2.5 relative md:-left-3 peer-hover:bg-gold"></div>
          </div>
        </div>
      </div>

      {/* Stand out */}

      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full bg-[url(/images/mobile/image-stand-out.jpg)] md:bg-[url(/images/desktop/image-stand-out.jpg)] bg-cover bg-no-repeat aspect-[11/9] md:w-[50%] md:order-2"></div>
        <div className="bg-white flex flex-col py-16 px-7 gap-8 text-center md:text-left md:order-1 md:w-[50%] md:px-28 justify-center">
          <h2 className="font-fraunces font-[700] text-3xl text-black">
            Stand out to the right audience
          </h2>
          <p className="text-cool_gray font-semibold">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <div className="flex flex-col items-center md:items-start">
            <button className="uppercase text-black font-fraunces tracking-wide z-10 peer">
              Learn More
            </button>
            <div className="rounded-full w-[140px] h-2.5 bg-bittersweet-800 peer-hover:bg-bittersweet text-center -mt-2.5 relative md:-left-3"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Graphic design */}
        <div className="flex flex-col w-full h-[600px] bg-[url(/images/mobile/image-graphic-design.jpg)] md:bg-[url(/images/desktop/image-graphic-design.jpg)] bg-cover justify-end py-16 gap-10 items-center text-brunswick_green px-6 md:w-[50%]">
          <h1 className="font-fraunces text-3xl font-bold">Graphic Design</h1>
          <p className="font-barlow text-center md:px-[28%]">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        {/* Photography */}
        <div className="flex flex-col w-full h-[600px] bg-[url(/images/mobile/image-photography.jpg)] md:bg-[url(/images/desktop/image-photography.jpg)] bg-cover justify-end py-16 gap-10 items-center text-brunswick_green px-6 md:w-[50%]">
          <h1 className="font-fraunces text-3xl font-bold">Photography</h1>
          <p className="font-barlow text-center md:px-[200px]">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>

      {/* Testimonials */}

      <div className="bg-white w-full">
        <h3 className="font-fraunces py-16 tracking-widest text-french_gray md:pt-40 md:pb-16 text-center">
          CLIENT TESTIMONIALS
        </h3>
        <div className="flex flex-col gap-16 items-center mb-16 md:flex-row justify-center md:max-w-[1100px] md:gap-10 md:mb-40 md:mx-auto">
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
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-2 grid-rows-2 md:flex w-full">
        <Image
          src="/images/mobile/image-gallery-milkbottles.jpg"
          width={360}
          height={450}
          alt=""
        />
        <Image
          src="/images/mobile/image-gallery-orange.jpg"
          width={360}
          height={450}
          alt=""
        />
        <Image
          src="/images/mobile/image-gallery-cone.jpg"
          width={360}
          height={450}
          alt=""
        />
        <Image
          src="/images/mobile/image-gallery-sugar-cubes.jpg"
          width={360}
          height={450}
          alt=""
        />
      </div>

      {/* <div className="grid-cols-4 grid-rows-1 hidden md:grid w-full">
        <Image
          src="/images/desktop/image-gallery-milkbottles.jpg"
          width={200}
          height={200}
          alt=""
        />
        <Image
          src="/images/desktop/image-gallery-orange.jpg"
          width={200}
          height={200}
          alt=""
        />
        <Image
          src="/images/desktop/image-gallery-cone.jpg"
          width={200}
          height={200}
          alt=""
        />
        <Image
          src="/images/desktop/image-gallery-sugarcubes.jpg"
          width={200}
          height={200}
          alt=""
        />
      </div> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}
