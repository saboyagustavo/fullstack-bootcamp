import { promises } from 'fs';

class AverageGrade {
    async execute(request, response) {
        try {
            const json = JSON.parse(await promises.readFile(global.fileName, 'utf8'));

            const grades = json.grades.filter(
                grade => grade.subject === request.params.subject && grade.type === request.params.type
            );

            if (Object.keys(grades) != 0) {
                const sum = grades.reduce((accumulator, current) => {
                    return accumulator + current.value;
                }, 0);

                response.send({ average: sum / grades.length });
            } else {
                response.status(404).send({ error: 'No data has been found' });
            }
        } catch (err) {
            response.status(400).send({ error: err.message });
        }
    }
}
export { AverageGrade };
