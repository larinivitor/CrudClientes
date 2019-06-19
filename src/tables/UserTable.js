import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Cargo</th>
        <th>Opções</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.position}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Deletar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Sem clientes</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
