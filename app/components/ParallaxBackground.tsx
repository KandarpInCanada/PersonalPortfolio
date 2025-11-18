"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ParallaxBackground = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const svg = svgRef.current;
    const scrollElement = scrollRef.current;
    if (!svg || !scrollElement) return;

    const ctx = gsap.context(() => {
      const speed = 100;
      const height = svg.getBBox().height || 600;

      const mm = gsap.matchMedia();
      mm.add("(max-width: 1922px)", () => {
        gsap.set(["#cloudStart-L", "#cloudStart-R"], { x: 10, opacity: 1 });
      });

      gsap.set("#h2-1", { opacity: 0 });
      gsap.set("#bg_grad", { attr: { cy: "-50" } });
      gsap.set(["#dinoL", "#dinoR"], { y: 80 });
      gsap.set("#dinoL", { x: -10 });

      const scene1 = gsap.timeline({
        scrollTrigger: {
          trigger: scrollElement,
          start: "top top",
          end: "45% 100%",
          scrub: 3,
        },
      });

      scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
      scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
      scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
      scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
      scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
      scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
      scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
      scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
      scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);
      scene1.to("#cloudsBig-L", { y: 4.5 * speed, x: -0.2 * speed }, 0);
      scene1.to("#cloudsBig-R", { y: 4.5 * speed, x: -0.2 * speed }, 0);
      scene1.to("#cloudStart-L", { x: -300 }, 0);
      scene1.to("#cloudStart-R", { x: 300 }, 0);
      scene1.to("#info", { y: 8 * speed }, 0);

      gsap.fromTo(
        "#bird",
        { opacity: 1 },
        {
          y: -250,
          x: 800,
          ease: "power2.out",
          scrollTrigger: {
            trigger: scrollElement,
            start: "15% top",
            end: "60% 100%",
            scrub: 4,
            onEnter: () => gsap.to("#bird", { scaleX: 1, rotation: 0 }),
            onLeave: () => gsap.to("#bird", { scaleX: -1, rotation: -15 }),
          },
        },
      );

      const clouds = gsap.timeline({
        scrollTrigger: {
          trigger: scrollElement,
          start: "top top",
          end: "70% 100%",
          scrub: 1,
        },
      });

      clouds.to("#cloud1", { x: 500 }, 0);
      clouds.to("#cloud2", { x: 1000 }, 0);
      clouds.to("#cloud3", { x: -1000 }, 0);
      clouds.to("#cloud4", { x: -700, y: 25 }, 0);

      const sun = gsap.timeline({
        scrollTrigger: {
          trigger: scrollElement,
          start: "1% top",
          end: "2150 100%",
          scrub: 2,
        },
      });

      sun.fromTo("#bg_grad", { attr: { cy: "-50" } }, { attr: { cy: "330" } }, 0);
      sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0);
      sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0);
      sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0);
      sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0);
      sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

      const scene2 = gsap.timeline({
        scrollTrigger: {
          trigger: scrollElement,
          start: "15% top",
          end: "40% 100%",
          scrub: 3,
        },
      });

      scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
      scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
      scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
      scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
      scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
      scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

      gsap.set("#bats", { transformOrigin: "50% 50%" });
      gsap.fromTo(
        "#bats",
        { opacity: 1, y: 400, scale: 0 },
        {
          y: 20,
          scale: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scrollElement,
            start: "40% top",
            end: "70% 100%",
            scrub: 3,
            onEnter: () => {
              gsap.utils.toArray<SVGPathElement>("#bats path").forEach((item, i) => {
                gsap.to(item, {
                  scaleX: 0.5,
                  yoyo: true,
                  repeat: 9,
                  transformOrigin: "50% 50%",
                  duration: 0.15,
                  delay: 0.7 + i / 10,
                });
              });
              gsap.set("#bats", { opacity: 1 });
            },
          },
        },
      );

      const sun2 = gsap.timeline({
        scrollTrigger: {
          trigger: scrollElement,
          start: "2000 top",
          end: "5000 100%",
          scrub: 2,
        },
      });

      sun2.to("#sun", { attr: { offset: "1.4" } }, 0);
      sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
      sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
      sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
      sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
      sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

      gsap.set("#scene3", { y: height - 40, visibility: "visible" });
      const sceneTransition = gsap.timeline({
        scrollTrigger: {
          trigger: scrollElement,
          start: "60% top",
          end: "bottom 100%",
          scrub: 3,
        },
      });

      sceneTransition.to("#h2-1", { y: -height - 100, scale: 1.5, transformOrigin: "50% 50%" }, 0);
      sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0);
      sceneTransition.to("#bg2", { y: 0 }, 0);

      const scene3 = gsap.timeline({
        scrollTrigger: {
          trigger: scrollElement,
          start: "70% 50%",
          end: "bottom 100%",
          scrub: 3,
        },
      });

      scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
      scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
      scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
      scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
      scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);
      scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);
      scene3.fromTo("#arrow2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25);
      scene3.fromTo("#text2", { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);
      scene3.to("footer", { opacity: 1 }, 0.3);
      scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
      scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

      gsap.set("#fstar", { y: -400 });
      const fstarTL = gsap.timeline({
        scrollTrigger: {
          trigger: scrollElement,
          start: "4200 top",
          end: "6000 bottom",
          scrub: 2,
          onEnter: () => gsap.set("#fstar", { opacity: 1 }),
          onLeave: () => gsap.set("#fstar", { opacity: 0 }),
        },
      });
      fstarTL.to("#fstar", { x: -700, y: -250, ease: "power2.out" }, 0);

      gsap.fromTo("#stars path", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, yoyo: true, stagger: { each: 0.15, repeatDelay: 1 } });

      const resetScroll = () => window.scrollTo(0, 0);
      window.addEventListener("beforeunload", resetScroll);

      return () => {
        window.removeEventListener("beforeunload", resetScroll);
        mm.revert();
      };
    }, wrapperRef);

    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="parallax-wrapper pointer-events-none" aria-hidden="true">
      <svg ref={svgRef} className="parallax-svg" viewBox="0 0 750 500" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="grad1" x1="-154.32" y1="263.27" x2="-154.32" y2="374.3" gradientTransform="matrix(-1 0 0 1.36 231.36 -100.14)" gradientUnits="userSpaceOnUse">
            <stop offset="0.07" stopColor="#9c536b" />
            <stop offset="0.98" stopColor="#d98981" />
          </linearGradient>
          <radialGradient id="bg_grad" cx="375" cy="-30" r="318.69" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stopColor="#F5C54E" id="sun" />
            <stop offset="0.1" stopColor="#FFDBA6" />
            <stop offset="0.0" stopColor="#F7BB93" />
            <stop offset="0.0" stopColor="#F2995E" />
            <stop offset="0.0" stopColor="#f07560" />
            <stop offset="0.8" stopColor="#FFAB93" />
          </radialGradient>
          <linearGradient id="grad2" x1="242.5" y1="356.25" x2="750" y2="356.25" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fbbd93" />
            <stop offset="0.98" stopColor="#c46976" />
          </linearGradient>
          <linearGradient id="grad3" x1="467.26" y1="500" x2="467.26" y2="225.47" gradientUnits="userSpaceOnUse">
            <stop offset="0.01" stopColor="#ffb8bd" />
            <stop offset="1" stopColor="#914d64" />
          </linearGradient>
          <linearGradient id="grad4" x1="216.56" y1="227.64" x2="191.14" y2="600.82" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#70375a" />
            <stop offset="0.96" stopColor="#8a6e95" />
          </linearGradient>
          <linearGradient id="grad5" x1="1" y1="413.12" x2="340.58" y2="413.12" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#433d6c" />
            <stop offset="1" stopColor="#392e54" />
          </linearGradient>
          <linearGradient id="grad6" x1="454.13" y1="295.96" x2="454.13" y2="498.93" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2b2850" />
            <stop offset="0.99" stopColor="#563a6a" />
          </linearGradient>
          <linearGradient id="grad7" x1="434.38" y1="391.96" x2="474.27" y2="516.33" gradientUnits="userSpaceOnUse">
            <stop offset="0.3" stopColor="#1c1b38" />
            <stop offset="0.38" stopColor="#201e3e" />
            <stop offset="0.9" stopColor="#383263" />
          </linearGradient>
          <linearGradient id="grad8" x1="259.18" y1="335.54" x2="213.65" y2="500.39" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0e0a1a" />
            <stop offset="0.3" stopColor="#100d1f" />
            <stop offset="0.64" stopColor="#17142c" />
            <stop offset="0.95" stopColor="#201f3f" />
          </linearGradient>
          <linearGradient id="grad9" x1="508.16" y1="321.39" x2="726.97" y2="623.69" gradientUnits="userSpaceOnUse">
            <stop offset="0.01" stopColor="#120e22" />
            <stop offset="1" stopColor="#221d42" />
          </linearGradient>
          <linearGradient id="lg4" x1="641.98" y1="274.9" x2="638.02" y2="334.36" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2c2c50" />
            <stop offset="1" stopColor="#434375" />
          </linearGradient>
          <linearGradient id="lg5" x1="172.37" y1="286.02" x2="171.33" y2="343.08" xlinkHref="#lg4" />
          <linearGradient id="lg6" x1="505.71" y1="261.55" x2="504.61" y2="322.08" xlinkHref="#lg4" />
          <linearGradient id="lg7" x1="301.32" y1="260.99" x2="295.66" y2="345.9" xlinkHref="#lg4" />
          <linearGradient id="lg8" x1="375.59" y1="381.01" x2="373.3" y2="507.08" xlinkHref="#lg4" />
          <radialGradient id="bg2-grad" cx="365.22" cy="500" r="631.74" gradientTransform="translate(750 552.6) rotate(180) scale(1 1.11)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="hsla(349, 94%, 75%, 1)" />
            <stop offset="0.12" stopColor="hsla(342, 49%, 62%, 1)" />
            <stop offset="0.18" stopColor="hsla(328, 37%, 56%, 1)" />
            <stop offset="0.33" stopColor="hsla(281, 33%, 48%, 1)" />
            <stop offset="0.41" stopColor="hsla(268, 38%, 48%, 1)" />
            <stop offset="0.45" stopColor="hsla(266, 38%, 43%, 1)" />
            <stop offset="0.55" stopColor="hsla(261, 37%, 32%, 1)" />
            <stop offset="0.64" stopColor="hsla(253, 36%, 24%, 1)" />
            <stop offset="0.72" stopColor="hsla(244, 33%, 19%, 1)" />
            <stop offset="0.78" stopColor="hsla(240, 33%, 17%, 1)" />
          </radialGradient>
          <radialGradient id="fstar-grad" cx="1362.39" cy="-53.7" r="39.39" gradientTransform="matrix(0.89 -0.45 -0.45 -0.89 -473.7 640.57)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff" />
            <stop offset="0.06" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="0.12" stopOpacity="0.62" />
            <stop offset="0.19" stopOpacity="0.45" />
            <stop offset="0.26" stopOpacity="0.31" />
            <stop offset="0.33" stopOpacity="0.2" />
            <stop offset="0.41" stopOpacity="0.11" />
            <stop offset="0.49" stopOpacity="0.05" />
            <stop offset="0.59" stopOpacity="0.01" />
            <stop offset="0.72" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="linear-gradient" x1="472" y1="461.56" x2="872.58" y2="461.56" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fd75a8" />
            <stop offset="1" stopColor="#5a2d81" />
          </linearGradient>
          <linearGradient id="linear-gradient-2" x1="214.61" y1="508.49" x2="166.09" y2="361.12" xlinkHref="#linear-gradient" />
          <linearGradient id="linear-gradient-3" x1="57.65" y1="508.01" x2="448.08" y2="508.01" xlinkHref="#linear-gradient" />
          <linearGradient id="linear-gradient-4" x1="193.48" y1="508.3" x2="761.05" y2="508.3" xlinkHref="#linear-gradient" />
          <symbol id="tree" viewBox="0 0 40 80">
            <path
              d="M20 0c-4 10-8 18-14 26 4 0 8 0 10 2-6 4-10 10-14 16 4-2 8-2 10 0-6 4-10 10-12 16a26 26 0 0 1 10-2c-8 8-10 14-10 14 6-2 10-2 12 2v6h8v-6c2-4 6-4 12-2 0 0-2-6-10-14a26 26 0 0 1 10 2c-2-6-6-12-12-16 2-2 6-2 10 0-4-6-8-12-14-16 2-2 6-2 10-2-6-8-10-16-14-26Z"
              fill="currentColor"
            />
          </symbol>
        </defs>

        <rect id="bg" width="750" height="500" opacity="0.9" fill="url(#bg_grad)" />

        {/* drifting clouds - detailed silhouettes */}
        <g id="clouds" fill="#fefefe">
          <path
            id="cloud4"
            d="M440 120c18-22 58-12 72 6 12-14 34-20 52-12 3-16 22-24 40-18 8-16 36-20 48-2 6-20 32-30 54-18 24-22 70-4 60 32 22-12 54 4 58 28 10-6 32 0 32 10 0 16-50 20-90 12-42-8-70-10-96-4-26 6-60 22-90 22-32 0-70-14-100-16-16 0-32 4-40-2-8-6-10-16 0-26Z"
            opacity="0.75"
          />
          <path
            id="cloud3"
            d="M120 150c-18-28-54-30-84-12-32-16-70-22-96 8 2-28-42-44-54-12-30-42-102-40-120,8-6 14-26 16-32 0-14-34-72-58-90-8-10-10-30-14-42 4a56 56 0 0 0-42 8c-34-10-68 12-74 44-8 30 12 50 38 56 26 8 58 0 86-6 90-22 142-22 194-12 58 10 116 34 170 26 22-4 46-16 68-14 22 2 44 14 68 12 32-4 58-32 32-60Z"
            opacity="0.6"
            transform="translate(560 40) scale(0.9)"
          />
          <path
            id="cloud2"
            d="M200 110c22-12 54-14 78-10 6-12 30-14 40-4 24-20 72-6 94 8 22-12 64-18 80 0 14-2 44-8 50 10a60 60 0 0 1 44 8c20-8 46-8 64 8s10 46-6 54c-36 18-90-6-132-10-42-6-90 2-132 2-40 0-82-6-120-8-32-2-64 0-96 6-30 6-64 16-82 6-12-6-16-22-6-32Z"
            opacity="0.7"
            transform="translate(-520 10) scale(1.05)"
          />
          <path
            id="cloud1"
            d="M160 180c-18-20-50-24-74-16-16-18-50-28-68-8-26-20-78-42-96-6-12-8-32-6-42 6-18-40-92-60-108-6-14-14-40-4-52 12-22-4-44-14-64 8-12-4-32-8-46 12-6 12 0 30 14 38 24 12 56 6 82 6 32 2 66 4 98 4 44 0 94 0 138 4 46 4 92 10 134 10 34 0 60-10 86-18 20-6 44-12 60-8 10 2 18 12 30 12 16 0 26-18 14-34Z"
            opacity="0.65"
            transform="translate(-540 50) scale(1.12)"
          />
        </g>

        {/* starter clouds for subtle motion */}
        <g id="cloudStart-L" fill="#ffffff" opacity="0.75">
          <path d="M90 60c-18 0-32 8-38 18-30-8-60 8-54 22 6 15 31 16 48 10 11 6 28 6 40 0 18 9 54 7 66-6 14-14-4-36-28-30-7-9-22-14-34-14Z" />
        </g>
        <g id="cloudStart-R" fill="#ffffff" opacity="0.75">
          <path d="M640 70c-16 0-28 6-34 14-22-6-48 8-42 22 6 14 30 15 44 8 10 5 25 5 36 0 16 8 46 6 56-6 12-12-4-32-24-26-6-8-20-12-32-12Z" />
        </g>

        {/* big clouds for scene 1 parallax */}
        <g id="cloudsBig-L" fill="#ffffff" opacity="0.35">
          <path d="M-40 240c-30 6-46 22-48 38-3 24 22 44 72 44 40 0 98-16 144-10 50 7 86-6 94-26 10-24-22-44-70-40-22-20-64-32-108-26-30 4-60 10-84 20Z" />
        </g>
        <g id="cloudsBig-R" fill="#ffffff" opacity="0.35">
          <path d="M430 230c-38 6-62 24-64 42-4 28 30 52 98 52 56 0 122-20 180-12 58 8 96-8 104-32 10-28-24-52-82-46-24-22-72-36-120-30-40 6-76 12-116 26Z" />
        </g>

        {/* scene 2 assets */}
        <g id="scene2">
          <g id="bats" opacity="0" fill="#112129">
            <path d="M470 180c8-8 22-6 30 4 10-8 22-8 30 0-10 4-20 16-30 16s-20-10-30-20Z" />
            <path d="M540 210c6-6 16-6 24 0 0 0-10 10-24 10s-24-10-24-10c6-6 16-6 24 0Z" />
            <path d="M500 150c8-6 18-6 26 0 8-6 18-6 26 0-10 6-18 16-26 16s-16-8-26-16Z" />
            <path d="M560 250c8-6 18-6 26 0 0 0-10 10-26 10s-26-10-26-10c8-6 18-6 26 0Z" />
            <path d="M610 230c8-6 18-6 26 0 0 0-10 10-26 10s-26-10-26-10c8-6 18-6 26 0Z" />
          </g>
          <g id="hills2">
            <path id="h2-6" d="M0 420 C140 380 260 360 380 380 C520 410 640 400 750 380 L750 500 L0 500Z" fill="url(#lg4)" />
            <path id="h2-5" d="M0 440 C140 400 280 390 420 410 C560 430 660 420 750 400 L750 500 L0 500Z" fill="url(#lg5)" />
            <path id="h2-4" d="M0 460 C140 420 300 420 460 440 C600 460 690 450 750 430 L750 500 L0 500Z" fill="url(#lg6)" />
            <path id="h2-3" d="M0 480 C160 440 320 440 500 460 C640 480 710 470 750 450 L750 500 L0 500Z" fill="url(#lg7)" />
            <path id="h2-2" d="M0 500 C180 460 360 470 540 480 C660 488 720 480 750 470 L750 500 L0 500Z" fill="url(#lg8)" />
            <path id="h2-1" d="M0 520 C200 480 380 490 560 500 C680 505 730 500 750 490 L750 520 L0 520Z" fill="#1d1d3a" />
          </g>
        </g>

        {/* scene 3 */}
        <g id="scene3" style={{ visibility: "hidden" }}>
          <rect id="bg2" y="-59.8" width="750" height="612.4" transform="translate(750 492.8) rotate(180)" fill="url(#bg2-grad)" />
          <g id="fstar">
            <circle cx="620" cy="80" r="25" fill="url(#fstar-grad)" />
          </g>
          <g id="stars" fill="#fff" opacity="0">
            <circle cx="120" cy="60" r="1.2" />
            <circle cx="180" cy="100" r="1.2" />
            <circle cx="240" cy="50" r="1.2" />
            <circle cx="300" cy="90" r="1.2" />
            <circle cx="360" cy="40" r="1.2" />
            <circle cx="420" cy="80" r="1.2" />
            <circle cx="480" cy="30" r="1.2" />
            <circle cx="540" cy="70" r="1.2" />
            <circle cx="600" cy="50" r="1.2" />
            <circle cx="660" cy="90" r="1.2" />
            <circle cx="720" cy="60" r="1.2" />
          </g>
          <g id="h3">
            <path id="h3-1" d="M0 520 C160 470 300 470 440 500 C580 530 680 520 750 500 L750 600 0 600Z" fill="url(#linear-gradient-3)" opacity="0.9" />
            <path id="h3-2" d="M0 510 C180 460 340 460 500 490 C620 520 700 510 750 490 L750 600 0 600Z" fill="url(#linear-gradient)" opacity="0.8" />
            <path id="h3-3" d="M0 500 C200 450 380 450 560 480 C660 500 720 490 750 470 L750 600 0 600Z" fill="url(#linear-gradient-4)" opacity="0.7" />
            <path id="h3-4" d="M0 490 C220 440 420 440 600 470 C700 490 740 480 750 460 L750 600 0 600Z" fill="url(#linear-gradient-2)" opacity="0.6" />
            <path id="h3-5" d="M0 480 C240 430 460 430 640 460 C720 470 750 460 750 450 L750 600 0 600Z" fill="#201631" opacity="0.6" />
          </g>
        </g>

        {/* trail text for scene 3 */}
        <g id="arrow2" opacity="0">
          <polygon points="360 100 375 120 390 100" fill="#fff" />
        </g>
        <g id="text2" opacity="0" fill="#fff" fontSize="12" textAnchor="middle">
          <text x="375" y="140">Scroll back</text>
        </g>

        {/* hills - scene1 foreground */}
        <g id="hills1">
          <path id="h1-9" d="M0 330 C120 300 220 290 320 310 C420 330 520 300 620 310 C700 320 750 300 750 300 L750 500 L0 500Z" fill="url(#grad1)" />
          <path id="h1-8" d="M0 350 C140 320 260 310 380 330 C500 350 600 320 700 330 C740 334 750 330 750 330 L750 500 L0 500Z" fill="url(#grad2)" />
          <path id="h1-7" d="M0 360 C160 330 300 320 440 340 C560 360 660 340 740 340 L750 500 L0 500Z" fill="url(#grad3)" />
          <path id="h1-6" d="M0 380 C150 345 260 340 380 360 C520 390 640 360 750 350 L750 500 L0 500Z" fill="url(#grad4)" />
          <path id="h1-5" d="M0 400 C160 365 300 360 440 380 C560 395 660 380 750 370 L750 500 L0 500Z" fill="url(#grad5)" />
          <path id="h1-4" d="M0 420 C170 380 310 380 460 400 C590 420 690 400 750 390 L750 500 L0 500Z" fill="url(#grad6)" />
          <path id="h1-3" d="M0 430 C190 395 340 400 500 420 C630 435 710 420 750 410 L750 500 L0 500Z" fill="url(#grad7)" />
          <path id="h1-2" d="M0 440 C210 410 370 420 540 430 C660 440 720 430 750 420 L750 500 L0 500Z" fill="url(#grad8)" />
          <path id="h1-1" d="M0 460 C230 430 400 440 590 450 C680 455 730 450 750 440 L750 500 L0 500Z" fill="url(#grad9)" />
        </g>

        {/* pine trees for depth */}
        <g id="trees-back" fill="#0f0d24" opacity="0.65">
          <use href="#tree" x="40" y="360" width="40" height="80" />
          <use href="#tree" x="120" y="370" width="44" height="88" />
          <use href="#tree" x="200" y="360" width="36" height="76" />
          <use href="#tree" x="260" y="380" width="42" height="84" />
          <use href="#tree" x="340" y="370" width="40" height="82" />
          <use href="#tree" x="420" y="380" width="46" height="90" />
          <use href="#tree" x="500" y="380" width="40" height="82" />
          <use href="#tree" x="580" y="370" width="44" height="88" />
          <use href="#tree" x="660" y="380" width="40" height="82" />
        </g>
        <g id="trees-front" fill="#0a0918">
          <use href="#tree" x="10" y="400" width="54" height="110" />
          <use href="#tree" x="90" y="410" width="60" height="120" />
          <use href="#tree" x="170" y="405" width="56" height="116" />
          <use href="#tree" x="250" y="420" width="64" height="128" />
          <use href="#tree" x="330" y="415" width="58" height="118" />
          <use href="#tree" x="420" y="425" width="66" height="132" />
          <use href="#tree" x="510" y="415" width="58" height="118" />
          <use href="#tree" x="600" y="420" width="64" height="128" />
          <use href="#tree" x="690" y="415" width="58" height="118" />
        </g>

        {/* info label */}
        <g id="info" fill="#fff" stroke="#231f20" strokeWidth="0.5" strokeMiterlimit="10">
          <polygon id="arrow" points="353.93 368.91 356.06 366.79 374.26 385 392.47 366.79 394.59 368.91 374.26 389.24 353.93 368.91" />
          <text id="text" x="374" y="362" fontSize="12" textAnchor="middle" fill="#fff" stroke="none">
            Scroll
          </text>
        </g>

        {/* bird */}
        <path
          id="bird"
          opacity="0"
          d="M110 420c-12 10-40-4-50 2 6-6 12-10 20-10s12 4 18 4c10 0 6-10-4-12 8-6 18-4 26 4s4 12-10 12Z"
          fill="#16122b"
        />

        {/* tiny dinos for fun */}
        <circle id="dinoL" cx="80" cy="470" r="8" fill="#6ddccf" />
        <circle id="dinoR" cx="660" cy="470" r="8" fill="#6ddccf" />
      </svg>
      <div ref={scrollRef} className="parallax-scroll-element" />
    </div>
  );
};

export default ParallaxBackground;
