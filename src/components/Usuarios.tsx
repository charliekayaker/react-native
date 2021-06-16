import { useEffect, useState } from "react"
import { GETUsers } from '../api/GETUsers';
import { UserResponse, Usuario } from "../interfaces/UserResponse";

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        GETUsers.get<UserResponse>('/users').then(resp => {
            setUsuarios(resp.data.data);            
        })
        .catch( console.log );
    }, [])

    const renderItem = ( usuario: Usuario) =>{
            return(
                <tr key={ usuario.id }>
                    <td>
                       <img
                        src={ usuario.avatar }
                        alt={ usuario.first_name}
                        style={{
                            width:40,
                            borderRadius: 100
                        }}
                        /> 
                    </td>
                    <td>{ usuario.first_name } { usuario.last_name }</td>
                    <td>{ usuario.email }</td>
                </tr>
            )
    }

    return (
        <>
          <h3>Usuarios :</h3>
          <table className="table">
              <thead>
                 <tr>
                     <th>Avatar</th>
                     <th>Nombre</th>
                     <th>Email</th>
                 </tr>
              </thead>
              <tbody>
                    {
                        usuarios.map( usuario => renderItem(usuario) )
                    }
              </tbody>
          </table>

          <button 
                className="btn btn-primary">
                    Siguientes
          </button>

        </>
    )
}
