var menuIcon = document.querySelector(".menu-icon");
var menuCloseIcon = document.querySelector(".menu-close-icon");
var dropDownMenu = document.querySelector(".dropdown-menu");
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideaFormSection = document.querySelector('.idea-form');
var cardTitle = document.querySelector('.card-title');
var bodyText = document.querySelector('.body-text');
var ideaCardSection = document.querySelector('.idea-cards');

var ideaArray = [];

function toggleHidden() {
  menuIcon.classList.toggle("hidden");
  menuCloseIcon.classList.toggle("hidden");
  dropDownMenu.classList.toggle("hidden");
}

saveButton.addEventListener('click', formValidation);


function createIdeaObject() {
  var newIdea = new Idea(titleInput.value, bodyInput.value);
  ideaArray.unshift(newIdea);
}

function displayCard() {
  ideaCardSection.innerHTML = '';
  for (i = 0; i < ideaArray.length; i++) {
    ideaCardSection.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="card">
        <header>
          <button class="header-star" type="button" name="button">
            <img src="./assets/star-active.svg" alt="">
          </button>
          <button class="header-close" type="button" name="button">
            <img src="./assets/menu-close.svg" alt="">
          </button>
        </header>
        <section class="card-body">
          <h4 class="card-title header-text">${ideaArray[i].title}</h4>
          <p class="body-text">${ideaArray[i].body}</p>
        </section>
        <footer>
          <button class="footer-button" type="button" name="button"><img class="comment-img" src="./assets/comment.svg" alt=""> Comment</button>
        </footer>
      </div>
      `
    )

  }
}



function formValidation() {
  if (titleInput.value !== '' && bodyInput.value !== '') {
    createIdeaObject();
    displayCard();
  }
}
