// Selecting UI Elements
const author = document.querySelector('#author').value;
const bookName = document.querySelector('#name').value;
const isbn = document.querySelector('#isbn').value;
const listItem = document.querySelector('.item-list');

// Event Handlers
document.querySelector('#booking-keeping-form').addEventListener('submit', addBook);
document.querySelector('.item-list').addEventListener('click', deleteRecord);

function addBook(e) {
    // Creating New item
    const newItem = document.createElement('tr');
    
    //Adding Class to the item 
    newItem.className = 'item';

    // Adding innerHTML to item
    newItem.innerHTML = `
    <td>${listItem.children.length + 1}</td>
    <td>${author}</td>
    <td>${bookName}</td>
    <td>${isbn}</td>
    <td class="text-center"><a href="#" class="btn btn-danger py-1 pxs-3 delete"><i class="fas fa-times"></i></a></td>
    `
    // Adding New Created List to List Item
    listItem.appendChild(newItem);
    
    // Reset Form Input Fields
    resetForm();

    // Prevent Default Behaviour
    e.preventDefault();    
}

// Form Reset Function
function resetForm() {
    author = '';
    bookName = '';
    isbn = '';
}

// Delete Record Function
function deleteRecord(e) {
    if (e.target.parentElement.classList.contains('delete')) {
        e.target.parentElement.parentElement.parentElement.remove();
    } else if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    } 
    // Prevent Default
    e.preventDefault();
}