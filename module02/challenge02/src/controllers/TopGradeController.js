import { promises } from 'fs';

class TopGrade {
    async execute(request, response) {
        try {
            const json = JSON.parse(await promises.readFile(global.fileName, 'utf8'));
            const grades = json.grades.filter(
                grade => grade.subject === request.body.subject && grade.type === request.body.type
            );
            if (grades.length) {
                grades.sort((a, b) => {
                    if (a.value < b.value) return 1;
                    else if (a.value > b.value) return -1;
                    else return 0;
                });
                response.send(grades.slice(0, 3));
            } else {
                response.status(404).send({ error: 'No data has been found' });
            }
        } catch (err) {
            response.status(400).send({ error: err.message });
        }
    }
}
export { TopGrade };
