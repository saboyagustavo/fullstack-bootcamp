const start = () => {
    console.log(mappedPeople());
};

const mappedPeople = () =>
    people.results.map((person) => {
        return { name: person.name, email: person.email };
    });

start();
