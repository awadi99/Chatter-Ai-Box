import "/src/index.css";

const Animations = () => {
  const boxes = [
    { name: "fadein", className: "animate-fadein" },
    { name: "fadeout", className: "animate-fadeout" },
    { name: "fadeindown", className: "animate-fadeindown" },
    { name: "fadeinup", className: "animate-fadeinup" },
    { name: "fadeinleft", className: "animate-fadeinleft" },
    { name: "fadeinright", className: "animate-fadeinright" },
    { name: "fadeoutdown", className: "animate-fadeoutdown" },
    { name: "fadeoutup", className: "animate-fadeoutup" },
    { name: "fadeoutleft", className: "animate-fadeoutleft" },
    { name: "fadeoutright", className: "animate-fadeoutright" },
  ];

  const shadowColors = [
    "shadow-red-500",
    "shadow-blue-500",
    "shadow-green-500",
    "shadow-yellow-500",
    "shadow-pink-500",
    "shadow-purple-500",
    "shadow-orange-500",
    "shadow-cyan-500",
    "shadow-rose-500",
    "shadow-indigo-500",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative">
      
      {/* Title */}
      <div className="
          absolute text-center text-3xl font-semibold top-4 z-20
          bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 
          bg-[length:200%_200%] animate-gradient text-transparent bg-clip-text
      ">
        Chatter AI
      </div>

      {/* Animation Grid (More Space, Less Traffic) */}
      <div className="
        grid 
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5
        gap-8 sm:gap-10 md:gap-12 lg:gap-14
        p-6 md:p-8 
        justify-items-center 
        w-full max-w-5xl mx-auto
        pt-16
      ">
        {boxes.map((box, index) => {
          const shadowColor = shadowColors[index % shadowColors.length];

          return (
            <div
              key={index}
              className={`flex items-center justify-center 
              w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 
              ${box.className}`}
            >
              <img
                src="/img/icon/icon-removebg-preview.png"
                alt={box.name}
                className={`object-contain 
                w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 
                opacity-90 hover:opacity-100
                transition-all duration-700 
                rounded-2xl shadow-2xl ${shadowColor} animate-violet-spectrum`}
                onError={(e) => (e.target.src = "/img/avat4r.png")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Animations;
