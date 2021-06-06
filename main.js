// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal')
modal.classList.add("hidden")

document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.getElementsByClassName("like-glyph")
  post(hearts);
})

const post = (hearts) => {
    for (const heart of hearts) {
     heart.addEventListener("click", (w) => {
       mimicServerCall()
        .then(() => {
          if (w.target.innerHTML == EMPTY_HEART) {
            heart.innerHTML = FULL_HEART
            heart.className = "activated-heart"
          } else { 
            heart.innerText = EMPTY_HEART 
            heart.className = "like-glyph"
          }
          })
          .catch(error => {
            modal.hidden = false 
            modal.classList.remove("hidden");
            const message = document.querySelector("#modal-message")
            message.innerText = error
            setTimeout(() => {
              modal.hidden = true
            }, 5000)
          })   
  })
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
