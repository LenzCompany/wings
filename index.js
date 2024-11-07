// monitor.js

import { spawn } from 'child_process'

function startScript() {

    const script = spawn('node', ['main.js']);

    script.stdout.on('data', (data) => {

        console.log(`STDOUT: ${data}`);

    });

    script.stderr.on('data', (data) => {

        console.error(`STDERR: ${data}`);

    });

    script.on('close', (code) => {

        console.log(`Skrip berhenti dengan kode: ${code}`);

        console.log('Merestart skrip...');

        startScript(); // Restart skrip jika berhenti

    });

}

startScript();