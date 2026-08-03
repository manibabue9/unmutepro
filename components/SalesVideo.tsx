"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  Play,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";

const videoSource = "/videos/unmute-pro-45-second-sales-video-gen-z.mp4";

const videoHighlights = [
  "Confidence-focused learning",
  "Interview and placement support",
  "Campus communication programmes",
];

export default function SalesVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    const video = videoRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      video?.pause();
      trigger?.focus();
    };
  }, [isOpen]);

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsOpen(false);
  };

  return (
    <>
      <section
        id="video"
        className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#00D97E]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#062B5C]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-[#062B5C] px-6 py-9 shadow-2xl sm:px-10 sm:py-12 lg:grid-cols-[1.08fr_.92fr] lg:px-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00D97E]/30 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#00D97E]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Meet Unmute Pro
            </span>

            <h2 className="mt-6 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              See confidence come to life in 45 seconds.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
              Discover how practical speaking, mentor feedback and real career
              scenarios help learners move from hesitation to clear expression.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {videoHighlights.map((highlight) => (
                <p
                  key={highlight}
                  className="flex items-center gap-2 text-sm font-semibold text-blue-100"
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-[#00D97E]"
                    aria-hidden="true"
                  />
                  {highlight}
                </p>
              ))}
            </div>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsOpen(true)}
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#00D97E] px-6 py-4 font-extrabold text-[#062B5C] shadow-lg shadow-emerald-950/20 transition hover:-translate-y-1 hover:bg-[#00C970]"
              aria-haspopup="dialog"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#062B5C] text-white">
                <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true" />
              </span>
              Watch the 45-second story
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative mx-auto w-full max-w-[350px] overflow-hidden rounded-[2rem] border-[8px] border-white/10 bg-[#031A38] text-left shadow-2xl transition hover:-translate-y-1 hover:border-[#00D97E]/45"
            aria-label="Play the Unmute Pro 45-second introduction video"
          >
            <div className="relative aspect-[9/16] overflow-hidden px-7 py-8">
              <div className="absolute -right-16 top-24 h-56 w-56 rounded-full bg-[#00D97E]/30 blur-3xl transition duration-500 group-hover:scale-125" />
              <div className="absolute -left-20 bottom-32 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <div className="inline-flex w-fit items-baseline rounded-2xl bg-white px-4 py-3 text-xl font-black text-[#062B5C] shadow-lg">
                  Unmute<span className="text-[#00B96B]">Pro</span>
                </div>

                <div className="mt-auto">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#00D97E]">
                    Your silence ends here
                  </p>
                  <p className="mt-3 text-4xl font-black leading-[1.02] text-white sm:text-5xl">
                    Speak.
                    <span className="block text-[#00D97E]">Be heard.</span>
                  </p>

                  <div className="mt-7 flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#00D97E] text-[#062B5C] shadow-lg transition group-hover:scale-110">
                      <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-extrabold text-white">Watch now</span>
                      <span className="mt-0.5 flex items-center gap-1.5 text-xs font-semibold text-blue-100">
                        <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                        45 seconds
                        <Volume2 className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                        Sound on
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020D20]/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sales-video-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeVideo();
          }}
        >
          <div className="relative flex max-h-[94vh] w-full max-w-5xl flex-col items-center">
            <div className="mb-3 flex w-full max-w-[430px] items-center justify-between gap-4 text-white">
              <div>
                <p id="sales-video-title" className="font-extrabold">
                  Meet Unmute Pro
                </p>
                <p className="mt-0.5 text-xs text-blue-100">
                  45-second introduction
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={closeVideo}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Close video"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <video
              ref={videoRef}
              src={videoSource}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="max-h-[82vh] w-auto max-w-full rounded-2xl bg-black shadow-2xl"
            >
              Your browser does not support the video player.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

