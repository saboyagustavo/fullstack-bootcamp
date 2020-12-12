function inFull(num) {
    const units = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };

    const teens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    const dozens = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    const hundreds = 'hundred';

    let numberStr = num.toString();

    let part1 = `${units[numberStr[2]]}`;
    let part2 = `${dozens[numberStr[1] * 10]}`;
    let part3 = `${units[numberStr[0]]} ${hundreds}`;
    let and = '';
    let hyphen = '';

    // log -> unit (OK)
    if (numberStr.length == 1) {
        part1 = `${units[numberStr % 100]}`;
        part2 = '';
        part3 = '';
    }

    // log 19 -> teen (OK)
    // log 20 -> round dozen (OK)
    // log 39 -> dozen+hyphen+unit (OK)
    if (numberStr.length == 2) {
        if (numberStr[0] == 1) {
            part3 = '';
            part2 = '';
            part1 = `${teens[numberStr % 100]}`;
        } else {
            if (numberStr[1] == 0) {
                hyphen = '';
                part1 = '';
            }
            part3 = '';
            part2 = `${dozens[numberStr[0] * 10]}`;
            hyphen = '-';
            part1 = `${units[numberStr[1 % 100]]}`;
        }
    }

    if (numberStr.length == 3) {
        and = ' and ';
        hyphen = '-';

        if (numberStr[1] == 0) {
            part1 = `${units[numberStr % 100]}`;
            part2 = '';
            and = ' and ';
            hyphen = '';
        }
        if (numberStr[2] == 0) {
            part1 = '';
            and = ' and ';
            hyphen = '';
        }
        if (numberStr[1] == 1) {
            part1 = `${teens[numberStr % 100]}`;
            part2 = '';
            and = ' and ';
            hyphen = '';
        }

        if (numberStr[1] == 0 && numberStr[2] == 0) {
            part1 = '';
            part2 = '';
            and = '';
        }
    }
    /*
     */
    return `${part3}${and}${part2}${hyphen}${part1}`;
}
