/* oxlint-disable next/no-img-element -- Portfolio photos are pre-optimized local WebP files with explicit dimensions. */
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

type Shot = { n: number | string; alt: string; note: string };
type Project = {
  trade: string;
  title: string;
  blurb: string;
  shots: Shot[];
};

const projects: Project[] = [
  {
    trade: 'Trim & finishing',
    title: 'Crown, run tight to the ceiling.',
    blurb:
      'Sprung crown, coped inside corners, mitres that stay shut through a Vermont winter.',
    shots: [
      {
        n: 8,
        alt: 'White crown molding turning an outside corner above framed artwork',
        note: 'Outside corner, mitred and glued.',
      },
      {
        n: 12,
        alt: 'Crown molding profile turning a corner beside a doorway',
        note: 'Profile carried past the doorway.',
      },
      {
        n: 3,
        alt: 'White crown molding running into a ceiling corner',
        note: 'Inside corner, coped not mitred.',
      },
      {
        n: 9,
        alt: 'Crown molding meeting a door casing beside a table lamp',
        note: 'Crown dying into the casing.',
      },
      {
        n: 10,
        alt: 'Crown molding along a living-room ceiling above hanging wall art',
        note: 'One clean line, wall to wall.',
      },
      {
        n: 7,
        alt: 'Crown molding along a plain painted wall',
        note: 'Nothing to hide behind.',
      },
      {
        n: 5,
        alt: 'Living room with crown molding, an open doorway and framed artwork',
        note: 'Finished, furniture back in.',
      },
    ],
  },
  {
    trade: 'Stairs & flooring',
    title: 'Reclaimed oak, fourteen risers.',
    blurb:
      'Treads, risers, skirt boards and nosing returns &mdash; scribed to the stair that is actually there.',
    shots: [
      {
        n: 17,
        alt: 'A finished staircase with reclaimed-oak treads and risers between white skirt boards',
        note: 'Looking up the finished flight.',
      },
      {
        n: 16,
        alt: 'A stepped white skirt board scribed around reclaimed-oak treads at a landing',
        note: 'Skirt board, stepped down.',
      },
      {
        n: 19,
        alt: 'Close view of a white nosing return fitted tight to a stair tread',
        note: 'The return. This is the tell.',
      },
      {
        n: 18,
        alt: 'A stair landing where the skirt board dies into the door casing',
        note: 'Skirt into casing at the top.',
      },
      {
        n: 20,
        alt: 'A staircase seen from the foot, looking up towards a lit doorway',
        note: 'Same stair, from the bottom.',
      },
    ],
  },
  {
    trade: 'Decks & porches',
    title: 'Rot out. Structure back in.',
    blurb:
      'Ledger, joists at sixteen on centre, posts on solid ground &mdash; then the part you walk on.',
    shots: [
      {
        n: 1,
        alt: 'A finished grey composite deck with a mitred perimeter border beside a planted garden bed',
        note: 'Border mitred right round.',
      },
      {
        n: 2,
        alt: 'The same finished deck photographed from the garden path',
        note: 'Boards running true to the house.',
      },
      {
        n: 14,
        alt: 'An old porch with the decking torn back, showing rotted framing beneath',
        note: 'What was under the old boards.',
      },
      {
        n: 15,
        alt: 'The same porch after tear-out, with a new pressure-treated rim beam sitting on posts',
        note: 'New rim beam, new posts.',
      },
      {
        n: 'pergola',
        alt: 'A timber pergola with a lattice roof built over an outdoor brick oven',
        note: 'Pergola over the oven.',
      },
    ],
  },
  {
    trade: 'Framing & structure',
    title: 'Before any of it is pretty.',
    blurb:
      'Walls, headers, engineered joists &mdash; the part that has to be right before a stick of trim goes up.',
    shots: [
      {
        n: 'framing-header',
        alt: 'A framed wall with a built-up header and posts, braced and squared, in winter woods',
        note: 'Header and posts, braced off.',
      },
      {
        n: 'framing-joists',
        alt: 'Engineered I-joists running overhead across a framed opening',
        note: 'I-joists, hung and rolled.',
      },
      {
        n: 'roger-onsite',
        alt: 'Roger Dixon standing with a hammer inside a house he is framing in winter',
        note: 'Cold morning. Still framing.',
      },
    ],
  },
  {
    trade: 'Repairs & remodeling',
    title: 'The jobs nobody photographs.',
    blurb:
      'Openings trimmed out, rooms put back together, cabinets rebuilt from the base up.',
    shots: [
      {
        n: 11,
        alt: 'A door and window opening being trimmed out over housewrap during an exterior remodel',
        note: 'Trimming out over the wrap.',
      },
      {
        n: 13,
        alt: 'An interior remodel in progress with fresh paint, a recessed light and wood-look flooring',
        note: 'Room going back together.',
      },
      {
        n: 6,
        alt: 'An open vanity cabinet showing a newly fitted plywood base under the sink',
        note: 'New base, cut to fit the trap.',
      },
      {
        n: 4,
        alt: 'The same vanity cabinet with its doors closed on a tiled floor',
        note: 'Closed up. You would never know.',
      },
      {
        n: 'corridor',
        alt: 'A commercial corridor with patched drywall and fresh paint, a wet paint sign on the wall',
        note: 'Commercial corridor, patched out.',
      },
    ],
  },
];

const src = (n: number | string) =>
  typeof n === 'number'
    ? `/images/roger-${String(n).padStart(2, '0')}.webp`
    : `/images/${n}.webp`;
/* fixed, so the pinned-up angles are the same on every render */
const TILT = ['-1.6deg', '1.2deg', '-0.9deg', '1.8deg'];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [active, setActive] = useState(0);
  const count = project.shots.length;
  const move = (d: number) => setActive((n) => (n + d + count) % count);
  const shot = project.shots[active];

  return (
    <Dialog onOpenChange={(open) => open && setActive(0)}>
      <DialogTrigger
        className="card"
        style={{ '--tilt': TILT[index % TILT.length] } as React.CSSProperties}
        aria-label={`Open ${project.trade}, ${count} photographs`}
      >
        <span className="tape" aria-hidden="true" />
        <span className="card-photo">
          <img
            src={src(project.shots[0].n)}
            alt={project.shots[0].alt}
            width="1400"
            height="1867"
            loading="lazy"
          />
          <span className="card-count">
            {count} shots <Maximize2 size={13} aria-hidden="true" />
          </span>
        </span>
        <span className="card-body">
          <span className="card-trade">
            <i aria-hidden="true">{String(index + 1).padStart(2, '0')}</i>
            {project.trade}
          </span>
          <strong>{project.title}</strong>
          <span
            className="card-blurb"
            dangerouslySetInnerHTML={{ __html: project.blurb }}
          />
        </span>
      </DialogTrigger>

      <DialogContent
        className="lightbox"
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            move(1);
          }
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        <div className="lightbox-head">
          <DialogTitle>{project.trade}</DialogTitle>
          <DialogDescription>{project.title}</DialogDescription>
        </div>
        <img
          className="lightbox-photo"
          src={src(shot.n)}
          alt={shot.alt}
          width="1400"
          height="1867"
        />
        <div className="lightbox-foot">
          <button type="button" aria-label="Previous photograph" onClick={() => move(-1)}>
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <p className="lightbox-note">
            <span aria-live="polite">
              {active + 1} / {count}
            </span>
            {shot.note}
          </p>
          <button type="button" aria-label="Next photograph" onClick={() => move(1)}>
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectGallery() {
  return (
    <div className="card-wall">
      {projects.map((project, index) => (
        <ProjectCard key={project.trade} project={project} index={index} />
      ))}
    </div>
  );
}
