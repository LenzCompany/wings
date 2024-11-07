// monitor.js

import { spawn } from 'child_process'

function startScript() {

    const script = spawn('node', ['main.js']);

    script.stdout.on('data', (data) => {

        console.log(`Lenzy-ID LOGS: ${data}`);

    });

    script.stderr.on('data', (data) => {

        console.error(`ERROR: ${data}`);

    });

    script.on('close', (code) => {

        console.log(`BOT berhenti dengan kode: ${code}`);

        console.log('Merestart BOT...');

        startScript(); // Restart skrip jika berhenti

    });

}

startScript();