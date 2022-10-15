function adicionar(){
    const qtdClientes = Number(prompt('Digite a quantidade de clientes que você deseja cadastrar: '));
    
    for (let i = 1; i <= qtdClientes; i++) {
        
    const nome = prompt('Digite o nome do cliente');
    const email = prompt('Digite o e-mail do cliente');
    const telefone = prompt('Digite o telefone do cliente');
    const clientes = document.getElementById('clientes');
    const tr = document.createElement('tr');
    const tdNome = document.createElement('td');
    tdNome.innerText = nome;
    const tdEmail = document.createElement('td');
    tdEmail.innerText = email;
    const tdTelefone = document.createElement('td');
    tdTelefone.innerText = telefone;

    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefone);
    
    clientes.appendChild(tr);

    tdNome.addEventListener('click',function(){
        alterar(this);
    });
    tdEmail.addEventListener('click',function(){
        alterar(this);
    });
    tdTelefone.addEventListener('click',function(){
        alterar(this);
    });

    }
    
  
}
document.getElementById('add').addEventListener('click',adicionar);

function alterar(elemento){
    elemento.innerText = prompt('Digite o novo registro: ');
    if(elemento.innerText == ""){
        elemento.remove();
    
    }
}

const itensTabela = document.querySelectorAll('#clientes td');
for(let i = 0; i < itensTabela.length; i++){
    itensTabela[i].addEventListener('click',function(){
        alterar(this);
    })
}


