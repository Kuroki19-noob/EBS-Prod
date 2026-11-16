const equipment = document.getElementById('borrow-equipment')
const quantity = document.getElementById('borrow-quantity')
const availability = document.getElementById('borrow-availability')
const statusElement = document.getElementById('borrow-status')

const tableContent = {


      rake:{
         equipment:'Rake',
         quantity:1,
         availability:'',
         status:''
      },
      shovel:{
         equipment:'Shovel',
         quantity:1,
         availability:'',
         status:''
      },
      cultivator:{
         equipment:'Cultivator',
         quantity:1,
         availability:'',
         status:''

      },
      wateringcan:{
         equipment:'Watering can',
         quantity:1,
         availability:'',
         status:''
      
      }


}

// User Table functions 

function checkStatus(item){
    item.status  = item.quantity === 0 ? 'Unavailable': 'Available';
    item.availability  = item.quantity === 0 ? 'False': 'True';
}

function renderTable() {
  const tbody = document.getElementById('borrow-table-body');
  tbody.innerHTML = '';

  Object.values(tableContent).forEach(item => {
    checkStatus(item); 

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.equipment}</td>
      <td>${item.quantity}</td>
      <td>${item.availability}</td>
      <td>${item.status}</td>
    `;

    tbody.appendChild(row);

  });
}

document.addEventListener('DOMContentLoaded', renderTable);