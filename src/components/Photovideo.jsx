import { useState } from "react";
import { PHOTOS, VIDEOS } from "../data";

export function Photography() {
  const [idx, setIdx] = useState(0);
  const visible = 3;
  const maxIdx = PHOTOS.length - visible;

  return (
    <section id="photography" className="py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal mb-12">
          <div className="section-label">Photography</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Visual <em className="gold-text-simple not-italic">Poetry</em> in
            Every Frame
          </h2>
          <p className="text-zinc-400 max-w-xl">
            Each photograph tells a story — capturing raw emotion, natural
            beauty, and decisive moments.
          </p>
        </div>
        <div className="reveal overflow-hidden rounded-3xl">
          <div
            className="flex gap-5 transition-transform duration-500"
            style={{
              transform: `translateX(calc(-${idx * (100 / visible)}% - ${(idx * 20) / visible}px))`,
            }}
          >
            {PHOTOS.map((photo, i) => (
              <div
                key={i}
                className="min-w-[calc(33.333%-14px)] aspect-[3/4] rounded-2xl overflow-hidden relative flex-shrink-0 bg-[#0f0f18] group cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                  {photo.emoji}
                </div>
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(232,201,122,0.1),transparent)",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{
                    background:
                      "linear-gradient(to top,rgba(5,5,8,0.9),transparent)",
                  }}
                >
                  <div className="text-xs text-amber-400 uppercase tracking-[2px] mb-1">
                    {photo.cat}
                  </div>
                  <div className="font-semibold">{photo.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal flex gap-3 justify-center mt-6">
          <button
            onClick={() => setIdx(Math.max(0, idx - 1))}
            disabled={idx === 0}
            className="w-12 h-12 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-lg hover:bg-amber-400 hover:text-zinc-900 hover:border-amber-400 disabled:opacity-30 transition-all"
          >
            ←
          </button>
          <button
            onClick={() => setIdx(Math.min(maxIdx, idx + 1))}
            disabled={idx >= maxIdx}
            className="w-12 h-12 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-lg hover:bg-amber-400 hover:text-zinc-900 hover:border-amber-400 disabled:opacity-30 transition-all"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export function Videography() {
  return (
    <section id="videography" className="py-32 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="reveal text-center mb-14">
          <div className="section-label justify-center">Videography</div>
          <h2 className="font-display font-black text-5xl mb-4">
            Cinematic <em className="gold-text-simple not-italic">Vision</em> in
            Motion
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            From raw footage to polished cinematic experiences — every frame
            intentionally crafted.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Video 1 */}
          <div className="reveal rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            <iframe
              src="https://drive.google.com/file/d/1BCuTygCFnQcWaHo1_9h2DObmhK6LPdPs/preview"
              width="100%"
              height="100%"
              className="w-full aspect-video"
              allow="autoplay"
              title="Video 1"
            />
          </div>

          {/* Video 2 */}
          <div className="reveal rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            <iframe
              src="https://drive.google.com/file/d/1GLJ404H-NyAervZGO_X5xC3QemwWO5b0/preview"
              width="100%"
              height="100%"
              className="w-full aspect-video"
              allow="autoplay"
              title="Video 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
