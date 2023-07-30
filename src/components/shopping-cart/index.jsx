import { useState } from "react"
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons"
import { CartButton, CartIcon, CounterProducts, CartList, CloseIcon, DivButton } from "./style"

export const ShoppingCart = () => {
    const [statusCartBar, setStatusCartBar] = useState(false)

    return (
        <>
            <CartButton onClick={() => {setStatusCartBar(true)}}>
                <CartIcon icon={faCartShopping} fade />
                <CounterProducts> 0 </CounterProducts>
            </CartButton>

            <CartList id={statusCartBar === true ? 'open' : 'close'}>
                <CloseIcon icon={faXmark} onClick={() => {setStatusCartBar(false)}}/>

                <h2>Carrinho de compras</h2>
                
                <ul>
                    <li>
                        <img src="" alt="imagem do produto" />
                        <p>descrição</p>
                        <p>preço</p>

                        <DivButton>
                            <button>-</button>
                            <p>0</p>
                            <button>+</button>
                        </DivButton>
                    </li>
                </ul>
            </CartList>
        </>
    )
}