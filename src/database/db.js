// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto que irá fazer operações no BD
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/*
db.serialize(() => {
    
    // Criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `
    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }
     
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    // Callback function: "chame" a função. Objetivo de salvar o progresso de uma query
    // e continuar a partir dali, após o callback. 
    // db.run(query, values, afterInsertData) 

    // Consultar os dados da tabela
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Tabela consultada com sucesso:")
        console.log(rows)
    })
    
    // Deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [6], function(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso!")
    })
    
    
})
*/