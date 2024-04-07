import StartJob from './main.js';

const runJob = async () => {
    const job = new StartJob();
    await job.exec();
}

await runJob();