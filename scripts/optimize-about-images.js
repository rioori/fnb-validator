const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const OUT = path.join(__dirname, '..', 'public', 'about');
const DL = 'C:\\Users\\ADMIN\\Downloads';

async function run() {
  // Profile photo — crop center square, resize 400x400, WebP
  console.log('Processing profile photo...');
  const profileInput = sharp(path.join(DL, 'khang pham.png'));
  const meta = await profileInput.metadata();
  const side = Math.min(meta.width, meta.height);
  await profileInput
    .extract({
      left: Math.floor((meta.width - side) / 2),
      top: Math.floor((meta.height - side) / 2),
      width: side,
      height: side,
    })
    .resize(400, 400)
    .webp({ quality: 82 })
    .toFile(path.join(OUT, 'khang-pham.webp'));
  console.log('  -> khang-pham.webp');

  // Logos — resize to 120px wide (maintain aspect ratio), WebP
  const logos = [
    { src: 'EHG.png', dst: 'logo-ehg.webp' },
    { src: 'tiki.png', dst: 'logo-tiki.webp' },
    { src: 'kamereo.png', dst: 'logo-kamereo.webp' },
    { src: 'KredivoGroup-Logo-1.png', dst: 'logo-kredivo.webp' },
    { src: 'Sadec Quan.png', dst: 'logo-sadec.webp' },
    { src: 'NUS.png', dst: 'logo-nus.webp' },
    { src: 'validator-logo.png', dst: 'logo-validator.webp' },
  ];

  for (const { src, dst } of logos) {
    console.log(`Processing ${src}...`);
    await sharp(path.join(DL, src))
      .resize({ width: 120, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(OUT, dst));
    console.log(`  -> ${dst}`);
  }

  // Show file sizes
  console.log('\nFile sizes:');
  const files = fs.readdirSync(OUT);
  for (const f of files) {
    const stat = fs.statSync(path.join(OUT, f));
    console.log(`  ${f}: ${(stat.size / 1024).toFixed(1)} KB`);
  }
}

run().catch(console.error);
