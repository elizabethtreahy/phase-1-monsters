document.addEventListener('DOMContentLoaded', function () {
  fetchMonsters()
});

function fetchMonsters() {
  fetch('http://localhost:3000/monsters')
    .then(response => response.json())
    .then(data => loadMonsters(data))
}
function loadMonsters(monsterData) {
  const startIndex = 0
  const endIndex = 50
  let incrementIndex = 0
  document.getElementById('forward').addEventListener("click", () => {
    if (incrementIndex < 1000) {
      incrementIndex += 50
      console.log('forward', incrementIndex)
      document.getElementById('monster-container').replaceChildren()
      createMonsters(startIndex, endIndex, incrementIndex, monsterData)
    }
  })
  document.getElementById('back').addEventListener("click", () => {
    if (incrementIndex > 0) {
      incrementIndex -= 50
      console.log('back', incrementIndex)
      document.getElementById('monster-container').replaceChildren()
      createMonsters(startIndex, endIndex, incrementIndex, monsterData)
    }
  })
  console.log('default', incrementIndex)
  createMonsters(startIndex, endIndex, incrementIndex, monsterData)
}

function createMonsters(startIndex, endIndex, incrementIndex, monsterData) {
  monsterData.forEach((element, i) => {
    if ((startIndex + incrementIndex <= i) && (endIndex + incrementIndex > i)) {
      const div = document.createElement("div")
      const subName = document.createElement("h3")
      subName.innerText = element.name
      div.append(subName)
      const subAge = document.createElement("div")
      subAge.innerText = element.age
      div.append(subAge)
      const subDescription = document.createElement("div")
      subDescription.innerText = element.description
      div.append(subDescription)
      document.getElementById('monster-container').append(div)
    }
  })
}
