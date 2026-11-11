const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const distFile = path.resolve(__dirname, '..', 'dist', 'index.html').replace(/\\/g, '/');
const fileUrl = `file:///${distFile}?view=work`;
const brandsUrl = `file:///${distFile}#collaborations`;

const artifactDir = 'C:\\Users\\pavan\\.gemini\\antigravity\\brain\\abf748d9-e4b4-43d1-aefe-842b894c30a1';
const publicDir = path.resolve(__dirname, '..', 'public', 'images');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const desktopOutArtifact = path.join(artifactDir, 'frames-showcase-desktop.png');
const desktopOutPublic = path.join(publicDir, 'frames-showcase-desktop.png');
const mobileOutArtifact = path.join(artifactDir, 'frames-showcase-mobile.png');
const mobileOutPublic = path.join(publicDir, 'frames-showcase-mobile.png');

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
  '--virtual-time-budget=2000',
  '--hide-scrollbars'
].join(' ');

console.log('Capturing showcase desktop preview at 1440x3600...');
const desktopCmd = `"${chromePath}" ${chromeFlags} --window-size=1440,3600 --screenshot="${desktopOutArtifact}" "${fileUrl}"`;
execSync(desktopCmd, { stdio: 'inherit' });
if (fs.existsSync(desktopOutArtifact)) {
  fs.copyFileSync(desktopOutArtifact, desktopOutPublic);
  console.log('Desktop showcase captured: ' + desktopOutArtifact);
}

console.log('Capturing showcase mobile preview at 390x5200...');
const mobileCmd = `"${chromePath}" ${chromeFlags} --window-size=390,5200 --screenshot="${mobileOutArtifact}" "${fileUrl}"`;
execSync(mobileCmd, { stdio: 'inherit' });
if (fs.existsSync(mobileOutArtifact)) {
  fs.copyFileSync(mobileOutArtifact, mobileOutPublic);
  console.log('Mobile showcase captured: ' + mobileOutArtifact);
}
