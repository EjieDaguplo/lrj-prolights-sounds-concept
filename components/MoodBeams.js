"use client";
import { useState } from "react";

const moods = [
  { n: "Warm", c: "255,184,28" },
  { n: "Party", c: "255,45,170" },
  { n: "Club", c: "70,120,255" },
  { n: "Fresh", c: "40,220,120" },
];

export default function MoodBeams() {
  const [i, setI] = useState(0);
  return (
    <>
      <div className="beams" aria-hidden="true" style={{ "--c": moods[i].c }}>
        <i className="beam" />
        <i className="beam" />
        <i className="beam" />
        <i className="beam" />
      </div>
      <div className="moods" role="group" aria-label="Try our lights">
        <span>Try our lights</span>
        {moods.map((m, k) => (
          <button
            key={m.n}
            aria-pressed={k === i}
            onClick={() => setI(k)}
            style={{ background: `rgb(${m.c})` }}
            title={m.n}
          >
            <span className="sr">{m.n}</span>
          </button>
        ))}
      </div>
    </>
  );
}
