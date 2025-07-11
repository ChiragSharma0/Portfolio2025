import React from "react";
import React, { useEffect, useRef } from "react";

export default function MeteorCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let meteors = [];
    const numMeteors = 10;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      // Re-initialize meteors
      meteors = [];
      for (let i = 0; i < numMeteors; i++) {
        const speed = Math.random() * 1.5;
        meteors.push({
          x: -100 +  Math.random() * canvas.width/2 ,
          y: -100 + Math.random() * canvas.height/2 ,
          speedX: 0.2 + speed,
          speedY: 0.2 + speed,
          length: 15 + Math.random() * 20,
          opacity: 0.4 + Math.random() * 0.6,
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      meteors.forEach((meteor) => {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - meteor.speedX * meteor.length,
          meteor.y - meteor.speedY * meteor.length
        );
        gradient.addColorStop(0, `rgba(255,255,255,${meteor.opacity})`);
        gradient.addColorStop(1, "rgba(7, 89, 241, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
          meteor.x - meteor.speedX * meteor.length,
          meteor.y - meteor.speedY * meteor.length
        );
        ctx.stroke();

        meteor.x += meteor.speedX;
        meteor.y += meteor.speedY;

        // Reset when out of bounds
if (meteor.y > canvas.height + 100 || meteor.x > canvas.width + 100) {
  // Randomly pick whether to respawn along top or left
  const fromTop = Math.random() < 0.5;
  if (fromTop) {
    meteor.x = Math.random() * canvas.width;
    meteor.y = -50;
  } else {
    meteor.x = -50;
    meteor.y = Math.random() * canvas.height;
  }
}

      });

      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
 