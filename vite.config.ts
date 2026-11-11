import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'video-path-aliases',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/videos/striver/')) {
            req.url = req.url.replace('/videos/striver/', '/videos/stirver/');
          }
          if (req.url && req.url.startsWith('/videos/addiction26/')) {
            req.url = req.url.replace('/videos/addiction26/', '/videos/addiction/');
          }
          if (req.url && req.url.includes('/videos/random/')) {
            const cleanUrl = req.url.replace(/^.*\/videos\/random\//, '');
            const rawName = decodeURIComponent(cleanUrl.split('?')[0]);
            let targetFile = path.resolve('public/videos/random', rawName);
            if (!fs.existsSync(targetFile)) {
              const withSpace = rawName.replace(/reel1\((\d)\)\.mp4/, 'reel1 ($1).mp4');
              const resolvedWithSpace = path.resolve('public/videos/random', withSpace);
              if (fs.existsSync(resolvedWithSpace)) {
                targetFile = resolvedWithSpace;
              }
            }
            if (fs.existsSync(targetFile) && fs.statSync(targetFile).isFile()) {
              const stat = fs.statSync(targetFile);
              res.setHeader('Content-Type', 'video/mp4');
              res.setHeader('Accept-Ranges', 'bytes');
              if (req.method === 'HEAD') {
                res.setHeader('Content-Length', stat.size);
                res.writeHead(200);
                res.end();
                return;
              }
              const range = req.headers.range;
              if (range) {
                const parts = range.replace(/bytes=/, "").split("-");
                const start = parseInt(parts[0], 10);
                const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
                res.writeHead(206, {
                  'Content-Range': `bytes ${start}-${end}/${stat.size}`,
                  'Content-Length': (end - start) + 1,
                  'Content-Type': 'video/mp4',
                  'Accept-Ranges': 'bytes',
                });
                fs.createReadStream(targetFile, { start, end }).pipe(res);
              } else {
                res.writeHead(200, {
                  'Content-Length': stat.size,
                  'Content-Type': 'video/mp4',
                  'Accept-Ranges': 'bytes',
                });
                fs.createReadStream(targetFile).pipe(res);
              }
              return;
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 3000,
    open: false,
    host: true,
    allowedHosts: true,
    watch: {
      ignored: ['**/public/videos/**', '**/*.mp4']
    }
  }
});
