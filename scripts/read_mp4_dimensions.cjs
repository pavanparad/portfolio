const fs = require('fs');
const path = require('path');

const dir = path.resolve('public/videos/random');
const files = fs.readdirSync(dir);

function getMp4Dimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  // Find 'tkhd' box
  for (let i = 0; i < buffer.length - 8; i++) {
    if (buffer.toString('ascii', i, i + 4) === 'tkhd') {
      const version = buffer.readUInt8(i + 4);
      // In version 0, width and height are at offset 76 and 80 from box start (i + 4)
      // In version 1, width and height are at offset 88 and 92 from box start
      const widthOffset = version === 0 ? i + 4 + 76 : i + 4 + 88;
      const heightOffset = version === 0 ? i + 4 + 80 : i + 4 + 92;
      
      if (widthOffset + 4 <= buffer.length && heightOffset + 4 <= buffer.length) {
        const width = buffer.readUInt32BE(widthOffset) >> 16;
        const height = buffer.readUInt32BE(heightOffset) >> 16;
        if (width > 0 && height > 0) {
          return { width, height };
        }
      }
    }
  }
  return null;
}

files.forEach(file => {
  const filePath = path.join(dir, file);
  const dims = getMp4Dimensions(filePath);
  if (dims) {
    const ratio = dims.width / dims.height;
    const isVertical = ratio < 0.8;
    const aspect = isVertical ? '9:16' : '16:9';
    console.log(`${file}: ${dims.width}x${dims.height} (${aspect}, ratio=${ratio.toFixed(3)})`);
  } else {
    console.log(`${file}: dimensions not found`);
  }
});
