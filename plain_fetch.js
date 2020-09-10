//Plain example:
//Use fetch() method with .then promise handler 
fetch(someUrl)
    .then(response => {
        //when promise gets resolved
        //log received output to the console
        console.log(response)
    })
    .catch(error => {
        //if promise is rejected
        //log received output to the console
        console.log(error)
    })