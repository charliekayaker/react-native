import { useState } from "react";

export const useCounter = (inicial: number = 100) => {
    const [valor, setValor] = useState(inicial);

    const acumular = (numero: number) => {
        setValor(valor + numero);
    }

    return{
        valor,
        acumular
    }

}
