let users = [];
let text = ""

function fetchSomething() {
  fetch('https://randomuser.me/api')
    .then(response => {
    return response.json()
    })
    .then(data => {
      document.getElementById("fetchImage").src = data.results[0].picture.medium
      document.getElementById("fetchName").innerHTML = data.results[0].name.last
    })
    
}