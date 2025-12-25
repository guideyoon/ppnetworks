const { exec } = require('child_process');
const path = require('path');

console.log('Starting Next.js development server on port 3004...');
console.log('Working directory:', process.cwd());

const server = exec('npm run dev', {
  cwd: process.cwd(),
  env: { ...process.env, PORT: '3004' }
});

server.stdout.on('data', (data) => {
  console.log(data.toString());
});

server.stderr.on('data', (data) => {
  console.error(data.toString());
});

server.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});

// Handle cleanup
process.on('SIGINT', () => {
  console.log('\nStopping server...');
  server.kill();
  process.exit();
});



