const start = () => {
    doFilter();
    console.log('Array with all elders, aged above 65 : ', doFilter()); //-> (22) [{…}, {…}, {…}, {…}, ...]
    doMap();
    console.log('Array with all elders name and email: ', doMap()); //-> (100) [{…}, {…}, {…}, {…}, ...]
    doForEach();
    console.log('Elders now has retired property: ', doForEach()); //-> (22) [{…}, {…}, {…}, {…}, ...]
    doReduce();
    console.log('Sum of elderly people ages: ', doReduce()); //-> 1533
};

const doMap = () => {
    const filteredElderly = doFilter();
    const elderlyEmailArray = filteredElderly.map((person) => {
        return { name: person.name, email: person.email };
    });
    return elderlyEmailArray;
};

const doFilter = () => {
    const elderlyPeople = people.results.filter((person) => {
        return person.dob.age >= 65;
    });
    return elderlyPeople;
};

const doForEach = () => {
    const mappedElderly = doMap();
    mappedElderly.forEach((person) => {
        person.retired = Math.random() < 0.5;
    });
    return mappedElderly;
};

const doReduce = () => {
    const filteredElderly = doFilter();
    const totalElderlyAges = filteredElderly.reduce((acc, curr) => {
        return acc + curr.dob.age;
    }, 0);
    return totalElderlyAges;
};

start();
