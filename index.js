function darkblue() {
  return document.getElementById('main').className = ('dark-blue')
}

function pink() {
  return (
    document.getElementById('main').className = ('pink')
  )
}

function darkpink() {
  document.getElementById('main').className = ('dark-pink')
}

function colorTime() {
  let a = ['dark-blue', 'dark-pink', 'pink', '']
  let randomItem = a[Math.floor(Math.random() * a.length)];
  document.getElementById('main').className = randomItem
}