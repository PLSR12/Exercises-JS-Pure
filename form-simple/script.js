function myScope() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.result-list')

  const pessoas = []

  function getFormData(event) {
    event.preventDefault()

    const name = form.querySelector('.name')
    const lastName = form.querySelector('.lastName')
    const weight = form.querySelector('.weight')
    const height = form.querySelector('.height')

    if (
      name.value !== '' &&
      lastName.value !== '' &&
      weight.value !== '' &&
      height.value !== ''
    ) {
      const dataForm = {
        nome: name.value,
        sobrenome: lastName.value,
        peso: weight.value,
        altura: height.value,
      }

      if (
        pessoas.some(
          (person) =>
            person.nome === dataForm.nome &&
            person.sobrenome === dataForm.sobrenome
        )
      ) {
        alert('Dado já existente')
      } else {
        pessoas.push(dataForm)

        resultado.innerHTML += `
      <li> ${name.value} ${lastName.value} - ${weight.value}Kg - ${height.value}Cm</li>`
      }

      console.log(pessoas)
    } else {
      alert('Preencha todos os campos!!!')
    }
  }
  form.addEventListener('submit', getFormData)
}
myScope()
