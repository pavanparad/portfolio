const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const distFile = path.resolve(__dirname, '..', 'dist', 'index.html').replace(/\\/g, '/');
const fileUrl = `file:///${distFile}?view=work`;

const artifactDir = 'C:\\Users\\pavan\\.gemini\\antigravity\\brain\\abf748d9-e4b4-43d1-aefe-842b894c30a1';
const publicDir = path.resolve(__dirname, '..', 'public', 'images');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const desktopOutArtifact = path.join(artifactDir, 'selected-works-desktop.png');
const desktopOutPublic = path.join(publicDir, 'selected-works-desktop.png');
const mobileOutArtifact = path.join(artifactDir, 'selected-works-mobile.png');
const mobileOutPublic = path.join(publicDir, 'selected-works-mobile.png');

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

console.log('Testing file URL:', fileUrl);

try {
  console.log('Capturing complete desktop preview at 1440x2600 with scale=1...');
  const desktopCmd = `"${chromePath}" ${chromeFlags} --window-size=1440,2600 --screenshot="${desktopOutArtifact}" "${fileUrl}"`;
  execSync(desktopCmd, { stdio: 'inherit' });
  if (fs.existsSync(desktopOutArtifact)) {
    fs.copyFileSync(desktopOutArtifact, desktopOutPublic);
    console.log('Complete desktop preview captured: ' + desktopOutArtifact);
  }

  console.log('Capturing complete mobile preview at 390x3800 with scale=1...');
  const mobileCmd = `"${chromePath}" ${chromeFlags} --window-size=390,3800 --screenshot="${mobileOutArtifact}" "${fileUrl}"`;
  execSync(mobileCmd, { stdio: 'inherit' });
  if (fs.existsSync(mobileOutArtifact)) {
    fs.copyFileSync(mobileOutArtifact, mobileOutPublic);
    console.log('Complete mobile preview captured: ' + mobileOutArtifact);
  }
} catch (err) {
  console.error('Error during capture:', err.message);
}
