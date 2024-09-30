// table.js
document.addEventListener('DOMContentLoaded', function () {
    const prescriptionTableBody = document.getElementById('prescription-body');
    const vaccinationTable = document.getElementById('vacc-body');
  
    
    prescriptionData.forEach(item => {
      const row = `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${item.datePrescribed}
          </th>
          <td class="px-6 py-4">${item.genericName}</td>
          <td class="px-6 py-4">${item.dosageForm}</td>
          <td class="px-6 py-4">${item.qty}</td>
          <td class="px-6 py-4">${item.instructions}</td>
          <td class="px-6 py-4 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
        </tr>
      `;
      prescriptionTableBody.insertAdjacentHTML('beforeend', row);
    });
    

    vaccData.forEach(item => {
      const row = `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${item.dateAdded}
          </th>
          <td class="px-6 py-4">${item.vaccBrand}</td>
          <td class="px-6 py-4">${item.provider}</td>
          <td class="px-6 py-4">${item.siteGiven}</td>
          <td class="px-6 py-4">${item.dose}</td>
          <td class="px-6 py-4">${item.nextDose}</td>
          <td class="px-6 py-4 text-right">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
          </td>
        </tr>
      `;
      vaccinationTable.insertAdjacentHTML('beforeend', row);
    })

  });
  