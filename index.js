const btn = document.getElementById('btn');
const resetBtn = document.getElementById('resetBtn');
const isi = document.getElementById('bagianIsi');
const listNya = document.getElementById('listNomor');


const transaksi = [];

function simpanData() {
    const tanggal = document.getElementById("inputTanggal").value;
    const nominal = document.querySelector('input[type="number"]').value;

    if (!tanggal || !nominal) return alert("Isi semua input dulu!");

    const data = {
        tanggal: tanggal,
        nominal: Number(nominal)
    };

    transaksi.push(data);
    
    const newElement = document.createElement('li');
    newElement.innerText = `${data.tanggal} : Rp${data.nominal}`;

    const deletebtn = document.createElement('button');
    deletebtn.innerText = 'x';

    deletebtn.addEventListener('click', function() {
        newElement.remove();
        transaksi.splice(transaksi.indexOf(data), 1);
    });

    newElement.appendChild(deletebtn);
    listNya.appendChild(newElement);
        
}

function hapusSemua() {
    transaksi.length = 0;
    listNya.innerHTML = "";
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    simpanData();
});

resetBtn.addEventListener('click', function(e){
    e.preventDefault();
    hapusSemua();
});
