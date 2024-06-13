const AddBtn = document.getElementById('AddBtn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('closeBtn')
const FirstName = document.getElementById('first_name')
const LastName = document.getElementById('last_name')
const company = document.getElementById('company')
const phone = document.getElementById('phone')
const SubmitBtn = document.getElementById('submit-btn')
const tbody = document.getElementById('tbody')
const cancelBtn = document.getElementById('cancel-btn')

AddBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})

cancelBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})

SubmitBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})

SubmitBtn.addEventListener('click', () => {

    tbody.innerHTML += `
    <tr
              class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 max-[550px]:text-[9px]"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                ${FirstName.value}
              </th>
              <td class="px-6 py-4">${LastName.value}</td>
              <td class="px-6 py-4">${company.value}</td>
              <td class="px-6 py-4">${phone.value}</td>
              <td class="px-6 py-4 flex gap-[20px] max-[550px]:gap-[10px]">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-[-20px] max-[550px]:ml-[0]"
                  >Edit</a
                >
                <a href="#" class="font-medium text-[red] hover:underline"
                  >Delete</a
                >
              </td>
            </tr>
    `
    FirstName.value = ""
    LastName.value = ""
    FirstName.value = ""
    FirstName.value = ""

})
