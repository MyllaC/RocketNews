function enviarEmail() {
  const input = document.querySelector('#inputEmail')
  const textInput = input.value
  if (textInput.length == 0) {
    window.alert('[ERRO] Favor adicionar seu e-mail!')
  } else {
    window.alert('E-mail cadastrado com sucesso!')
    //window.alert(`Input digitado ${textInput}`)
  }
}
