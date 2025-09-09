import { build } from 'vite';
import react from '@vitejs/plugin-react';

async function run() {
  try {
    await build({
      plugins: [react()],
      build: {
        outDir: 'dist'
      }
    });
    console.log('Vite build completed.');
  } catch (err) {
    console.error('Build failed:', err);
    process.exit(1);
  }
}

run();
