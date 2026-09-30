const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const { execSync } = require('child_process');
const path = require('path');

const ffmpegPath = ffmpegInstaller.path;
const input = path.resolve('public/assets/VID_20260924_235008_437.mp4');
const output = path.resolve('public/assets/about_video.mp4');

console.log('FFmpeg path:', ffmpegPath);
console.log('Converting', input, '->', output);

try {
  const cmd = `"${ffmpegPath}" -i "${input}" -vcodec libx264 -crf 23 -preset fast -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -acodec aac -movflags +faststart -y "${output}"`;
  console.log('Running:', cmd);
  execSync(cmd, { stdio: 'inherit' });
  console.log('\n✅ Conversion complete! Output:', output);
} catch (err) {
  console.error('❌ Error:', err.message);
}
