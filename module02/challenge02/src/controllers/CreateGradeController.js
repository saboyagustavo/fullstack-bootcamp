import { promises } from 'fs';

class CreateGrade {
    async execute(request, response) {
        let grade = request.body;
        try {
            let json = JSON.parse(await promises.readFile(global.fileName, 'utf8'));

            grade = { id: json.nextId++, timestamp: new Date(), ...grade };
            json.grades.push(grade);

            await promises.writeFile(global.fileName, JSON.stringify(json));

            response.status(201).send(grade);
            response.end();
        } catch (err) {
            response.status(400).send({ error: err.message });
        }
    }
}

export { CreateGrade };
