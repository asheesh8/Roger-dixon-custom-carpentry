/* oxlint-disable next/no-img-element -- Portfolio photos are pre-optimized local WebP files with explicit dimensions. */
import { ArrowUpRight, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import ProjectGallery from './project-gallery';
import LeadForm from './lead-form';
import {
  CasingDetail,
  HammerMark,
  RuleStrip,
  ShopSheet,
  StairSection,
} from './shop-drawings';

const FACEBOOK = 'https://www.facebook.com/profile.php?id=61592028287938';
const EMAIL = 'rogerdixoncarpentry@gmail.com';
const PHONE_TEXT = '786-691-5247';
const PHONE_HREF = 'tel:+17866915247';

const TRADES = [
  'Trim',
  'Finishing',
  'Decks',
  'Doors',
  'Windows',
  'Flooring',
  'Framing',
  'All the above',
];

const FACTS = [
  ['Based', 'Saint Paul St, Burlington VT'],
  ['Roots', 'Jamaica'],
  ['Takes on', 'Houses, one at a time'],
  ['Does', 'The whole job, start to finish'],
];

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#work">
        Skip to the work
      </a>

      {/* ---------------------------------------------------------- top bar */}
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Roger Dixon Custom Carpentry, home">
          <HammerMark size={38} />
          <span className="wordmark-text">
            <strong>Roger Dixon</strong>
            <small>Custom Carpentry</small>
          </span>
        </a>
        <nav aria-label="Main">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="topbar-cta" href="#quote">
            Get a price
          </a>
        </nav>
      </header>

      {/* ------------------------------------------------------------- hero */}
      <section className="hero timber">
        <span className="flag-brush flag-brush-left" aria-hidden="true" />
        <span className="flag-brush flag-brush-right" aria-hidden="true" />
        <StairSection className="hero-drawing" />

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="kicker">
              <MapPin size={13} aria-hidden="true" /> Burlington, Vermont
            </p>
            <h1>
              <span>Measure twice.</span>
              <span>
                Build it <em>once.</em>
              </span>
            </h1>
            <p className="script-tag">Quality Work Built to Last</p>
            <p className="hero-lede">
              Trim, stairs, decks and doors across Burlington &mdash; the kind
              of work you only notice when somebody gets it wrong.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#quote">
                Get a price <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="btn btn-ghost hide-on-phone" href={PHONE_HREF}>
                <Phone size={15} aria-hidden="true" /> {PHONE_TEXT}
              </a>
            </div>
          </div>

          <div className="hero-stack">
            <figure className="tacked tacked-a">
              <img
                src="/images/roger-19.webp"
                alt="Close view of a white nosing return fitted tight to a reclaimed-oak stair tread"
                width="1400"
                height="1867"
                fetchPriority="high"
              />
              <figcaption>Nosing return. No gap.</figcaption>
            </figure>
            <figure className="tacked tacked-b">
              <img
                src="/images/roger-17.webp"
                alt="A finished staircase with reclaimed-oak treads and risers between clean white skirt boards"
                width="1400"
                height="1867"
                loading="lazy"
              />
              <figcaption>Risers, dead even.</figcaption>
            </figure>
            <figure className="tacked tacked-c">
              <img
                src="/images/roger-01.webp"
                alt="A finished grey composite deck with a mitred perimeter border beside a planted garden bed"
                width="1200"
                height="1600"
                loading="lazy"
              />
              <figcaption>Border, mitred right round.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- trades */}
      <div className="trades" aria-label="Services">
        <RuleStrip />
        <ul>
          {TRADES.map((trade) => (
            <li key={trade}>{trade}</li>
          ))}
        </ul>
        <RuleStrip />
      </div>

      {/* ------------------------------------------------------------- work */}
      <section className="work paper" id="work">
        <div className="sheet-band">
          <ShopSheet />
        </div>

        <div className="section-head">
          <span className="sheet-no">The work</span>
          <h2>Straight off the job.</h2>
          <p>Swipe through. Tap a set to open the photographs full size.</p>
        </div>

        <ProjectGallery />

        <a
          className="link-underline more-link"
          href={`${FACEBOOK}&sk=photos`}
          target="_blank"
          rel="noreferrer"
        >
          Every photo, on Facebook <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </section>

      {/* ----------------------------------------------------------- detail */}
      <section className="detail timber">
        <div className="detail-grid">
          <figure className="detail-photo tacked">
            <img
              src="/images/roger-16.webp"
              alt="A stepped white skirt board scribed around reclaimed-oak stair treads at a landing"
              width="1400"
              height="1867"
              loading="lazy"
            />
            <figcaption>Skirt board, scribed step by step.</figcaption>
          </figure>

          <div className="detail-copy">
            <span className="sheet-no">The difference</span>
            <h2>
              Anybody can hang a board.
              <br />
              The <em>fit</em> is the job.
            </h2>
            <p>
              A skirt board gets cut once. Every step is scribed to the tread
              that is actually there &mdash; because in a hundred-year-old
              Burlington house, that is never the tread on the drawing.
            </p>
            <p className="pencil-note">
              &ldquo;If the corner is out of square, the trim still has to look
              square.&rdquo;
            </p>
          </div>

          <div className="detail-drawing" aria-hidden="true">
            <CasingDetail />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ about */}
      <section className="about paper" id="about">
        <div className="about-grid">
          <div className="about-media">
            <figure className="about-photo tacked">
              <img
                src="/images/roger-portrait.webp"
                alt="Roger Dixon in a hard hat, ear defenders and a hi-vis vest on a roadside job"
                width="1069"
                height="1900"
                loading="lazy"
              />
              <figcaption>Roger.</figcaption>
            </figure>
            <figure className="about-photo-2 tacked">
              <img
                src="/images/roger-onsite.webp"
                alt="Roger Dixon standing with a hammer inside a house he is framing in winter"
                width="1400"
                height="1867"
                loading="lazy"
              />
              <figcaption>Framing, mid-winter.</figcaption>
            </figure>
          </div>

          <div className="about-copy">
            <span className="sheet-no">About Roger</span>
            <h2>The man holding the hammer.</h2>
            <p>
              Roger Dixon runs Roger Dixon Custom Carpentry out of Saint Paul
              Street in Burlington. Jamaican roots, Vermont houses &mdash; which
              is how the red, gold and green ended up on his card and on this
              page.
            </p>
            <p>
              He does the whole job rather than a slice of it: trim, finishing,
              decks, doors, windows, flooring. You deal with the man doing the
              work, not a scheduler.
            </p>

            <dl className="facts">
              {FACTS.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <p className="script-sign">Quality Work Built to Last</p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ quote */}
      <section className="quote timber" id="quote">
        <span className="flag-brush flag-brush-left" aria-hidden="true" />
        <span className="flag-brush flag-brush-right" aria-hidden="true" />

        <div className="quote-grid">
          <div className="quote-copy">
            <span className="sheet-no">Get a price</span>
            <h2>
              Tell him what
              <br />
              you need built.
            </h2>
            <p>
              A few lines is plenty. Roger reads them himself and comes back
              with a straight answer about whether it is a job for him.
            </p>

            <div className="quote-direct">
              <a href={PHONE_HREF}>
                <Phone size={16} aria-hidden="true" /> {PHONE_TEXT}
              </a>
              <a href={`mailto:${EMAIL}`}>
                <Mail size={16} aria-hidden="true" /> {EMAIL}
              </a>
              <span>
                <MapPin size={16} aria-hidden="true" /> 230 Saint Paul Street,
                Burlington, VT
              </span>
              <a href={FACEBOOK} target="_blank" rel="noreferrer">
                <MessageSquare size={16} aria-hidden="true" /> Message the
                Facebook page
              </a>
            </div>
          </div>

          <div className="quote-card">
            <LeadForm />
          </div>
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#top">
          <HammerMark size={34} />
          <span className="wordmark-text">
            <strong>Roger Dixon</strong>
            <small>Custom Carpentry</small>
          </span>
        </a>
        <span className="footer-meta">
          &copy; {new Date().getFullYear()} &middot; Burlington, Vermont
        </span>
      </footer>

      {/* --------------------------------------------- mobile action dock */}
      <div className="dock" aria-hidden="false">
        <a className="dock-call" href={PHONE_HREF}>
          <Phone size={17} aria-hidden="true" /> Call Roger
        </a>
        <a className="dock-quote" href="#quote">
          Get a price
        </a>
      </div>
    </main>
  );
}
