getParameter = (key) => {
  
    // Address of the current window
    address = window.location.search
  
    // Returns a URLSearchParams object instance
    parameterList = new URLSearchParams(address)
  
    // Returning the respected value associated
    // with the provided key
    return parameterList.get(key)
}
console.log(getParameter("rating"))

ratingCard = document.querySelector('#rating-card')
thankyouCard = document.querySelector('#thankyou-card')
rating = getParameter("rating")
console.log(rating)

if(rating){
    ratingCard.classList.add('hide');
    thankyouCard.classList.remove('hide');
    summary = document.querySelector('.summary');
    summary.innerHTML = "You selected " + rating + " out of 5";
}
