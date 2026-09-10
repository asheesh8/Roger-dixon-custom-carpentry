/* oxlint-disable next/no-img-element -- Portfolio photos are pre-optimized local WebP files with explicit dimensions. */
import { ArrowDown, ArrowUpRight, MapPin, Phone } from 'lucide-react';
import ProjectGallery from './project-gallery';

const facebook = 'https://www.facebook.com/profile.php?id=61592028287938';
const email = 'mailto:rogerdixoncarpentry@gmail.com';

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Roger Dixon home">
          <strong>ROGER DIXON</strong>
          <small>CUSTOM CARPENTRY</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">The work</a>
          <a href="#about">About Roger</a>
          <a className="header-cta" href="#contact">
            Let’s talk <ArrowUpRight size={17} />
          </a>
        </nav>
      </header>
      <section className="hero" id="main-content">
        <img
          className="hero-photo"
          src="/images/roger-08.webp"
          alt="White crown molding and detailed interior trim by Roger Dixon"
          width="1400"
          height="1860"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-top">
          <span className="eyebrow location">
            <MapPin size={14} /> BURLINGTON, VERMONT
          </span>
          <span className="eyebrow">WOODWORKS & REMODELING</span>
        </div>
        <div className="hero-content">
          <h1>
            Good work.
            <br />
            Built to <em>last.</em>
          </h1>
          <div className="hero-description">
            <p>
              Trim, woodwork, and remodeling in Burlington, Vermont. Thoughtful
              details that make your house feel more like home.
            </p>
            <a className="button" href="#work">
              Explore the work <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#work">
            <ArrowDown size={18} /> A closer look at the craft
          </a>
          <span>ONE PROJECT. EVERY DETAIL.</span>
        </div>
      </section>
      <div className="service-strip" aria-label="Carpentry services">
        <span>Trim & finishing</span>
        <i aria-hidden="true">·</i>
        <span>Decks</span>
        <i aria-hidden="true">·</i>
        <span>Doors & windows</span>
        <i aria-hidden="true">·</i>
        <span>Flooring</span>
        <i aria-hidden="true">·</i>
        <span>Remodeling</span>
      </div>
      <section className="work section-pad" id="work">
        <div className="section-heading">
          <span className="eyebrow">01 / THE WORK</span>
          <h2>
            The details make
            <br />
            the difference.
          </h2>
          <a
            className="text-link"
            href={facebook + '&sk=photos'}
            target="_blank"
            rel="noreferrer"
          >
            More on Facebook <ArrowUpRight size={18} />
          </a>
        </div>
        <ProjectGallery />
      </section>
      <section className="about section-pad" id="about">
        <div className="about-photo">
          <img
            src="/images/roger-19.webp"
            alt="Close-up of Roger’s white stair trim and wood-look flooring"
            width="1400"
            height="1867"
            loading="lazy"
          />
          <span className="image-note">THE CARE IS IN THE CRAFT.</span>
        </div>
        <div className="about-copy">
          <span className="eyebrow">02 / ABOUT ROGER</span>
          <h2>
            Your home.
            <br />
            His handiwork.
          </h2>
          <p>
            Roger Dixon offers custom carpentry, woodwork, and remodeling in
            Burlington, Vermont. From a room’s finishing touches to the deck
            outside your door, his work covers the details that make a home your
            own.
          </p>
          <p>
            Have a project in mind? Talk directly with Roger about your space,
            the work you need, and what comes next.
          </p>
          <a className="text-link" href="tel:+17866915247">
            Let’s talk about your project <ArrowUpRight size={18} />
          </a>
          <div className="signature">Roger Dixon</div>
        </div>
      </section>
      <section className="contact section-pad" id="contact">
        <span className="eyebrow">LET’S BUILD SOMETHING</span>
        <h2>
          Your next project
          <br />
          starts <em>here.</em>
        </h2>
        <div className="contact-actions">
          <a className="button" href="tel:+17866915247">
            <Phone size={18} /> (786) 691-5247 <ArrowUpRight size={20} />
          </a>
          <a className="button button-outline" href={email}>
            Email Roger <ArrowUpRight size={20} />
          </a>
        </div>
        <p>Share your idea, a few photos, and what you have in mind.</p>
        <a className="email-link" href={email}>
          rogerdixoncarpentry@gmail.com
        </a>
        <div className="contact-location">
          <MapPin size={15} /> Burlington, Vermont
        </div>
      </section>
      <footer>
        <a className="wordmark" href="#top">
          <strong>ROGER DIXON</strong>
          <small>CUSTOM CARPENTRY</small>
        </a>
        <span>© {new Date().getFullYear()} Roger Dixon Custom Carpentry</span>
        <a href={facebook} target="_blank" rel="noreferrer">
          Facebook <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}
