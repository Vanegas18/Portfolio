import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function CreativeHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let devicePixelRatio;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;

      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 5 + 2;
        this.density = Math.random() * 30 + 1;
        this.distance = 0;

        // Create a gradient from light blue to cyan
        const hue = Math.random() * 60 + 180; // 180-240 range for blues and cyans
        this.color = `hsl(${hue}, 60%, 75%)`;
      }

      update() {
        // Calculate distance between mouse and particle
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        this.distance = Math.sqrt(dx * dx + dy * dy);

        const forceDirectionX = dx / this.distance;
        const forceDirectionY = dy / this.distance;

        const maxDistance = 100;
        const force = (maxDistance - this.distance) / maxDistance;

        if (this.distance < maxDistance) {
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;

          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Create particle grid
    const particlesArray = [];
    const gridSize = 25; // Reducido ligeramente para mejor densidad

    function init() {
      particlesArray.length = 0;

      const canvasWidth = canvas.width / devicePixelRatio;
      const canvasHeight = canvas.height / devicePixelRatio;

      const numX = Math.floor(canvasWidth / gridSize);
      const numY = Math.floor(canvasHeight / gridSize);

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2;
          const posY = y * gridSize + gridSize / 2;
          particlesArray.push(new Particle(posX, posY));
        }
      }
    }

    init();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse following
      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      // Draw connections
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        // Draw connections
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 35) {
            // Aumentado ligeramente para más conexiones
            ctx.beginPath();
            ctx.strokeStyle = `rgba(120, 180, 255, ${0.4 - distance / 150})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions();
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="w-full h-[350px] md:h-[450px] lg:h-[400px] xl:h-[500px] relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50/30 to-cyan-100/40 shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer"
        style={{ display: "block" }}
      />

      {/* Optional overlay for better visual effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-200/20 pointer-events-none" />
    </motion.div>
  );
}
