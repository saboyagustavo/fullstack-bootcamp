import express from 'express';
import { promises } from 'fs';
const router = express.Router();

const readFile = promises.readFile;
const writeFile = promises.writeFile;

router.post('/', async (request, response) => {
    let grade = request.body;
    try {
        let json = JSON.parse(await readFile(global.fileName, 'utf8'));

        grade = { id: json.nextId++, timestamp: new Date(), ...grade };
        json.grades.push(grade);

        await writeFile(global.fileName, JSON.stringify(json));

        response.status(201).send(grade);
        response.end();
    } catch (err) {
        response.status(400).send({ error: err.message });
    }
});

export default router;
