const personForm = document.querySelector('#personForm')

let submitHandler = evt => {
  evt.preventDefault()
  const name = evt.target
  console.log(name.personName.value)
  // debugger
  const details = document.querySelector('#details')
  if (name.personName.value.length <= 0) {
    return false
  } else {
    details.innerHTML += `
    <div>
      <strong>${name.personName.value}</strong>
    </div>
    `
  }
  name.personName.value = ''
}
personForm.addEventListener('submit', submitHandler)
