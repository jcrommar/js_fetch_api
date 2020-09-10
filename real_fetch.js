//Real example:
fetch('https://google.com/testing/url/fetch/api/example')
    //convert to JSON format
    .then(response => {
        response.json()
    })
    .then(jsonData => console.log(jsonData))
    .catch(error => {
        //if promise gets rejected
        //log errors to the console
        console.log(error)
    }) 