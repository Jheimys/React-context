import Carrinho from "pages/Carrinho"
import Feira from "pages/Feira"
import Login from "pages/Login"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import {  UsuarioProvider } from "common/context/Usuario"
import { CarrinhoProvaider } from "common/context/Carrinho"
import { PagamentoProvaider } from "common/context/Pagamento"

export default function Router(){
    
    return(
        <BrowserRouter>
            <Switch>
                <UsuarioProvider>
                    <Route exact path='/'>
                        <Login />
                    </Route>
                    
                    <CarrinhoProvaider>
                        <PagamentoProvaider>
                            <Route path="/feira">
                                <Feira />
                            </Route>
                        
                            <Route path="/carrinho">
                                <Carrinho />
                            </Route>
                        </PagamentoProvaider>
                    </CarrinhoProvaider> 
                </UsuarioProvider> 
            </Switch>
        </BrowserRouter>
    )
}