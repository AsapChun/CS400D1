/*
Write a generator that is initialized with a sentence and that emits each word of the sentence in
turn.
 */
const getEachWord = (sentence) => {
    const words = sentence.split(" ");
    for(let i =0; i < words.length; i++){
        console.log(words[i]);
    }
}

const sen = 'All I know is something like a bird within her sang';
getEachWord(sen);