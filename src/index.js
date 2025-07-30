// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// Coherent behaviour for exampleRow
addDeleteListenerToContactRow(exampleRow);
addLikeListenerToContactRow(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach((contact) => {
    addNewContactRow(contact);
});

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];
    addNewContactRow(randomContact);
});

// **** Auxiliary functions **** //
function newContactRow(newContact) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>
      <img src="${newContact.pictureUrl}" />
    </td>
    <td> ${newContact.name} </td>
    <td> ${newContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    `;
    return newRow;
}

// ITERATION 2 - Delete Buttons
function addDeleteListenerToContactRow(contactRow) {
    const deleteBtnNode = contactRow.querySelector(".btn-delete");
    deleteBtnNode.addEventListener("click", () => contactRow.remove());
}

// ITERATION 3 - Like Buttons
function addLikeListenerToContactRow(contactRow) {
    const likeBtnNode = contactRow.querySelector(".btn-like");
    likeBtnNode.addEventListener("click", () => likeBtnNode.classList.toggle("selected"));
}

function addNewContactRow(contact) {
    const newRow = newContactRow(contact);
    addDeleteListenerToContactRow(newRow);
    addLikeListenerToContactRow(newRow);
    tableBody.append(newRow);
}
