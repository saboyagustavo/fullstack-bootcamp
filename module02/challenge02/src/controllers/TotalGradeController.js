import { promises } from 'fs';
class TotalGrade {
    async execute(request, response) {
        try {
            const json = JSON.parse(await promises.readFile(global.fileName, 'utf8'));

            const { student, subject } = request.body;

            const grades = json.grades.filter(grade => grade.student === student && grade.subject === subject);

            if (grades != 0) {
                const totalGrade = grades.reduce((accumulator, current) => {
                    return accumulator + current.value;
                }, 0);

                response.send({ student, subject, totalGrade });
            } else {
                response.status(404).send();
            }
        } catch (err) {
            response.status(400).send({ error: err.message });
        }
    }
}

export { TotalGrade };
