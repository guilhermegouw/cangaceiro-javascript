var campos = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade'),
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  var tr = document.createElement('tr');
  campos.forEach(function (campo) {
    // cria uma td sem informações
    var td = document.createElement('td');
    // Atribui o valor do campo à td
    td.textContent = campo.value;
    // Adiciona a td na tr
    tr.appendChild(td);
  });
  var tdVolume = document.createElement('td');
  // as posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
  tdVolume.textContent = campos[1].value * campos[2].value;
  // adiciona a td que faltava à tr
  tr.appendChild(tdVolume);
  // adiciona a tr
  tbody.appendChild(tr);
  // Limpa o campo da data
  campos[0].value = '';
  // Limpa o campo da quantidade
  campos[1].value = 1;
  // Limpa o campo do valor
  campos[2].value = 0;
  // Foca no campo da data
  campos[0].focus();
});
