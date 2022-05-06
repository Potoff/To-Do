let taskButton = document.getElementById('addTask');
let content = document.querySelector('.content');


//Fonction qui va se déclencher au clic pour générer la tâche et l'intégrer dans le contenu du DOM
function newCardTask(taskTitle, taskText, taskCategory) {

    //Génération d'une nouvelle DIV, lui ajoute la classe .card-task et l'ajoute à la DIV content
    let card = document.createElement('div');
    card.classList.add('card-task');
    content.appendChild(card);

    //Appel de la fonction getTitle pour récupérer le titre et le placer dans la card
    getTitle(taskTitle, card);
    
    //Récupération de la valeur de l'input TextArea et l'ajoute à la nouvelle carte
    getText(taskText, card);

    //Appel de la fonction choix de catégorie
    category(taskCategory, card)

};

//fonction de récupération du titre, création du bouton et création d'un HEADER de carte
function getTitle(taskTitle, parent){
    taskTitle = document.querySelector('#task-title').value;
    let newTitle = document.createElement('h2');
    newTitle.innerText = taskTitle;
    let header = document.createElement('header');
    header.classList.add('card-header');
    let deleteButton = document.createElement('i');
    deleteButton.classList.add('bi', 'bi-x-circle');
    parent.append(deleteButton);
    deleteButton.addEventListener('click', () => {
       parent.remove();
    });
    header.append(newTitle);
    header.append(deleteButton);
    parent.appendChild(header);
};

//Fonction de récupération du texte
function getText(taskText, parent){
    taskText = document.querySelector('#description').value;
    let newP = document.createElement('p');
    newP.textContent = taskText;
    parent.append(newP);
};

//Fonction de création du bouton de suppresion de la carte
/*function deleteTask(parent) {
    let deleteButton = document.createElement('i');
    deleteButton.classList.add('bi', 'bi-x-circle');
    parent.append(deleteButton);
    deleteButton.addEventListener('click', () => {
       parent.remove();
    });
};*/

//Fonction de récupération de la catégorie
function category(categoryValue, parent){
    categoryValue = document.querySelector('#state').value;
    let newP = document.createElement('p');
    let footer = document.createElement('footer');
    footer.classList.add('card-footer');
    newP.textContent = categoryValue;
    footer.append(newP);
    parent.append(footer);
}

taskButton.addEventListener('click', newCardTask);




