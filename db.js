const conectar = async () => {  //funções async retornam promises (como aqui é uma arrow function não precisa ter o nome da função, mas poderia. Ex.: const conectar = async nome-funcao(){} )
    //caso o banco já esteja conectado, retorna a conexão
    if(global.conexao && global.conexao.state != 'disconnected'){
        return global.conexao
    }
    
    const mysql = require('mysql2/promise')
    const con = mysql.createConnection('mysql://root:2435136@localhost:3306/curso_node_cfb')
   
    global.conexao = con
    console.log("banco de dados conectado...")

    return con
}

//SELECT no banco
const todosClientes = async() => {
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM cliente_node')

    return await linhas
}

//INSERT no banco
const insereCliente = async(cliente) => {
    const con = await conectar()

    const sql = 'INSERT into cliente_node (nome, idade) VALUES (?,?)'
    const valores = [cliente.nome, cliente.idade]
    
    await con.query(sql,valores)
}

//UPDATE no banco
const atualizaCliente = async(cliente, id) => {
    const con = await conectar()

    const sql = 'UPDATE cliente_node SET nome=?, idade=? WHERE id=?'
    const valores = [cliente.nome, cliente.idade, id]
    
    await con.query(sql,valores)
}

//DELETE no banco
const deletaCliente = async(id) => {
    const con = await conectar()

    const sql = 'DELETE from cliente_node WHERE id=?'
    const valores = id
    
    await con.query(sql,valores)
}

module.exports = {todosClientes, insereCliente, atualizaCliente, deletaCliente}