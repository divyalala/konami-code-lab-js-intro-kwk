const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(){
  const input = document.querySelector('body')
  var i = 0
  input.addEventListener('keydown',function(e){
    var key = parseInt(e.which || e.detail)
    if (key === code[i]) {
      i++
      if (i === code.length-1) {
        alert('You entered the Konami code!')
        i = 0
      }
    } else {
      i = 0
    }
  })
  return i
}

//init()
