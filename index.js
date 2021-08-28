(async () => {
    const db = require('./db')

    //INSERT no banco
    console.log('\nInserir novo cliente\n')
    //await db.insereCliente({nome: 'Vandelei', idade: 28})
   
    //SELECT no banco
    console.log('\nListar clientes\n')
    const clientes = await db.todosClientes()
    console.log(clientes)

     //UPDATE no banco
     console.log('\nAtualizar clientes\n')
     //await db.atualizaCliente({nome: 'Florinda', idade: 64}, 2)

     //DELETE no banco
     console.log('\nDeletar clientes\n')
     await db.deletaCliente(3)
})()


