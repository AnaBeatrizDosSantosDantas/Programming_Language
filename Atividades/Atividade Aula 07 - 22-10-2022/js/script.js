function addNum(x) {
    let senha = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = senha + x;
  }
  
  function tamanhoMaximo() {
    let tamanho = document.getElementById("result").innerText;

    if (tamanho.length > 6) {
      alert("A senha possui no máximo seis dígitos. Por favor, tente novamente!");
      apagar();
    }
  }
  
  function apagar() {
    document.getElementById("result").innerHTML = "";
  }

  function validar() {
    let senha = document.getElementById("result").innerHTML
    if (senha == "1234") {
      alert("Acesso Permitido!");
    } else {
      alert("Senha Incorreta! Tente novamente.");
    }
  
    apagar();
  }