const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const distFile = path.resolve(__dirname, '..', 'dist', 'index.html').replace(/\\/g, '/');
const fileUrl = `file:///${distFile}`;

const artifactDir = 'C:\\Users\\pavan\\.gemini\\antigravity\\brain\\abf748d9-e4b4-43d1-aefe-842b894c30a1';
const publicDir = path.resolve(__dirname, '..', 'public', 'images');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const chromeFlags = [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--disable-software-rasterizer',
  '--disable-dev-shm-usage',
  '--disable-web-security',
  '--allow-file-access-from-files',
  '--no-first-run',
  '--no-default-browser-check',
  '--force-device-scale-factor=1',
  '--virtual-time-budget=3000',
  '--hide-scrollbars',
].join(' ');

const views = [
  {
    name: 'portfolio-desktop-full',
    url: `${fileUrl}?nointro=true`,
    width: 1440,
    height: 10500,
  },
  {
    name: 'portfolio-mobile-full',
    url: `${fileUrl}?nointro=true`,
    width: 390,
    height: 15000,
  },
  {
    name: 'section1-brands',
    url: `${fileUrl}?view=brands`,
    width: 1440,
    height: 800,
  },
  {
    name: 'section2-clients',
    url: `${fileUrl}?view=work`,
    width: 1440,
    height: 6400,
  },
  {
    name: 'veloxx-showcase-desktop',
    url: `${fileUrl}?view=veloxx`,
    width: 1440,
    height: 4000,
  },
  {
    name: 'veloxx-showcase-mobile',
    url: `${fileUrl}?view=veloxx`,
    width: 390,
    height: 4600,
  },
  {
    name: 'shuttleclub-showcase-desktop',
    url: `${fileUrl}?view=shuttleclub`,
    width: 1440,
    height: 2500,
  },
  {
    name: 'shuttleclub-showcase-mobile',
    url: `${fileUrl}?view=shuttleclub`,
    width: 390,
    height: 2800,
  },
  {
    name: 'section3-experience',
    url: `${fileUrl}?view=experience`,
    width: 1440,
    height: 8800,
  },
  {
    name: 'pulzion-showcase-desktop',
    url: `${fileUrl}?view=pulzion`,
    width: 1440,
    height: 3400,
  },
  {
    name: 'pulzion-showcase-mobile',
    url: `${fileUrl}?view=pulzion`,
    width: 390,
    height: 5400,
  },
  {
    name: 'striver-showcase-desktop',
    url: `${fileUrl}?view=striver`,
    width: 1440,
    height: 2400,
  },
  {
    name: 'striver-showcase-mobile',
    url: `${fileUrl}?view=striver`,
    width: 390,
    height: 3800,
  },
  {
    name: 'addiction-showcase-desktop',
    url: `${fileUrl}?view=addiction`,
    width: 1440,
    height: 2500,
  },
  {
    name: 'addiction-showcase-mobile',
    url: `${fileUrl}?view=addiction`,
    width: 390,
    height: 4200,
  },
  {
    name: 'section4-creator',
    url: `${fileUrl}?view=creator`,
    width: 1440,
    height: 2150,
  },
  {
    name: 'section4-creator-mobile',
    url: `${fileUrl}?view=creator`,
    width: 390,
    height: 3400,
  },
  {
    name: 'section5-social',
    url: `${fileUrl}?view=social`,
    width: 1440,
    height: 1300,
  },
  {
    name: 'section6-institutional',
    url: `${fileUrl}?view=institutional`,
    width: 1440,
    height: 1650,
  },
  {
    name: 'section6-institutional-mobile',
    url: `${fileUrl}?view=institutional`,
    width: 390,
    height: 1550,
  },
];

console.log('Capturing screenshots...');

for (const v of views) {
  const artifactPath = path.join(artifactDir, `${v.name}.png`);
  const publicPath = path.join(publicDir, `${v.name}.png`);
  const cmd = `"${chromePath}" ${chromeFlags} --window-size=${v.width},${v.height} --screenshot="${artifactPath}" "${v.url}"`;
  console.log(`Capturing ${v.name} (${v.width}x${v.height})...`);
  try {
    execSync(cmd, { stdio: 'ignore' });
    if (fs.existsSync(artifactPath)) {
      fs.copyFileSync(artifactPath, publicPath);
      console.log(`✓ Saved ${v.name}.png`);
    }
  } catch (e) {
    console.error(`Failed ${v.name}:`, e.message);
  }
}

console.log('All captures complete!');
