/* oxlint-disable next/no-img-element -- Portfolio photos are pre-optimized local WebP files with explicit dimensions. */
'use client';

import { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const projects = [
  {
    name: 'The finishing touches.',
    category: 'TRIM & FINISH CARPENTRY',
    description:
      'Crown molding, crisp corners, and the details that bring a room together.',
    photos: [8, 9, 3, 5, 7, 10, 12],
    alts: [
      'White crown molding and door trim in a living room',
      'Crown molding around an interior wall',
      'White crown molding at a ceiling corner',
      'Interior room with crown molding and artwork',
      'Finished crown molding along two walls',
      'Crown molding around a living room ceiling',
      'Close view of white molding and door casing',
    ],
  },
  {
    name: 'A better step outside.',
    category: 'DECKS & PORCHES',
    description:
      'Outdoor projects, from the structure underneath to the surface you see.',
    photos: [1, 2, 14, 15],
    alts: [
      'Gray deck boards with a picture-frame border beside garden plants',
      'Completed deck surface beside a home',
      'Porch decking removed during renovation',
      'Porch framing and edge beam during work',
    ],
  },
  {
    name: 'Every step considered.',
    category: 'FLOORING & STAIR DETAILS',
    description:
      'Flooring, stair finishes, and carefully fitted trim, shown up close.',
    photos: [16, 17, 18, 19, 20],
    alts: [
      'Wood-look stair treads with white edge trim',
      'Staircase with wood-look flooring',
      'Close view of stair trim at a doorway',
      'White stair edging fitted around a tread',
      'Full staircase viewed from below',
    ],
  },
  {
    name: 'Make your space work.',
    category: 'REMODELING & REPAIRS',
    description: 'Practical improvements for the home, inside and out.',
    photos: [13, 11, 4, 6],
    alts: [
      'Interior remodeling in progress with recessed lighting',
      'Sliding door and window work in progress',
      'Wooden sink cabinet with doors closed',
      'Sink cabinet interior with a fitted plywood base',
    ],
  },
];
const imagePath = (n: number) =>
  `/images/roger-${String(n).padStart(2, '0')}.webp`;

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [active, setActive] = useState(0);
  const move = (delta: number) =>
    setActive(
      (n) => (n + delta + project.photos.length) % project.photos.length,
    );
  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) setActive(0);
      }}
    >
      <DialogTrigger
        className="project-card"
        aria-label={`View ${project.category.toLowerCase()} gallery, ${project.photos.length} photos`}
      >
        <div className="project-image">
          <img
            src={imagePath(project.photos[0])}
            alt={project.alts[0]}
            width="1400"
            height="1800"
            loading="lazy"
          />
          <span className="photo-count">{project.photos.length} PHOTOS</span>
          <span className="project-open" aria-hidden="true">
            <ArrowUpRight size={25} />
          </span>
        </div>
        <div className="project-meta">
          <span className="eyebrow">{project.category}</span>
          <span>0{index + 1}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </DialogTrigger>
      <DialogContent
        className="gallery-dialog"
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
        <div className="gallery-heading">
          <DialogTitle>{project.category}</DialogTitle>
          <DialogDescription>
            Project photos from Roger Dixon’s portfolio.
          </DialogDescription>
        </div>
        <img
          className="gallery-large"
          src={imagePath(project.photos[active])}
          alt={project.alts[active]}
          width="1400"
          height="1800"
        />
        <div className="gallery-controls">
          <button aria-label="Previous photo" onClick={() => move(-1)}>
            <ChevronLeft size={22} />
          </button>
          <p aria-live="polite">
            {active + 1} / {project.photos.length}
          </p>
          <button aria-label="Next photo" onClick={() => move(1)}>
            <ChevronRight size={22} />
          </button>
        </div>
        <p className="gallery-caption">{project.alts[active]}</p>
      </DialogContent>
    </Dialog>
  );
}

export default function ProjectGallery() {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.category} project={project} index={index} />
      ))}
    </div>
  );
}
