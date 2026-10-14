import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const file = 'public/data/users.json';
const users = JSON.parse(readFileSync(file, 'utf-8'));

// Download one image and save it at the given path
async function download(url, path) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  writeFileSync(path, Buffer.from(await res.arrayBuffer()));
}

// Download one by one into public/img/<userId>/, then point the JSON to local files
for (const user of users) {
  const id = user.name.normalize('NFD').toLowerCase().replace(/[^a-z0-9]/g, '');
  mkdirSync(`public/img/${id}`, { recursive: true });

  for (const [i, snap] of user.snaps.entries()) {
    const name = `${i + 1}.jpg`;
    await download(snap.imageURL, `public/img/${id}/${name}`);
    snap.imageURL = `img/${id}/${name}`;
  }
}

writeFileSync(file, JSON.stringify(users, null, 2));
