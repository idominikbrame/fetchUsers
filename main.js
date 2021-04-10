let users = []
let text = ""

function fetchSomething() {
  fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => data.results.forEach(item => users.push(item)))
    console.log(users)
}



const displayUsers = () => {
  let fetchList = document.getElementById("fetchList")
  users.forEach(function(user) {
    //Create name
    let li = document.createElement("li")
    li.innerText = user.name.last + ", " + user.name.first
    //create image tag with attribute
    let img = document.createElement("img")
    img.setAttribute('src', user.picture.large)

    //Create button
    let btn = document.createElement("button")
    btn.innerText = "Show more info"
    btn.addEventListener('click', function(){
      showMoreInfo(user, fetchList)
    })

    //Append list in DOM
    fetchList.appendChild(li)
    fetchList.appendChild(img)
    fetchList.appendChild(btn)
  })
}

const showMoreInfo = (user, fetchList) => {
  let ul = document.createElement('ul')
  let li = document.createElement('li')

  li.innerText = `  Age: ${user.dob.age} 
  Gender: ${user.gender}
  Email: ${user.email}`
  ul.appendChild(li)
  console.log(ul)
}
