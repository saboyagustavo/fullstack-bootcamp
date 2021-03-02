import { promises } from 'fs';
class DeleteGrade {
    async execute(request, response) {
        try {
            const json = JSON.parse(await promises.readFile(global.fileName, 'utf8'));
            const index = json.grades.findIndex(grade => grade.id === Number(request.params.id));

            if (index === -1) {
                throw new Error(`ID ${index} does not exist.`);
            }

            const deletedGrade = json.grades[index];
            json.grades.splice(index, 1);

            let id = 0;
            for (let grade of json.grades) {
                grade.id = ++id;
            }

            json.nextId = json.grades.length + 1;
            await promises.writeFile(global.fileName, JSON.stringify(json));

            response.json({ message: 'Grade successfully removed.', Grade: deletedGrade });
            response.end();
        } catch (err) {
            response.status(400).send({ error: err.message });
        }
    }
}

export { DeleteGrade };
