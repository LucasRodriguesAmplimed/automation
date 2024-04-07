import 'dotenv/config'
import StartJob from './index.js';
import { deleteSession } from './utils/utils.js';
const runJob = async () => {
    try {
        const job = new StartJob();
        await job.exec();
        await deleteSession();
    } catch (error) {
        await deleteSession();
        throw new Error(error);
    }
}

await runJob();