const Film = require("./film.model");

exports.addMovie = async (newFilm) => {
    try{
        const movie = new Film(newFilm)
        await movie.save()
    }catch (error) {
        console.log(error)
    }
};

exports.listMovies = async (searchQuery) => {
    try{
        const list = await Film.find(searchQuery).exec()
        console.log(list)
    } catch (error){
        console.log(error)
    }
}

exports.updateMovie = async (query, updateValue) => {
    try{
        await Film.findOneAndUpdate(query, updateValue)
        console.log(
            `${query.name} rating updated to ${updateValue.rating}`
        )
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (film) => {
    try {
        await Film.findOneAndDelete(film)
        console.log(`${film.name} successfully deleted`)
    } catch (error) {
        console.log(error)
    }
}