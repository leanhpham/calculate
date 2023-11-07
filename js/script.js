function calcul() {
  let total = document.getElementById('total').value;
  let vip = document.getElementById('vip').value;
  let normal = document.getElementById('normal').value;
  if (isNaN(total) || isNaN(vip) || isNaN(normal) || total <= 0 || vip <= 0 || normal <= 0) {
    alert('Nhập số dương !');
  }
  else {
    vip_paid = Math.round(parseInt(total) / (parseInt(vip) + parseInt(normal)))*4;
    document.getElementById('vip_paid').innerHTML = vip_paid.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});;
    normal_paid = Math.round(parseInt(total) / (parseInt(vip) + parseInt(normal)));
    document.getElementById('normal_paid').innerHTML = normal_paid.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});;
    total_paid = vip_paid*parseInt(vip) + normal_paid*parseInt(normal);
    document.getElementById('total_paid').innerHTML = total_paid.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});;
    event.preventDefault()
  }
}

function clearResult() {
    document.getElementById('total').value = 0;
    document.getElementById('vip').value = 0;
    document.getElementById('normal').value = 0;
    document.getElementById('vip_paid').innerText = '';
    document.getElementById('normal_paid').innerText = '';
    document.getElementById('total_paid').innerText = '';
}