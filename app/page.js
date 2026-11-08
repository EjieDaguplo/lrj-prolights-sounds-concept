import LeadForm from "@/components/LeadForm";
import MoodBeams from "@/components/MoodBeams";
import Estimator from "@/components/Estimator";
import {
  site,
  services,
  packages,
  steps,
  gallery,
  testimonials,
  faqs,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <header className="top">
        <div className="wrap bar">
          <a href="#top" aria-label={site.name}>
            <img src="/logo.png" alt={site.name} className="logo" />
          </a>
          <nav>
            <a href="#packages">Packages</a>
            <a href="#estimate">Estimate</a>
            <a href="#gallery">Gallery</a>
            <a className="btn solid sm" href="#quote">
              Get a quote
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <MoodBeams />
          <div className="wrap heroin">
            <h1>Sound you can feel. Light that sets the mood.</h1>
            <p>
              Professional sound and lighting for weddings, birthdays, corporate
              events and concerts. We set up, run it, and pack out.
            </p>
            <div className="cta">
              <a className="btn beamb" href="#quote">
                Get a free quote
              </a>
              <a className="btn ghost" href={site.messenger}>
                Message us on Messenger
              </a>
            </div>
            <p className="proof">
              {site.followers} people follow our work on Facebook
            </p>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <h2>What we bring to your event</h2>
            <div className="grid4">
              {services.map((s) => (
                <div key={s.t}>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec mist" id="packages">
          <div className="wrap">
            <h2>Pick a package, or ask for a custom one</h2>
            <div className="grid3">
              {packages.map((p) => (
                <article
                  key={p.name}
                  className={`pkg ${p.featured ? "feat" : ""}`}
                >
                  <h3>{p.name}</h3>
                  <p className="fit">{p.fit}</p>
                  <p className="price">{p.price}</p>
                  <ul>
                    {p.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <a
                    className={`btn ${p.featured ? "beamb" : "solid"}`}
                    href="#quote"
                  >
                    Ask about this
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="estimate">
          <div className="wrap">
            <h2>Get a price estimate in 10 seconds</h2>
            <Estimator />
          </div>
        </section>

        <section className="sec mist" id="gallery">
          <div className="wrap">
            <h2>Events we’ve lit and powered</h2>
            <div className="gal">
              {gallery.map((g) => (
                <figure key={g.caption}>
                  {g.src ? (
                    <img src={g.src} alt={g.caption} />
                  ) : (
                    <div className="ph" role="img" aria-label={g.caption} />
                  )}
                  <figcaption>{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="how">
          <div className="wrap">
            <h2>From first message to last song</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.t}>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sec mist">
          <div className="wrap">
            <h2>What customers say</h2>
            <div className="grid3">
              {testimonials.map((t) => (
                <blockquote key={t.n}>
                  <p>“{t.q}”</p>
                  <footer>{t.n}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap faq">
            <h2>Questions we get a lot</h2>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="sec dark" id="quote">
          <div className="wrap split">
            <div>
              <h2>Check your date</h2>
              <p>
                Send your event details and we’ll reply with a package and a
                price. No payment needed to ask.
              </p>
              <p>
                <a className="link" href={site.phoneHref}>
                  Call {site.phone}
                </a>
              </p>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>
            <a href={site.facebook}>Facebook</a> ·{" "}
            <a href={site.messenger}>Messenger</a> ·{" "}
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </div>
      </footer>

      <a className="sticky" href={site.messenger}>
        Message us
      </a>
    </>
  );
}
