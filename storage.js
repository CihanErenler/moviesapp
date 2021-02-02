class Local{
    addToStorage(movie){
        let movies = "";

        if(localStorage.getItem('movies') === null){
            movies = [];
            console.log('girdi')
        }else{
            movies = JSON.parse(localStorage.getItem('movies'));
        }

        movies.push(movie);
        localStorage.setItem('movies', JSON.stringify(movies));

    }

    getAllFromStorage(){
        return JSON.parse(localStorage.getItem('movies'));
    }

    loadFromStorage(){
        let movies = this.getAllFromStorage();

        movies.forEach((movie) => {
            ui.addUi(movie);
        })
    }

    deleteFromStorage(movie){
        let movies = this.getAllFromStorage();
        let hmm = JSON.stringify(movie);

        movies.forEach((mo, index) => {
            let moo = JSON.stringify(mo);

            if(moo === hmm){
                movies.splice(index, 1);
                localStorage.setItem('movies', JSON.stringify(movies));
            }
        })
    }

    updateStorage(oldOne,newOne){
        let movies = this.getAllFromStorage();
        let stringOld = JSON.stringify(oldOne);

        movies.forEach((movie, index) => {
            let stringMovie = JSON.stringify(movie);

            if(stringMovie === stringOld){
                
                movies.splice(index, 1, newOne)

                localStorage.setItem('movies', JSON.stringify(movies));
            }
        })
    }
}