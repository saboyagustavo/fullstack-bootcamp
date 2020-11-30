const start = () => {
    doFilter();
    console.log('Array with all elders, aged above 65 : ', doFilter()); //-> (22) [{…}, {…}, {…}, {…}, ...]
    doMap();
    console.log('\nArray with all elders name and email: ', doMap()); //-> (100) [{…}, {…}, {…}, {…}, ...]
    doForEach();
    console.log('\nElders now has retired property: ', doForEach()); //-> (22) [{…}, {…}, {…}, {…}, ...]
    doReduce();
    console.log('\nSum of elderly people ages: ', doReduce()); //-> 1533
    doFind();
    console.log('\nFirst Elderly person living in SP, on the filtered list: ', doFind()); //-> { {…}, email: "caroline.teixeira@example.com", …}
    doSome();
    console.log('\nThere are any Elderly person, on the filtered list, living in TO? ', doSome()); //-> true
    doEvery();
    console.log('\nAre all the users in the filtered array from Brazil(BR) ', doEvery()); //-> true
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

const doFind = () => {
    const filteredElderly = doFilter();
    const foundElderInSp = filteredElderly.find((person) => {
        return person.location.state == 'São Paulo';
    });
    return foundElderInSp;
};

const doSome = () => {
    const filteredElderly = doFilter();
    const thereIsElder = filteredElderly.some((person) => {
        return person.location.state == 'Tocantins';
    });
    return thereIsElder;
};

const doEvery = () => {
    const filteredElderly = doFilter();
    const areBrazilian = filteredElderly.every((person) => {
        return person.nat == 'BR';
    });
    return areBrazilian;
};

start();
