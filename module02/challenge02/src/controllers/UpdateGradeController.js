import { promises } from 'fs';

class UpdateGrade {
    async execute(request, response) {
        try {
            let editedGrade = request.body;

            let json = JSON.parse(await promises.readFile(global.fileName, 'utf8'));
            let index = json.grades.findIndex(grade => grade.id === editedGrade.id);

            if (index === -1) {
                throw new Error(`ID ${index} does not exist.`);
            }

            if (editedGrade.student) {
                json.grades[index].student = editedGrade.student;
            }
            if (editedGrade.subject) {
                json.grades[index].subject = editedGrade.subject;
            }
            if (editedGrade.type) {
                json.grades[index].type = editedGrade.type;
            }
            if (editedGrade.value) {
                json.grades[index].value = editedGrade.value;
            }

            await promises.writeFile(global.fileName, JSON.stringify(json));

            response.status(201).send(editedGrade);
            response.end();
        } catch (err) {
            response.status(400).send({ error: err.message });
        }
    }
}

export { UpdateGrade };
