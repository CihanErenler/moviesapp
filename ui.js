// Init movie object
class Movie{
    constructor(link,movie,director){
        this.link = link;
        this.name = movie;
        this. director = director;
    }
}

// Add Ui
class UI{
    addUi(movie){
        let row = `<tr>
        <td><img src="${movie.link}" alt=""></td>
        <td>${movie.name}</td>
        <td>${movie.director}</td>
        <td><a href="javascript:void(0);"  class="delete">Delete</a></td>
        <td><a href="javascript:void(0);" class="edit">Edit</a></td>
    </tr>`;

    document.querySelector('.movie-list-items').innerHTML += row;
    }

    clearFields(){
        document.getElementById('movie-link').value = "";
        document.getElementById('movie-name').value = "";
        document.getElementById('movie-director').value = ""; 
    }
    
    showAlert(text, type){
        const warninWrapper = document.querySelector('.warning-wrapper');

        warninWrapper.style.display = "block";

        let div = document.createElement('DIV');
        div.id = 'warning';
        div.classList = `warning-fadein ${type}`
        div.appendChild(document.createTextNode(text));
     
    
        if(warninWrapper.children.length > 0){
           
           let num = warninWrapper.children.length;

           let i;
           for(i = 0; i < num; i++){
               warninWrapper.children[i].style.bottom = (window.innerHeight - (warninWrapper.children[i].offsetTop - 20))+"px";
            }

            warninWrapper.appendChild(div)
            
            setTimeFun();

        }else{
            document.querySelector('.warning-wrapper').appendChild(div)
            setTimeFun();
        }

        function setTimeFun(){
            setTimeout(() => {
                document.getElementById('warning').classList.remove('warning-fadein');
                document.getElementById('warning').classList.add('warning-fadeout');
            },3000)
            
            setTimeout(() => {
                document.getElementById('warning').remove();
                if(warninWrapper.children.length < 1){
                    warninWrapper.style.display = "none";
                }
            },3500)
        }

        
    }

    fadein(){
        overlay.classList.add('overlay-open')
        overlay.style.display = "block";
        card.classList.add('card-fadein');
        card.style.display = "block";
    }
    
    clearFields(){
        const link = document.getElementById('movie-link').value = "",
        name = document.getElementById('movie-name').value = "",
        director = document.getElementById('movie-director').value = ""; 
    }

    fadeout(){
        overlay.classList.remove('overlay-open');
        overlay.classList.add('overlay-close');

        card.classList.remove('card-fadein');
        card.classList.add('card-fadeout')

        setTimeout(() => {
            overlay.style.display = "none";
            card.style.display = "none";
            overlay.classList.remove('overlay-close');
            card.classList.remove('card-fadeout');
        },500)
    }

    showDeleteModdle(){
        overlay.classList.add('overlay-open')
        overlay.style.display = "block";
        document.querySelector('.delete-card').classList.add('card-fadein');
        document.querySelector('.delete-card').style.display = "block";
    }

    deleteCardFaceOut(){
        document.querySelector('.delete-card').classList.remove('card-fadein');
        document.querySelector('.delete-card').classList.add('card-fadeout');

        setTimeout(() => {
            document.querySelector('.delete-card').classList.remove('card-fadeout');
            document.querySelector('.delete-card').style.display = "none";
            overlay.classList.remove('overlay-close');
            overlay.style.display = "none";
            
        },500)
    }
    
}


// Scroll
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        document.querySelector('.plus').style.right = '30px'
        document.querySelector('.plus').style.opacity = '1'
    }else{
        document.querySelector('.plus').style.right = '-100px'
        document.querySelector('.plus').style.opacity = '0'
    }
}







