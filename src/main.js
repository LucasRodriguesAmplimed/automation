import StartJob from './index.js';

const runJob = async () => {
    const job = new StartJob();
    await job.exec();
}

await runJob();