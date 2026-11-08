"use client";
import { useEffect, useState } from "react";
import { eventTypes, site, bookedDates } from "@/lib/site";

export default function LeadForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const taken = bookedDates.includes(date);

  useEffect(() => {
    const h = (e) => setNotes(e.detail);
    window.addEventListener("prefill", h);
    return () => window.removeEventListener("prefill", h);
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    if (taken) return;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="card done" role="status">
        <h3>Request sent</h3>
        <p>
          We’ll contact you by call or message with a quote. Want a faster
          reply?
        </p>
        <a className="btn solid" href={site.messenger}>
          Message us on Messenger
        </a>
      </div>
    );
  }

  return (
    <form className="card form" onSubmit={onSubmit}>
      <label>
        Your name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Phone or Messenger number
        <input name="phone" required inputMode="tel" autoComplete="tel" />
      </label>
      <label>
        Type of event
        <select name="type">
          {eventTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label>
        Event date
        <input
          name="date"
          type="date"
          required
          value={date}
          min={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setDate(e.target.value)}
        />
        {date && (
          <small className={taken ? "err" : "ok"} role="status">
            {taken
              ? "That date is already booked. Pick another or message us."
              : "This date is open."}
          </small>
        )}
      </label>
      <label>
        Venue
        <input name="venue" placeholder="Where is it?" />
      </label>
      <label>
        Guests
        <input
          name="guests"
          inputMode="numeric"
          placeholder="About how many?"
        />
      </label>
      <label className="wide">
        Anything we should know
        <textarea
          name="notes"
          rows="3"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <button
        className="btn solid wide"
        disabled={status === "sending" || taken}
      >
        {status === "sending" ? "Sending…" : "Get my quote"}
      </button>
      {status === "error" && (
        <p className="err wide" role="alert">
          Something went wrong. Check your name, phone and date, or message us
          directly.
        </p>
      )}
    </form>
  );
}
