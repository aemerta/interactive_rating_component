ratingCard = document.querySelector('#rating-card')
thankyouCard = document.querySelector('#thankyou-card')

getParameter = (key) => {
  
    // Address of the current window
    address = window.location.search
  
    // Returns a URLSearchParams object instance
    parameterList = new URLSearchParams(address)
  
    // Returning the respected value associated
    // with the provided key
    return parameterList.get(key)
}

rating = getParameter("rating")

if(rating){
    ratingCard.classList.add('hide');
    thankyouCard.classList.remove('hide');
    summary = document.querySelector('.summary');
    summary.innerHTML = "You selected " + rating + " out of 5";
}
