import React, { CSSProperties, useState } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

// Importing local assets from your assets folder
import bearKiss from "../../assets/bear-kiss-bear-kisses.gif";
import bearRoses from "../../assets/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";

export const ValentinePage = () => {
  const [noStyle, setNoStyle] = useState<CSSProperties>({
    position: "relative",
  });
  const [hasWon, setHasWon] = useState(false);

  const moveButton = () => {
    // Random position within 15% to 85% of the screen
    const randomTop = Math.floor(Math.random() * 70 + 15) + "%";
    const randomLeft = Math.floor(Math.random() * 70 + 15) + "%";

    setNoStyle({
      position: "fixed",
      top: randomTop,
      left: randomLeft,
      transition: "all 0.15s ease-out",
      zIndex: 999,
    });
  };

  if (hasWon) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-pink-100 relative overflow-hidden">
        {/* Floating hearts background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="text-pink-300 text-4xl animate-ping absolute top-10 left-1/4">
            ❤️
          </div>
          <div className="text-pink-300 text-2xl animate-bounce absolute bottom-20 right-1/3">
            💖
          </div>
          <div className="text-pink-300 text-3xl animate-pulse absolute top-1/2 left-10">
            💗
          </div>
        </div>

        <div className="text-center px-4 z-10">
          <h1 className="text-pink-600 text-5xl md:text-7xl font-bold animate-bounce mb-6">
            Yay! ❤️ I love you!!!!!!!!
          </h1>
          <div className="max-w-md mx-auto">
            <img
              src={bearKiss} // Using the local Kissing GIF here
              alt="Celebration"
              className="rounded-3xl shadow-2xl border-4 border-white mx-auto w-full h-80 object-cover"
            />
          </div>
          <p className="mt-8 text-pink-500 text-2xl font-serif font-semibold">
            Can't wait to see you! 🌹
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="valentine"
      className="min-h-screen flex items-center bg-pink-50 overflow-hidden"
    >
      <Container className="flex flex-col items-center text-center">
        <div className="mb-6">
          <img
            src={bearRoses} // Using the local Roses GIF here
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-white shadow-2xl mx-auto"
            alt="Valentine Bear with Roses"
          />
        </div>

        <Title>Will you be my Valentine? 🎀</Title>

        <div className="flex flex-row justify-center items-center gap-6 mt-10 w-full max-w-md">
          <button
            onClick={() => setHasWon(true)}
            className="px-12 py-4 bg-pink-500 hover:bg-pink-600 text-white font-black rounded-full text-2xl shadow-xl transform transition hover:scale-125 active:scale-90 z-20"
          >
            YES!
          </button>

          <button
            onMouseEnter={moveButton}
            onTouchStart={(e) => {
              e.preventDefault();
              moveButton();
            }}
            onClick={moveButton}
            style={noStyle}
            className="px-8 py-3 bg-gray-200 text-gray-600 font-bold rounded-full text-xl shadow-md whitespace-nowrap"
          >
            No
          </button>
        </div>
      </Container>
    </section>
  );
};
