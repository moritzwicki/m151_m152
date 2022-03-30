import {Sequelize} from "sequelize";

const sequelize = new Sequelize({dialect: "sqlite", storage: "../movie.db",});

const Movies = test();

export function getAll() {
    console.log(sequelize.get());
}


export function get(id) {

}

export function remove(id) {

}

export function save(movie) {

}

function test() {
    return sequelize.define(
        "Movies", {
            title: {
                type: Sequelize.STRING,
            },
            year: {
                type: Sequelize.INTEGER,
            },
        }, {timestamps: false}
    );
}
