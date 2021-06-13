
export const TiposBasicos = () => {
    
    const nombre: string | number = 'Charlie';
    const edad: number = 35;
    const estaActivo: boolean = true;

    const poderes: any[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

    poderes.push('algo');
    poderes.push(2);

    return (
        <>
            <h3>Tipos Básicos</h3>   
            {nombre}, {edad}, {(estaActivo) ? 'Activo' : 'No Activo'}
            <br/>
            {poderes.join(' , ')}            
        </>
    )
}
