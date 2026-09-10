/* Hand-authored shop drawings and marks.
   Everything here is drawn in SVG so it stays crisp, weighs almost nothing,
   and reads like something measured rather than something rendered. */

/** Roger's mark: crossed hammers over two rooflines, in a struck circle. */
export function HammerMark({ size = 44 }: { size?: number }) {
  return (
    <svg
      className="hammer-mark"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="50" cy="50" r="45" className="mark-ring" />
      <circle cx="50" cy="50" r="39.5" className="mark-ring-thin" />
      <g className="mark-fill">
        {/* hammer, leaning right */}
        <g transform="rotate(38 50 50)">
          <rect x="46.6" y="26" width="6.8" height="48" rx="1.4" />
          <path d="M38 24.5h24a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-2.6l-1.9 4.4h-11L44.6 34H38a2 2 0 0 1-2-2v-5.5a2 2 0 0 1 2-2Z" />
        </g>
        {/* hammer, leaning left */}
        <g transform="rotate(-38 50 50)">
          <rect x="46.6" y="26" width="6.8" height="48" rx="1.4" />
          <path d="M38 24.5h24a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-2.6l-1.9 4.4h-11L44.6 34H38a2 2 0 0 1-2-2v-5.5a2 2 0 0 1 2-2Z" />
        </g>
        {/* two little gable roofs riding the hammer handles */}
        <path d="M20 62 33 50l13 12h-4.6v9H24.6v-9Z" />
        <path d="M54 62 67 50l13 12h-4.6v9H58.6v-9Z" />
      </g>
    </svg>
  );
}

/** Section through a stair: stringer, treads, risers, and the numbers that matter. */
export function StairSection({ className = '' }: { className?: string }) {
  const steps = [0, 1, 2, 3, 4];
  const x0 = 100;
  const y0 = 400;
  const run = 54;
  const rise = 42;
  const top = `M${x0} ${y0} ` +
    steps
      .map((i) => `V${y0 - rise * (i + 1)} H${x0 + run * (i + 1)} `)
      .join('');

  return (
    <svg
      className={`drawing ${className}`}
      viewBox="0 0 620 470"
      aria-hidden="true"
      focusable="false"
    >
      {/* upper floor + lower floor */}
      <path d="M370 190H590" className="d-heavy" />
      <path d="M40 400H100" className="d-heavy" />
      <g className="d-hatch">
        {Array.from({ length: 16 }, (_, i) => (
          <path key={`uf${i}`} d={`M${384 + i * 13} 190 l-11 13`} />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <path key={`lf${i}`} d={`M${48 + i * 13} 400 l-11 13`} />
        ))}
      </g>

      {/* the stringer, as a closed sawtooth */}
      <path
        className="d-heavy d-solidfill"
        d={`${top}L401 229 L131 439 Z`}
      />

      {/* nosings hanging past each riser */}
      {steps.map((i) => (
        <path
          key={`n${i}`}
          className="d-med"
          d={`M${x0 + run * i} ${y0 - rise * (i + 1)} h-13 v5 h13`}
        />
      ))}

      {/* unit run dimension, above the top flight */}
      <g className="d-dim">
        <path d="M316 168V186M370 168V186M316 177H370" />
        <path d="M316 177l9-4v8ZM370 177l-9-4v8Z" className="d-arrow" />
      </g>
      <text className="d-note" x="343" y="160" textAnchor="middle">
        10&#8243; RUN
      </text>

      {/* unit rise dimension, off the side */}
      <g className="d-dim">
        <path d="M430 232H448M430 190H448M439 232V190" />
        <path d="M439 232l-4-9h8ZM439 190l-4 9h8Z" className="d-arrow" />
      </g>
      <text className="d-note" x="456" y="216">
        7&#190;&#8243; RISE
      </text>

      {/* nosing callout */}
      <circle cx="195" cy="311" r="30" className="d-callout" />
      <path d="M219 293 L292 250" className="d-leader" />
      <text className="d-note" x="298" y="247">
        1&#188;&#8243; NOSING, EASED
      </text>

      {/* title block */}
      <g className="d-title">
        <path d="M40 442H250" />
        <path d="M40 447H250" />
        <text className="d-titletext" x="40" y="436">
          SECTION &#183; STAIR
        </text>
        <text className="d-note" x="40" y="462">
          SCALE 1&#189;&#8243; = 1&#8242;&#8211;0&#8243;
        </text>
      </g>
    </svg>
  );
}

/** Section through crown: spring line, ogee face, nailer behind. */
export function CrownProfile({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`drawing ${className}`}
      viewBox="0 0 420 380"
      aria-hidden="true"
      focusable="false"
    >
      {/* ceiling and wall */}
      <path d="M60 90H400" className="d-heavy" />
      <path d="M120 90V350" className="d-heavy" />
      <g className="d-hatch">
        {Array.from({ length: 20 }, (_, i) => (
          <path key={`c${i}`} d={`M${72 + i * 16} 90 l-12 -12`} />
        ))}
        {Array.from({ length: 14 }, (_, i) => (
          <path key={`w${i}`} d={`M120 ${106 + i * 16} l-12 -12`} />
        ))}
      </g>

      {/* nailer block behind the crown */}
      <path d="M120 200 L120 90 L230 90 Z" className="d-ghost" />
      <path d="M120 200 L230 90" className="d-dash" />

      {/* the ogee face */}
      <path
        className="d-heavy d-solidfill"
        d="M120 200 L120 186 C158 182 150 148 176 128 C196 113 208 108 230 90 L230 104 C210 118 198 128 186 146 C170 170 156 196 120 200 Z"
      />

      {/* crown height dimension on the wall */}
      <g className="d-dim">
        <path d="M84 90H112M84 200H112M98 90V200" />
        <path d="M98 90l-4 9h8ZM98 200l-4-9h8Z" className="d-arrow" />
      </g>
      <text className="d-note" x="78" y="152" textAnchor="end">
        5&#188;&#8243;
      </text>

      {/* spring angle */}
      <path d="M120 150 A50 50 0 0 0 170 90" className="d-dash" />
      <text className="d-note" x="150" y="140">
        45&#176;
      </text>

      <g className="d-title">
        <path d="M120 322H340" />
        <path d="M120 327H340" />
        <text className="d-titletext" x="120" y="316">
          SECTION &#183; CROWN
        </text>
        <text className="d-note" x="120" y="342">
          SPRUNG, COPED INSIDE CORNERS
        </text>
      </g>
    </svg>
  );
}

/** Framing plan for a deck: ledger, joists at sixteen on centre, rim, posts. */
export function DeckPlan({ className = '' }: { className?: string }) {
  const joists = Array.from({ length: 14 }, (_, i) => 70 + i * 36);
  return (
    <svg
      className={`drawing ${className}`}
      viewBox="0 0 620 400"
      aria-hidden="true"
      focusable="false"
    >
      {/* house wall */}
      <path d="M50 40H580M50 52H580" className="d-heavy" />
      <g className="d-hatch">
        {Array.from({ length: 30 }, (_, i) => (
          <path key={`h${i}`} d={`M${56 + i * 18} 40 l-10 -14`} />
        ))}
      </g>
      <text className="d-note" x="50" y="22">
        EXIST. WALL
      </text>

      {/* ledger */}
      <rect x="56" y="56" width="518" height="16" className="d-med d-nofill" />
      <text className="d-note" x="64" y="68">
        2&#215;8 P.T. LEDGER &#183; LAG @ 16&#8243; O.C.
      </text>

      {/* joists */}
      <g className="d-med">
        {joists.map((x) => (
          <path key={x} d={`M${x} 72V326`} />
        ))}
      </g>

      {/* dropped beam */}
      <path d="M56 268H574" className="d-dash" />
      <text className="d-note" x="470" y="262">
        BEAM UNDER
      </text>

      {/* rim joist */}
      <rect x="56" y="326" width="518" height="16" className="d-med d-nofill" />

      {/* posts */}
      {[106, 322, 538].map((x) => (
        <g key={x} className="d-med">
          <rect x={x - 11} y="257" width="22" height="22" />
          <path d={`M${x - 11} 257 l22 22M${x + 11} 257 l-22 22`} />
        </g>
      ))}

      {/* dimension string */}
      <g className="d-dim">
        <path d="M70 372H322" />
        {[70, 106, 142, 178, 214, 250, 286, 322].map((x) => (
          <path key={x} d={`M${x} 365v14`} />
        ))}
        {[70, 106, 142, 178, 214, 250, 286].map((x) => (
          <path key={`t${x}`} d={`M${x + 4} 368l-4 4 4 4M${x + 32} 368l4 4-4 4`} className="d-arrow" />
        ))}
      </g>
      <text className="d-note" x="196" y="394" textAnchor="middle">
        16&#8243; O.C. TYP.
      </text>

      <g className="d-title">
        <path d="M400 372H580" />
        <path d="M400 377H580" />
        <text className="d-titletext" x="400" y="366">
          PLAN &#183; DECK FRAMING
        </text>
      </g>
    </svg>
  );
}

/** Door casing at the plinth, with the reveal called out. */
export function CasingDetail({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`drawing ${className}`}
      viewBox="0 0 380 420"
      aria-hidden="true"
      focusable="false"
    >
      {/* wall line + floor */}
      <path d="M40 360H340" className="d-heavy" />
      <g className="d-hatch">
        {Array.from({ length: 18 }, (_, i) => (
          <path key={`f${i}`} d={`M${48 + i * 17} 360 l-12 14`} />
        ))}
      </g>

      {/* jamb */}
      <rect x="96" y="40" width="26" height="320" className="d-med d-nofill" />
      <text className="d-note" x="60" y="34">
        JAMB
      </text>

      {/* casing */}
      <rect x="134" y="40" width="46" height="286" className="d-heavy d-nofill" />
      {/* plinth block, proud of the casing */}
      <rect x="128" y="286" width="58" height="74" className="d-heavy d-solidfill" />

      {/* baseboard running into the plinth */}
      <path d="M186 302H340V360H186" className="d-med" />
      <text className="d-note" x="242" y="330">
        BASE
      </text>

      {/* reveal callout */}
      <g className="d-dim">
        <path d="M122 120H134M128 108V132" />
      </g>
      <path d="M128 120 L246 96" className="d-leader" />
      <text className="d-note" x="252" y="93">
        &#188;&#8243; REVEAL, HELD CONSISTENT
      </text>

      <g className="d-title">
        <path d="M40 396H300" />
        <path d="M40 401H300" />
        <text className="d-titletext" x="40" y="390">
          DETAIL &#183; CASING AT PLINTH
        </text>
      </g>
    </svg>
  );
}

/** A short length of rule, used as a divider. */
export function RuleStrip() {
  return (
    <svg
      className="rule-strip"
      viewBox="0 0 1200 26"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 25H1200" />
      {Array.from({ length: 121 }, (_, i) => (
        <path
          key={i}
          d={`M${i * 10} 25V${i % 10 === 0 ? 3 : i % 5 === 0 ? 11 : 17}`}
        />
      ))}
    </svg>
  );
}

/**
 * A full-width shop sheet: three details set out side by side under one title
 * block, the way they'd land on a drawing sheet. Used as a section divider,
 * drawn at full strength — this is artwork, not wallpaper.
 */
export function ShopSheet() {
  return (
    <svg
      className="drawing shop-sheet"
      viewBox="0 0 1400 300"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      {/* sheet border and title block */}
      <rect x="10" y="10" width="1380" height="280" className="d-sheet" />
      <path d="M1020 244H1390M1020 244V290" className="d-sheet" />
      <text className="d-titletext" x="1036" y="266">
        ROGER DIXON &#183; BURLINGTON VT
      </text>
      <text className="d-note" x="1036" y="284">
        sheet A&#8211;1 &#183; details as built
      </text>

      {/* ---- detail 1: stair, elevation ---- */}
      <g transform="translate(64 34)">
        <path
          className="d-heavy d-solidfill"
          d="M0 176V132H46V88H92V44H138V0H184L214 26L36 202Z"
        />
        {[0, 1, 2, 3].map((i) => (
          <path key={i} className="d-med" d={`M${46 * i} ${176 - 44 * i} h-11 v4 h11`} />
        ))}
        <g className="d-dim">
          <path d="M232 44V0M226 44h12M226 0h12" />
          <path d="M232 44l-3-8h6ZM232 0l-3 8h6Z" className="d-arrow" />
        </g>
        <text className="d-note" x="242" y="28">
          7&#190;&#8243;
        </text>
        <text className="d-titletext" x="0" y="228">
          A / STAIR
        </text>
      </g>

      {/* ---- detail 2: crown, section ---- */}
      <g transform="translate(430 30)">
        <path d="M0 20H210" className="d-heavy" />
        <path d="M40 20V196" className="d-heavy" />
        <g className="d-hatch">
          {Array.from({ length: 11 }, (_, i) => (
            <path key={`ch${i}`} d={`M${10 + i * 18} 20 l-11 -11`} />
          ))}
          {Array.from({ length: 9 }, (_, i) => (
            <path key={`cw${i}`} d={`M40 ${34 + i * 18} l-11 -11`} />
          ))}
        </g>
        <path d="M40 128 L130 20" className="d-dash" />
        <path
          className="d-heavy d-solidfill"
          d="M40 128 L40 116 C72 112 66 84 88 68 C104 56 114 50 130 20 L130 32 C114 56 104 62 94 78 C80 98 70 124 40 128 Z"
        />
        <text className="d-note" x="146" y="96">
          45&#176; sprung
        </text>
        <text className="d-titletext" x="0" y="232">
          B / CROWN
        </text>
      </g>

      {/* ---- detail 3: deck framing, plan ---- */}
      <g transform="translate(760 34)">
        <path d="M0 8H230M0 20H230" className="d-heavy" />
        <g className="d-hatch">
          {Array.from({ length: 14 }, (_, i) => (
            <path key={`dh${i}`} d={`M${6 + i * 17} 8 l-9 -9`} />
          ))}
        </g>
        <rect x="4" y="24" width="222" height="11" className="d-med d-nofill" />
        <g className="d-med">
          {Array.from({ length: 11 }, (_, i) => (
            <path key={`dj${i}`} d={`M${14 + i * 20} 35V162`} />
          ))}
        </g>
        <rect x="4" y="162" width="222" height="11" className="d-med d-nofill" />
        <path d="M4 118H226" className="d-dash" />
        <g className="d-dim">
          <path d="M14 190H74M14 184v12M34 184v12M54 184v12M74 184v12" />
        </g>
        <text className="d-note" x="86" y="196">
          16&#8243; o.c.
        </text>
        <text className="d-titletext" x="0" y="228">
          C / DECK
        </text>
      </g>
    </svg>
  );
}
