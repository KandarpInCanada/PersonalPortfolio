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
        </defs>

        <rect id="bg" width="750" height="500" opacity="0.85" fill="url(#bg_grad)" />

        {/* drifting clouds - static positions adjusted by GSAP */}
        <g id="clouds" fill="#fefefe">
          <ellipse id="cloud4" cx="560" cy="130" rx="120" ry="45" opacity="0.7" />
          <ellipse id="cloud3" cx="320" cy="150" rx="150" ry="55" opacity="0.65" />
          <ellipse id="cloud2" cx="180" cy="90" rx="110" ry="45" opacity="0.6" />
          <ellipse id="cloud1" cx="60" cy="140" rx="140" ry="50" opacity="0.55" />
        </g>

        {/* starter clouds for subtle motion */}
        <g id="cloudStart-L" fill="#ffffff" opacity="0.6">
          <ellipse cx="90" cy="70" rx="80" ry="35" />
          <ellipse cx="150" cy="80" rx="60" ry="28" />
        </g>
        <g id="cloudStart-R" fill="#ffffff" opacity="0.6">
          <ellipse cx="640" cy="60" rx="80" ry="35" />
          <ellipse cx="700" cy="80" rx="55" ry="26" />
        </g>

        {/* big clouds for scene 1 parallax */}
        <g id="cloudsBig-L" fill="#ffffff" opacity="0.35">
          <ellipse cx="120" cy="200" rx="260" ry="80" />
        </g>
        <g id="cloudsBig-R" fill="#ffffff" opacity="0.35">
          <ellipse cx="640" cy="210" rx="260" ry="90" />
        </g>

        {/* scene 2 assets */}
        <g id="scene2">
          <g id="bats" opacity="0">
            <path d="M20 20c10-8 22-8 32 0 10-8 22-8 32 0-12 6-20 16-32 16S32 26 20 20Z" fill="#112129" />
            <path d="M120 35c8-6 18-6 26 0 0 0-10 10-26 10s-26-10-26-10c8-6 18-6 26 0Z" fill="#112129" />
            <path d="M80 10c6-4 12-4 18 0 6-4 12-4 18 0-7 5-12 12-18 12S87 15 80 10Z" fill="#112129" />
          </g>
          <g id="hills2">
            <path id="h2-6" d="M0 410 Q120 360 240 380 T480 380 T750 360 L750 500 H0Z" fill="url(#lg4)" />
            <path id="h2-5" d="M0 430 Q150 390 300 430 T600 430 T750 420 L750 500 H0Z" fill="url(#lg5)" />
            <path id="h2-4" d="M0 450 Q180 410 360 450 T750 450 L750 500 H0Z" fill="url(#lg6)" />
            <path id="h2-3" d="M0 470 Q200 440 400 470 T750 470 L750 500 H0Z" fill="url(#lg7)" />
            <path id="h2-2" d="M0 490 Q220 460 440 490 T750 490 L750 500 H0Z" fill="url(#lg8)" />
            <path id="h2-1" d="M0 500 Q240 470 480 500 T750 500 Z" fill="#1d1d3a" />
          </g>
        </g>

        {/* scene 3 */}
        <g id="scene3" style={{ visibility: "hidden" }}>
          <rect id="bg2" y="-59.8" width="750" height="612.4" transform="translate(750 492.8) rotate(180)" fill="url(#bg2-grad)" />
          <g id="fstar">
            <circle cx="620" cy="80" r="25" fill="url(#fstar-grad)" />
          </g>
          <g id="stars" fill="#fff" opacity="0">
            <circle cx="90" cy="60" r="1.5" />
            <circle cx="180" cy="120" r="1.5" />
            <circle cx="260" cy="40" r="1.5" />
            <circle cx="340" cy="90" r="1.5" />
            <circle cx="430" cy="50" r="1.5" />
            <circle cx="520" cy="110" r="1.5" />
            <circle cx="610" cy="70" r="1.5" />
          </g>
          <g id="h3">
            <path id="h3-1" d="M0 520 Q200 470 400 520 T750 520 L750 600 0 600Z" fill="url(#linear-gradient-3)" opacity="0.8" />
            <path id="h3-2" d="M0 510 Q220 460 440 510 T750 510 L750 600 0 600Z" fill="url(#linear-gradient)" opacity="0.7" />
            <path id="h3-3" d="M0 500 Q240 450 480 500 T750 500 L750 600 0 600Z" fill="url(#linear-gradient-4)" opacity="0.6" />
            <path id="h3-4" d="M0 490 Q260 440 520 490 T750 490 L750 600 0 600Z" fill="url(#linear-gradient-2)" opacity="0.5" />
            <path id="h3-5" d="M0 480 Q280 430 560 480 T750 480 L750 600 0 600Z" fill="#25193f" opacity="0.4" />
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
          <path id="h1-9" d="M0 330 Q180 300 360 330 T750 320 L750 500 H0Z" fill="url(#grad1)" />
          <path id="h1-8" d="M0 350 Q200 320 400 350 T750 330 L750 500 H0Z" fill="url(#grad2)" />
          <path id="h1-7" d="M0 360 Q220 330 440 360 T750 340 L750 500 H0Z" fill="url(#grad3)" />
          <path id="h1-6" d="M0 380 Q200 350 400 380 T750 360 L750 500 H0Z" fill="url(#grad4)" />
          <path id="h1-5" d="M0 400 Q220 370 440 400 T750 380 L750 500 H0Z" fill="url(#grad5)" />
          <path id="h1-4" d="M0 420 Q240 390 480 420 T750 400 L750 500 H0Z" fill="url(#grad6)" />
          <path id="h1-3" d="M0 430 Q260 410 520 430 T750 410 L750 500 H0Z" fill="url(#grad7)" />
          <path id="h1-2" d="M0 440 Q280 420 560 440 T750 430 L750 500 H0Z" fill="url(#grad8)" />
          <path id="h1-1" d="M0 460 Q300 440 600 460 T750 450 L750 500 H0Z" fill="url(#grad9)" />
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
