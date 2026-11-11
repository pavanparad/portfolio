const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const addictionUrl = `http://localhost:3000?view=addiction`;

const artifactDir = 'C:\\Users\\pavan\\.gemini\\antigravity\\brain\\abf748d9-e4b4-43d1-aefe-842b894c30a1';
const publicDir = path.resolve(__dirname, '..', 'public', 'images');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const desktopOutArtifact = path.join(artifactDir, 'addiction-showcase-desktop.png');
const desktopOutPublic = path.join(publicDir, 'addiction-showcase-desktop.png');
const mobileOutArtifact = path.join(artifactDir, 'addiction-showcase-mobile.png');
const mobileOutPublic = path.join(publicDir, 'addiction-showcase-mobile.png');

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
  '--hide-scrollbars'
].join(' ');

console.log('Capturing addiction showcase desktop preview at 1440x2200...');
const desktopCmd = `"${chromePath}" ${chromeFlags} --window-size=1440,2200 --screenshot="${desktopOutArtifact}" "${addictionUrl}"`;
execSync(desktopCmd, { stdio: 'inherit' });
if (fs.existsSync(desktopOutArtifact)) {
  fs.copyFileSync(desktopOutArtifact, desktopOutPublic);
  console.log('Desktop showcase captured: ' + desktopOutArtifact);
}

console.log('Capturing addiction showcase mobile preview at 390x3400...');
const mobileCmd = `"${chromePath}" ${chromeFlags} --window-size=390,3400 --screenshot="${mobileOutArtifact}" "${addictionUrl}"`;
execSync(mobileCmd, { stdio: 'inherit' });
if (fs.existsSync(mobileOutArtifact)) {
  fs.copyFileSync(mobileOutArtifact, mobileOutPublic);
  console.log('Mobile showcase captured: ' + mobileOutArtifact);
}
