const fs = require('fs');
const path = require('path');

const reelsDir = path.resolve('public', 'images', 'projects', 'reels');
const projectsDir = path.resolve('public', 'images', 'projects');

if (!fs.existsSync(reelsDir)) {
  fs.mkdirSync(reelsDir, { recursive: true });
}

function createSvg({ title, sub, badge, views, color = '#C9A45C', grad = '#8964DE', bg = '#17151B' }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 960" fill="none">
  <defs>
    <radialGradient id="radGrad" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.28"/>
      <stop offset="50%" stop-color="${grad}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${bg}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="${color}" stroke-width="0.6" opacity="0.12"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="540" height="960" fill="${bg}"/>
  <rect width="540" height="960" fill="url(#grid)"/>
  <circle cx="270" cy="450" r="340" fill="url(#radGrad)"/>

  <!-- Viewfinder Reticles -->
  <path d="M 28 36 L 56 36 M 28 36 L 28 64" stroke="${color}" stroke-width="2"/>
  <path d="M 512 36 L 484 36 M 512 36 L 512 64" stroke="${color}" stroke-width="2"/>
  <path d="M 28 924 L 56 924 M 28 924 L 28 896" stroke="${color}" stroke-width="2"/>
  <path d="M 512 924 L 484 924 M 512 924 L 512 896" stroke="${color}" stroke-width="2"/>

  <!-- Top Metadata HUD -->
  <g opacity="0.95">
    <rect x="36" y="50" width="130" height="26" rx="13" fill="#0E0C12" stroke="${color}" stroke-width="1"/>
    <text x="101" y="67" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="${color}" font-weight="bold">${badge}</text>
    <text x="504" y="68" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F6F1E9" letter-spacing="1">REC ● 60 FPS</text>
  </g>

  <!-- Central Play Trigger & Content Lockup -->
  <g transform="translate(270, 420)" text-anchor="middle">
    <circle cx="0" cy="-50" r="42" fill="${color}" fill-opacity="0.18" stroke="${color}" stroke-width="1.8"/>
    <polygon points="-8,-66 18,-50 -8,-34" fill="#F6F1E9"/>

    <text y="46" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="34" fill="#F6F1E9" letter-spacing="-0.5">
      ${title}
    </text>

    <text y="78" font-family="'JetBrains Mono', monospace" font-size="12" fill="${color}" letter-spacing="1.5">
      ${sub}
    </text>

    <!-- Waveform Visualizer -->
    <g transform="translate(-80, 110)" fill="${color}" opacity="0.85">
      <rect x="0" y="8" width="3" height="16" rx="1.5"/>
      <rect x="10" y="2" width="3" height="28" rx="1.5"/>
      <rect x="20" y="10" width="3" height="12" rx="1.5"/>
      <rect x="30" y="4" width="3" height="24" rx="1.5"/>
      <rect x="40" y="0" width="3" height="32" rx="1.5"/>
      <rect x="50" y="6" width="3" height="20" rx="1.5"/>
      <rect x="60" y="12" width="3" height="8" rx="1.5"/>
      <rect x="70" y="4" width="3" height="24" rx="1.5"/>
      <rect x="80" y="0" width="3" height="32" rx="1.5"/>
      <rect x="90" y="8" width="3" height="16" rx="1.5"/>
      <rect x="100" y="2" width="3" height="28" rx="1.5"/>
      <rect x="110" y="6" width="3" height="20" rx="1.5"/>
      <rect x="120" y="10" width="3" height="12" rx="1.5"/>
      <rect x="130" y="4" width="3" height="24" rx="1.5"/>
      <rect x="140" y="8" width="3" height="16" rx="1.5"/>
      <rect x="150" y="12" width="3" height="8" rx="1.5"/>
    </g>
  </g>

  <!-- Bottom Metric Badge -->
  <g transform="translate(270, 840)" text-anchor="middle">
    <rect x="-110" y="-22" width="220" height="44" rx="22" fill="#0E0C12" stroke="${color}" stroke-width="1.5"/>
    <text y="7" font-family="'Space Grotesk', sans-serif" font-weight="800" font-size="20" fill="#F6F1E9" letter-spacing="0.5">
      ${views}
    </text>
  </g>
</svg>`;
}

// 1. Pavan Arts 3 Reels
fs.writeFileSync(path.join(reelsDir, 'pavanarts-reel-1.svg'), createSvg({
  title: 'PAVAN ARTS',
  sub: 'VIRAL EDIT // REEL 01',
  badge: 'INSTAGRAM • 9:16',
  views: '2.5M VIEWS',
  color: '#C9A45C',
  grad: '#8964DE'
}));

fs.writeFileSync(path.join(reelsDir, 'pavanarts-reel-2.svg'), createSvg({
  title: 'PAVAN ARTS',
  sub: 'MOTION FLOW // REEL 02',
  badge: 'INSTAGRAM • 9:16',
  views: '1.5M VIEWS',
  color: '#C9A45C',
  grad: '#8964DE'
}));

fs.writeFileSync(path.join(reelsDir, 'pavanarts-reel-3.svg'), createSvg({
  title: 'PAVAN ARTS',
  sub: 'BEAT SYNC // REEL 03',
  badge: 'INSTAGRAM • 9:16',
  views: '1.2M VIEWS',
  color: '#C9A45C',
  grad: '#8964DE'
}));

// 2. Striver: Code to Career (PASC)
fs.writeFileSync(path.join(reelsDir, 'striver-reel-1.svg'), createSvg({
  title: 'STRIVER',
  sub: 'SPEAKER ANNOUNCEMENT',
  badge: 'PASC • 9:16',
  views: 'CODE TO CAREER',
  color: '#8964DE',
  grad: '#C9A45C'
}));

fs.writeFileSync(path.join(reelsDir, 'striver-reel-2.svg'), createSvg({
  title: 'STRIVER',
  sub: 'EVENT MASTERCLASS TEASER',
  badge: 'PASC • 9:16',
  views: 'HIGH RETENTION',
  color: '#8964DE',
  grad: '#C9A45C'
}));

// 3. Social Media Content items
fs.writeFileSync(path.join(reelsDir, 'social-promo-1.svg'), createSvg({
  title: 'PROMO EDIT',
  sub: 'HIGH VELOCITY LAUNCH',
  badge: 'PROMO • 9:16',
  views: 'PROMOTIONAL FILM',
  color: '#C9A45C',
  grad: '#6C41CE'
}));

fs.writeFileSync(path.join(reelsDir, 'social-talking-1.svg'), createSvg({
  title: 'TALKING HEAD',
  sub: 'DYNAMIC RETENTION EDIT',
  badge: 'TALKING HEAD • 9:16',
  views: 'HIGH RETENTION',
  color: '#6C41CE',
  grad: '#C9A45C'
}));

fs.writeFileSync(path.join(reelsDir, 'social-reel-1.svg'), createSvg({
  title: 'VIRAL REEL',
  sub: 'AUDIO-VISUAL SYNCHRONY',
  badge: 'REEL • 9:16',
  views: 'TRENDING AUDIO',
  color: '#C9A45C',
  grad: '#8964DE'
}));

fs.writeFileSync(path.join(reelsDir, 'social-experiment-1.svg'), createSvg({
  title: 'CREATIVE LAB',
  sub: 'SURREAL VISUAL EFFECTS',
  badge: 'EXPERIMENT • 9:16',
  views: 'MOTION GRAPHICS',
  color: '#8964DE',
  grad: '#10B981'
}));

// 4. Institutional Project: PICT 16:9 Thumbnail
const pictSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" fill="none">
  <defs>
    <radialGradient id="pictRad" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#8964DE" stop-opacity="0.35"/>
      <stop offset="50%" stop-color="#C9A45C" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#17151B" stop-opacity="0"/>
    </radialGradient>
    <pattern id="pictGrid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#C9A45C" stroke-width="0.6" opacity="0.1"/>
    </pattern>
  </defs>

  <rect width="960" height="540" fill="#17151B"/>
  <rect width="960" height="540" fill="url(#pictGrid)"/>
  <ellipse cx="480" cy="270" rx="440" ry="240" fill="url(#pictRad)"/>

  <!-- Reticles -->
  <path d="M 32 32 L 64 32 M 32 32 L 32 64" stroke="#C9A45C" stroke-width="2"/>
  <path d="M 928 32 L 896 32 M 928 32 L 928 64" stroke="#C9A45C" stroke-width="2"/>
  <path d="M 32 508 L 64 508 M 32 508 L 32 476" stroke="#C9A45C" stroke-width="2"/>
  <path d="M 928 508 L 896 508 M 928 508 L 928 476" stroke="#C9A45C" stroke-width="2"/>

  <!-- Top Metadata -->
  <g opacity="0.95">
    <rect x="40" y="42" width="220" height="28" rx="14" fill="#0E0C12" stroke="#C9A45C" stroke-width="1"/>
    <text x="150" y="60" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C9A45C" font-weight="bold">INSTITUTIONAL FILM • 16:9</text>
    <text x="920" y="60" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F6F1E9" letter-spacing="1">4K UHD ● CINEMATIC</text>
  </g>

  <!-- Center Play and Title -->
  <g transform="translate(480, 260)" text-anchor="middle">
    <circle cx="0" cy="-20" r="48" fill="#C9A45C" fill-opacity="0.2" stroke="#C9A45C" stroke-width="2"/>
    <polygon points="-10,-38 20,-20 -10,-2" fill="#F6F1E9"/>

    <text y="70" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="36" fill="#F6F1E9" letter-spacing="-0.5">
      PICT OFFICIAL PROMOTIONAL FILM
    </text>

    <text y="102" font-family="'JetBrains Mono', monospace" font-size="13" fill="#C9A45C" letter-spacing="2">
      DIRECTED &amp; EDITED FOR PUNE INSTITUTE OF COMPUTER TECHNOLOGY
    </text>
  </g>
</svg>`;
fs.writeFileSync(path.join(projectsDir, 'pict-promo-thumb.svg'), pictSvg);

console.log('All poster SVGs generated successfully!');
