// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the includes form, and handle its submit event
  const filterForm = document.querySelector('#filter-form')

  filterForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that will compare to user input
    const data5 = ["wind", "fire", "rain", "storm", "tornado"]

    const inputField5 = document.querySelector('#filter-form .input')
    const userInput5 = inputField5.value

    // Use filter to creates a new array with elements that have more than 4 letters in the existing array
    const filter = data5.filter(userInput5 => userInput5.length > 4);
    console.log(filter);
    document.querySelector('#filter-form .output').innerHTML = filter

    // Clear the form field so the user can try again
    inputField5.value = ''
  })
})
