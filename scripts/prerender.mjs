import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';

const server = await createServer({
  appType: 'custom',
  server: { middlewareMode: true, hmr: false, watch: null, ws: false },
});
try {
  const { render } = await server.ssrLoadModule('/src/prerender.tsx');
  for (const path of ['/', '/openmarkdown/', '/products/', '/products/atm-content-studio/', '/work/']) {
    const file = `dist${path}index.html`;
    const html = await readFile(file, 'utf8');
    const root = '<div id="root"></div>';
    if (!html.includes(root)) throw new Error(`Missing React root in ${file}`);
    await writeFile(file, html.replace(root, () => `<div id="root">${render(path)}</div>`));
  }
} finally {
  await server.close();
}
