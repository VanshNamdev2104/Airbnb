import { useEffect } from "react";
import gsap from "gsap";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const follower = document.querySelector(".cursor-follower");

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        duration: 0.2,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
      });
      gsap.to(follower, {
        duration: 0.6,
        x: e.clientX,
        y: e.clientY,
        ease: "power3.out",
      });
    };

    // hover grow effect
    const hoverables = document.querySelectorAll("button, a, img, .hover-target");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 2.2, background: "rgba(255,255,255,0.6)" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, background: "rgba(0,255,200,0.4)" });
      });
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", null);
        el.removeEventListener("mouseleave", null);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
      <div className="cursor-follower"></div>
    </>
  );
}
