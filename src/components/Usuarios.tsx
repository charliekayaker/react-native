import { Usuario } from "../interfaces/UserResponse";
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    /*{ const { usuarios,backPage,nextPage } = useUsuarios(); }*/
    const { usuarios,movePage } = useUsuarios();

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
                        usuarios.map( renderItem )
                    }
              </tbody>
          </table>

          <button 
                className="btn btn-primary"
                onClick={() => movePage('B')}>
                    Anteriores
          </button>
                    &nbsp;
          <button 
                className="btn btn-primary"
                onClick={() => movePage('N')}>
                    Siguientes
          </button>

        </>
    )
}
