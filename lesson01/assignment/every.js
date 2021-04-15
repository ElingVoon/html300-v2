// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const everyForm = document.querySelector('#every-form')

  everyeForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we compare with user input
    let data3 = [0, 1, 2, 3, 5, 8]

    const inputField3 = document.querySelector('#every-form .input')
    const userInput3 = inputField3.value
    const userNumber3 = parseInt(userInput3)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data3.push(userNumber)

      // Use every to compare user's input to all the numbers in the data array

	    const isBelowThreshold = data3.every(userInput3) > 8;

      // // Use every to compare all the numbers in the data array
      // const isBelowThreshold = (currentValue) => currentValue > 8;

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#every-form .output').innerHTML = isBelowThreshold
    }

    // Clear the form field so the user can try again
    inputField3.value = ''
  })
})
