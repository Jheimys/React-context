import { createContext, useContext, useState } from "react";

export const PagamentoContext = createContext()
PagamentoContext.displayName = "Pagamentos"

export const PagamentoProvaider = ( { children }) => {
    const tiposDePagamentos = [
        {
            nome: 'Boleto',
            juros: 1,
            id: 1
        },

        {
            nome: 'Cartão de crédito',
            juros: 1.3,
            id: 2
        }, 

        {
            nome: 'PIX',
            juros: 1,
            id: 3
        },

        {
            nome: 'Crediário',
            juros: 1.5,
            id:4
        }
    ]

    const [formaDePagamento, setFormaDePagamento] = useState(tiposDePagamentos[0])

    return(
        <PagamentoContext.Provider value={
            {tiposDePagamentos, formaDePagamento, setFormaDePagamento}
        }>
            {children}
        </PagamentoContext.Provider>
    )
}

export const usePagamentoContext = () => {
    const {

        tiposDePagamentos,
        formaDePagamento,
        setFormaDePagamento,

    } = useContext(PagamentoContext)

    function mudarFormaPagamento(id) {
        const pagamentoAtual = tiposDePagamentos.find(pagamento => pagamento.id === id)
        setFormaDePagamento(pagamentoAtual)
    }

    return{
        tiposDePagamentos,
        formaDePagamento,
        mudarFormaPagamento
    }
}
