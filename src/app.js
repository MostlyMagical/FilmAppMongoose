require("./db/connection");
const mongoose = require("mongoose");
const {addMovie, listMovies, updateMovie, deleteMovie} = require("./films/film.methods");
const command = process.argv[2];

const app = async() => {
    if (command === "add") {
        await addMovie({
            name: process.argv[3],
            actor: process.argv[4],
            like: process.argv[5],
        });
    } else if (command === "list") {
        await listMovies({
            [process.argv[3]]: process.argv[4],
        })
    } else if (command === "update") {
        await updateMovie(
            {
                name: process.argv[3],
            },
            {
                rating: process.argv[4],
            }
        )
    } else if (command === "delete") {
        await deleteMovie({
            name: process.argv[3]
        })
    } else {
        console.log("incorrect input")
    }
    mongoose.disconnect()
};

app();