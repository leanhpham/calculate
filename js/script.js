function calcul() {
  let total = document.getElementById('total').value;
  let vip = document.getElementById('vip').value;
  let total_guest = document.getElementById('total_guest').value;
  if (isNaN(total) || isNaN(vip) || isNaN(total_guest) || total <= 0 || vip <= 0 || total_guest <= 0) {
    alert('Nhập số dương !');
  }
  console.log(total_guest,vip);
  if (parseInt(total_guest) < parseInt(vip)) {
    alert('Tổng Số Khách phải lớn hơn Số Khách Lên Vip !');
  }
  else {
    vip_paid = Math.round(parseInt(total) / (parseInt(vip) + parseInt(total_guest - vip)))*4;
    document.getElementById('vip_paid').innerHTML = vip_paid.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});;
    normal_paid = Math.round(parseInt(total) / (parseInt(vip) + parseInt(total_guest - vip)));
    document.getElementById('normal_paid').innerHTML = normal_paid.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});;
    total_paid = vip_paid*parseInt(vip) + normal_paid*parseInt(total_guest-vip);
    document.getElementById('total_paid').innerHTML = total_paid.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});;
    event.preventDefault()
  }
}

function clearResult() {
    document.getElementById('total').value = 0;
    document.getElementById('vip').value = 0;
    document.getElementById('total_guest').value = 0;
    document.getElementById('vip_paid').innerText = '';
    document.getElementById('normal_paid').innerText = '';
    document.getElementById('total_paid').innerText = '';
}