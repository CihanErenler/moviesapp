const ui = new UI();
const local = new Local();

// Local veriables
var movie;
var movieUi;
var row;
var oldOne;

document.querySelector('.add-list').addEventListener('click',() => {
    const link = document.getElementById('movie-link').value;
    const name = document.getElementById('movie-name').value;
    const director = document.getElementById('movie-director').value;


    if(link === "" || name === "" || director === ""){
        ui.showAlert('Please fill in empty fields','error')
    }else{
        const movie = new Movie(link,name,director);
        ui.addUi(movie);
        ui.clearFields();
        ui.showAlert('Successfully Added','success');
        ui.fadeout();
        local.addToStorage(movie);

    }

})

// When refresh

window.addEventListener('load', () => {
    local.loadFromStorage();
})

// fade in
const overlay = document.querySelector('.overlay');
const card = document.querySelector('.card');

document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains('add-movie')){
        ui.fadein()
    }

    if(e.target.classList.contains('edit')){
        ui.fadein()

        
        document.querySelector('.add-list').style.display = 'none';
        document.querySelector('.update').style.display = 'block';
        document.querySelector('.movie-header').textContent = 'Update Movie';
        
    
        row = e.target.parentElement.parentElement;

        let link = row.children[0].firstElementChild.getAttribute('src');
        let name = row.children[1].textContent;
        let director = row.children[2].textContent;

        copyFields(link,name,director);

        oldOne = new Movie(link,name,director);
    }

    


    if(e.target.parentElement.classList.contains('times') || e.target.classList.contains('overlay')){
        ui.fadeout()
        ui.clearFields();
        displayButton();
        ui.deleteCardFaceOut();

        setTimeout(() => {
            document.querySelector('.movie-header').textContent = 'Add Movie';
        },500);
    }

    if(e.target.classList.contains('delete')){

        ui.showDeleteModdle();

        let row = e.target.parentElement.parentElement;
        deleteUi = row;

        let link = row.children[0].firstElementChild.getAttribute('src');
        let name = row.children[1].textContent;
        let director = row.children[2].textContent;

        movie = new Movie(link,name,director);

        
    }

    if(e.target.classList.contains('cancel')){
        ui.deleteCardFaceOut();
        ui.fadeout();
    }


    if(e.target.classList.contains('plus')){
        ui.fadein()
    }

})

document.body.addEventListener('keyup', (e) => {
    if(e.key === 'Escape'){
        ui.fadeout();
        ui.clearFields()
        displayButton();
        ui.deleteCardFaceOut();
        
        setTimeout(() => {
            document.querySelector('.movie-header').textContent = 'Add Movie';
        },500);
    }
})

document.querySelector('.confirm').addEventListener('click', () => {

    deleteUi.remove()

    local.deleteFromStorage(movie);
    ui.showAlert('Movie deleted successfully','success',)
    ui.deleteCardFaceOut();
    ui.fadeout();

    console.log('girdi')
})

document.querySelector('.update').addEventListener('click', () => {
    let link = document.getElementById('movie-link').value;
    let name = document.getElementById('movie-name').value;
    let director =  document.getElementById('movie-director').value;

    row.children[0].firstElementChild.setAttribute('src',link);
    row.children[1].textContent = name;
    row.children[2].textContent = director;

    let newOne = new Movie(link,name,director);

    local.updateStorage(oldOne, newOne);
    displayButton()
    ui.showAlert('Successfully Updated','success');
    ui.fadeout();
 })

function displayButton(){
    setTimeout(() => {
        document.querySelector('.add-list').style.display = 'block';
        document.querySelector('.update').style.display = 'none';
    },500)
}

function copyFields(link,name,director){
    document.getElementById('movie-link').value = link;
    document.getElementById('movie-name').value = name;
    document.getElementById('movie-director').value = director;

}

