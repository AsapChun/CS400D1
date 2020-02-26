/*
Write a generator that is initialized with a sentence and that emits each word of the sentence in
turn.
 */
function* getEachWord (sen){
    const words = sen.split(" ");
    for(let i = 0; i<words.length;i++){
        yield words[i];
    }
}

const sen = 'All I know is something like a bird within her sang';
const gen = getEachWord(sen);
let counter =10;
while(counter >= 0){
    console.log(gen.next().value);
    counter--;
}