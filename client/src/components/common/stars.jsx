import React, { useEffect, useRef } from "react";

export default function StarCanvas({count}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = count;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 0.5 + 0.5,
          dx: (Math.random() - 0.5) * 0.6, // slow drift
          dy: (Math.random() - 0.5) * 0.6,
          opacity: Math.random(),
          opacityChange: (Math.random() - 0.5) * 0.02, // blinking
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update opacity
        star.opacity += star.opacityChange;
        if (star.opacity <= 0 || star.opacity >= 1) {
          star.opacityChange = -star.opacityChange;
        }

        // Move star
        star.x += star.dx;
        star.y += star.dy;

        // Bounce off edges
        if (star.x < 0 || star.x > canvas.width) {
          star.dx = -star.dx;
        }
        if (star.y < 0 || star.y > canvas.height) {
          star.dy = -star.dy;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
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
