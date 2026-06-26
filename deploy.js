const { spawn } = require('child_process');

const surge = spawn('npx.cmd', ['surge', '--project', '.', '--domain', 'maran-3d-portfolio.surge.sh'], { cwd: 'c:\\Users\\HP\\portfolio demo', shell: true });

surge.stdout.on('data', (data) => {
    const output = data.toString();
    console.log(output);
    if (output.toLowerCase().includes('email:')) {
        surge.stdin.write('maran.bot.portfolio.98765@gmail.com\n');
    }
    if (output.toLowerCase().includes('password:')) {
        surge.stdin.write('maranpass123!@#\n');
    }
});

surge.stderr.on('data', (data) => {
    console.error('ERROR:', data.toString());
});

surge.on('close', (code) => {
    console.log(`Surge process exited with code ${code}`);
});
