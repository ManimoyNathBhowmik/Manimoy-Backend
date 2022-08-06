function trim1() {
    const greeting ='   Hello world!   ';
    console.log(greeting.trim())
}

function changetoLowerCase() {
    const sentence = 'MY NAME IS MANIMOY NATH BHOWMIK';

    console.log(sentence.toLowerCase());
}

function changetoUpperCase() {
    const sentence2 = 'Hello functionup, my name is manimoy nath bhowmik';
    console.log(sentence2.toUpperCase());
}

module.exports.greeting = trim1;
module.exports.sentence = changetoLowerCase;
module.exports.sentence2 = changetoUpperCase;