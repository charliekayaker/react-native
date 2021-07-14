import { useState, useRef, useEffect } from 'react';
import { getUsers } from '../api/getUsers';
import { UserResponse, Usuario } from "../interfaces/UserResponse";

export const useUsuarios = () => {
    
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        loadUsers();
    }, [])
    
  
    const loadUsers = async () => {
       
        const resp = await getUsers.get<UserResponse>('/users', {
            params:{
                page: paginaRef.current
            }
        })

        if(resp.data.data.length > 0){
            setUsuarios(resp.data.data);            
        }else{
            paginaRef.current--;            
            alert('No hay más registros');
        }
            
    }

    const backPage = () => {
        if( paginaRef.current > 1){
            paginaRef.current --;
            loadUsers();
        }        
    }

    const nextPage = () => {
        paginaRef.current++;
        loadUsers();
    }

    const loadUserss = async() =>{
        
        const resp = await getUsers.get<UserResponse>('/users', {
            params:{
                page: paginaRef.current
            }
        })

        if(resp.data.data.length > 0){
            setUsuarios(resp.data.data);            
        }else{
            paginaRef.current--;            
            alert('No hay más registros');
        }
    }
        //Ya podemos devolver este método solo y probarlo :)
    const movePage = (direction: String) =>{

        if(direction === 'N'){

            paginaRef.current++;            

        }else if(direction === 'B'){

            if( paginaRef.current > 1){
                paginaRef.current--;
            }
 
        }else{
            const errorMessage = { errorDescription : 'invalid value received . . . ' };
            throw errorMessage;
        }
        
        loadUserss();
    }

    return {
        usuarios,
        backPage,
        nextPage,
    }
}


