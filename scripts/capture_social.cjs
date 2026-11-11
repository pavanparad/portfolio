const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const socialUrl = `http://localhost:3000?view=social`;

const artifactDir = 'C:\\Users\\pavan\\.gemini\\antigravity\\brain\\abf748d9-e4b4-43d1-aefe-842b894c30a1';
const publicDir = path.resolve(__dirname, '..', 'public', 'images');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const desktopOut = path.join(artifactDir, 'social-creator-desktop.png');
const tabletOut = path.join(artifactDir, 'social-creator-tablet.png');
const mobileOut = path.join(artifactDir, 'social-creator-mobile.png');

const chromeFlags = [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--disable-software-rasterizer',
  '--disable-dev-shm-usage',
  '--disable-web-security',
  '--no-first-run',
  '--no-default-browser-check',
  '--force-device-scale-factor=1',
  '--virtual-time-budget=3500',
  '--hide-scrollbars'
].join(' ');

console.log('Capturing Social Media Content (CREATOR CONTENT) desktop preview at 1440x1400...');
execSync(`"${chromePath}" ${chromeFlags} --window-size=1440,1400 --screenshot="${desktopOut}" "${socialUrl}"`, { stdio: 'inherit' });
if (fs.existsSync(desktopOut)) {
  fs.copyFileSync(desktopOut, path.join(publicDir, 'section5-social.png'));
  console.log('Desktop preview captured: ' + desktopOut);
}

console.log('Capturing Social Media Content tablet preview at 820x1800...');
execSync(`"${chromePath}" ${chromeFlags} --window-size=820,1800 --screenshot="${tabletOut}" "${socialUrl}"`, { stdio: 'inherit' });
console.log('Tablet preview captured: ' + tabletOut);

console.log('Capturing Social Media Content mobile preview at 520x3800...');
execSync(`"${chromePath}" ${chromeFlags} --window-size=520,3800 --screenshot="${mobileOut}" "${socialUrl}"`, { stdio: 'inherit' });
console.log('Mobile preview captured: ' + mobileOut);
