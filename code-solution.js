//Create 2 variable
const text = 'Your childhood teacher did not wrong you when they taught you that there should be three, or four, or five sentences in a paragraph. It is important to understand, however, that the aim in teaching this was not to impart a hard-and-fast rule of grammar, drawn from an authoritative-but-dusty book. The true aim of this strategy was to teach you that your ideas must be well supported to be persuasive and effective.' // string of text
const word = 'you' //the word that is going to be looked for


const search_word = (text, word) => { //function takes 2 argument
    // split the text into individual arrays
    //filter through the text  
    // find a match of the word length
    const result = text.split(" ").filter((w) => w.match(word)).length; 
         return `${word} was found ${result} times.`;
};




console.log(search_word(text , word))

    