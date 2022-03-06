const submitForm = document.getElementById('formID')
submitForm.addEventListener('submit', fetchTheData)


function fetchTheData(submitEvent) {
    submitEvent.preventDefault()
    // console.log(submitEvent.target)
    const userInput = document.getElementById('searchByID').value   //defines the value of what is put into the form input field   .value is the big takeaway
    fetch(`http://localhost:3000/movies/${userInput}`)
    .then(resp => resp.json())
    // .then(json => console.log(json))
    .then(findMovie)
}

function findMovie(movieObj){
    console.log('movieObj:', movieObj)
    const titleGoesHere = document.getElementById('titleID')
    titleGoesHere.textContent = movieObj.title
    const summaryGoesHere = document.getElementById('summaryID')
    summaryGoesHere.textContent = movieObj.summary
}



































// const submitForm = document.getElementById('formID')
// submitForm.addEventListener('submit', fetchJson)

// function fetchJson (event) {
//     event.preventDefault()
//     const inputValue = document.getElementById('searchByID').value // gets the value of the element AT THE TIME this fxn is called
    
//     fetch('http://localhost:3000/movies')
//         .then(resp => resp.json())
//         .then(json => findMovie(json, parseInt(inputValue)))
// }

// function findMovie(json, inputValue) {
//     const movieObj = json.find(movie => movie.id === inputValue) //everything entered in a form is a string which is why parse int on line 10
//     renderTtitleAndSummary(movieObj)                             // or make the conditional a loose '=='
// }

// function renderTtitleAndSummary(movieObj) {
//     const titleGoesHere = document.getElementById('titleID')
//     const summaryGoesHere = document.getElementById('summaryID')
//     titleGoesHere.textContent = movieObj.title
//     summaryGoesHere.textContent = movieObj.summary
    
// }
