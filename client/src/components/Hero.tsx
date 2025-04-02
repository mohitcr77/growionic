import { Button } from "./ui/button";
// import { HeroCards } from "./HeroCards";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Growionic
            </span>{" "}
            Empowering
          </h1>{" "}
          Your{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Career
            </span>{" "}
            Potential
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Empowering Your Potential, One Step at a Time.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>
        </div>
      </div>

        {/* Right container */}
      <div className="z-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-sky-300 p-18 rounded shadow">Info 1</div>
          <div className="bg-sky-400 p-18 rounded shadow">Info 2</div>
          <div className="bg-purple-500 p-18 rounded shadow">Info 3</div>
          <div className="bg-purple-600 p-18 rounded shadow">Info 4</div>
        </div>
      </div>
    </section>
  );
};