"use client";
import { useState } from "react";
import { rates } from "@/lib/site";

const peso = (n) => "₱" + n.toLocaleString("en-PH");

export default function Estimator() {
  const [guests, setGuests] = useState(80);
  const [hours, setHours] = useState(6);
  const [add, setAdd] = useState({});
  const tier = rates.tiers.find((t) => guests <= t.max);
  const picked = rates.addons.filter((a) => add[a.id]);
  const total =
    tier.base == null
      ? null
      : tier.base +
        Math.max(0, hours - tier.hours) * rates.extraHour +
        picked.reduce((s, a) => s + a.price, 0);

  function send() {
    const msg =
      `Estimator: ${guests} guests, ${hours} hours, ${tier.name}` +
      (picked.length
        ? `, add-ons: ${picked.map((a) => a.label).join(", ")}`
        : "") +
      (total ? `, estimate ${peso(total)}` : "");
    window.dispatchEvent(new CustomEvent("prefill", { detail: msg }));
    location.hash = "quote";
  }

  return (
    <div className="est">
      <div className="estin">
        <label>
          Guests: <b>{guests}</b>
          <input
            type="range"
            min="10"
            max="400"
            step="10"
            value={guests}
            onChange={(e) => setGuests(+e.target.value)}
          />
        </label>
        <label>
          Hours: <b>{hours}</b>
          <input
            type="range"
            min="2"
            max="12"
            value={hours}
            onChange={(e) => setHours(+e.target.value)}
          />
        </label>
        <fieldset>
          <legend>Add-ons</legend>
          {rates.addons.map((a) => (
            <label key={a.id} className="chk">
              <input
                type="checkbox"
                checked={!!add[a.id]}
                onChange={(e) => setAdd({ ...add, [a.id]: e.target.checked })}
              />
              {a.label} (+{peso(a.price)})
            </label>
          ))}
        </fieldset>
      </div>
      <div className="estout" aria-live="polite">
        <p className="fit">We suggest</p>
        <h3>{tier.name}</h3>
        <p className="price">{total ? peso(total) : "Custom quote"}</p>
        <p className="fit">
          Estimate only. We confirm the final price after checking your venue.
        </p>
        <button className="btn beamb" onClick={send}>
          Send this to my quote
        </button>
      </div>
    </div>
  );
}
