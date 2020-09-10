//async function
async function makeRequest() {
    //try catch statement
    try {
        //use await and make the fetch request
        const responseData = await fetch('https://google.com/testing/url/fetch/api/example')
        
        //convert the response to JSON data
        const responseJSON = await responseData.json()

        //log the response converte to JSON
        console.log(responseJSON)
    }
        catch (error) {
            //log any errors
            console.log(error)

        }
    }

    makeRequest()