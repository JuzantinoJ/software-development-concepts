//Create 2 variable
const text = 'There is a bird' // string of text
const word = "bird" //the word that is going to be looked for

//create a function to find if word exists in the text
const findPattern = (input1, input2) => { //takes 2 arguments
    if (input1.includes(input2)){ //if arg 1 includes input 2 
     return "Word exist" 
    } else {
        return "Word does not exist"
    }
    
}
console.log(findPattern(text,word))