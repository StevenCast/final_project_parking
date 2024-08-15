const Hero = () => {
  return (
    <section className="hero w-full h-[94vh] bg-hero-pattern bg-no-repeat bg-center bg-cover">
      <div className=" h-[94vh] bg-black bg-opacity-50 flex justify-center items-center">
        <div className="rounded-md p-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-md"></div>
          <h1
            className="relative z-10"
            style={{
              fontSize: "5rem",
              color: "transparent",
              WebkitTextStroke: "2px #ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
            }}
          >
            Poli Parking
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
