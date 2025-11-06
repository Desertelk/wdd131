const input = document.querySelector('#favchap');
const button = document.querySelector('button');


button.addEventListener('click', function() {
    if (input.value !== '') {
        const deleteButton = document.createElement('button');
        const list = document.querySelector('ul');
        const li = document.createElement('li')
        li.textContent = input.value;
        list.append(li);
        input.value = '';
        input.focus();
        deleteButton.textContent = '❌';
        li.append(deleteButton);
    }
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        input.focus();
    });
});
