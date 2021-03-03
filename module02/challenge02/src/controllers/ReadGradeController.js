import { promises } from 'fs';

class ReadGrade {
    async execute(request, response) {
        try {
            const json = JSON.parse(await promises.readFile(global.fileName, 'utf8'));
            const grade = json.grades.find(grade => grade.id === Number(request.params.id));
            grade ? response.send(grade) : response.status(404).send({ error: 'No data has been found' });
        } catch (err) {
            response.status(400).send({ error: err.message });
        }
    }
}

export { ReadGrade };
