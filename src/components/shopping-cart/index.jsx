import { useContext, useState } from "react"
import { CartContext } from "../../context/cart"
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons"
import { CartButton, CartIcon, CounterProducts, CartList, CloseIcon, Title, List, ListItem, ImageDiv, Describe, DivButton, BtnRemoveItem, TotalPrice, BuyButton } from "./style"
import { EmptyCart } from "../empty"

export const ShoppingCart = () => {
    const [statusCartBar, setStatusCartBar] = useState(false)
    const { cartList, setCartList } = useContext(CartContext)

    let totalQuantity = 0
    for (let i = 0; i < cartList.length; i++) {
        totalQuantity += cartList[i].quantity;
    }

    let totalPrice = 0
    for (let i = 0; i < cartList.length; i++) {
        totalPrice += cartList[i].totalPrice;
    }

    const formattedPrice = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    const addProduct = (item) => {
        const updatedCartList = cartList.map(product => {
            if (product.id === item.id) {
                return { ...product, quantity: product.quantity + 1, totalPrice: (product.quantity + 1) * product.price };
            } else {
                return product;
            }
        });

        setCartList(updatedCartList);
    }

    const removeProduct = (item) => {
        const updatedCartList = cartList.map(product => {
            if (product.id === item.id) {
                return { ...product, quantity: product.quantity - 1, totalPrice: (product.quantity - 1) * product.price };
            } else {
                return product;
            }
        });

        setCartList(updatedCartList);
    }

    const removeProductFromCart = (item) => {
        const updatedCartList = cartList.filter(product => product.id !== item.id);

        setCartList(updatedCartList);
    }

    return (
        <>
            <CartButton onClick={() => { setStatusCartBar(true) }}>
                <CartIcon icon={faCartShopping} fade />
                <CounterProducts> {totalQuantity} </CounterProducts>
            </CartButton>

            <CartList id={statusCartBar === true ? 'open' : 'close'}>
                <CloseIcon icon={faXmark} onClick={() => { setStatusCartBar(false) }} />

                <Title>Carrinho de compras</Title>

                {cartList.length === 0 ?
                    <EmptyCart />

                    : <List>
                        {cartList.map((item, index) => {
                            return (
                                item.quantity >= 1 ?
                                    <ListItem key={index}>
                                        <ImageDiv>
                                            <img src={item.image} alt="imagem do produto" />
                                        </ImageDiv>

                                        <Describe> {item.describe} </Describe>
                                        <p> {formattedPrice(item.totalPrice)} </p>

                                        <DivButton>
                                            <button type="button" onClick={() => removeProduct(item)}> - </button>

                                            <p> {item.quantity} </p>

                                            <button type="button" onClick={() => addProduct(item)}> + </button>
                                        </DivButton>

                                        <BtnRemoveItem type="button" onClick={() => removeProductFromCart(item)}> X </BtnRemoveItem>
                                    </ListItem>
                                    : ""
                            )
                        })}
                    </List>
                }

                {totalPrice !== 0 ?
                    <TotalPrice>
                        <p>Total</p>
                        <p> {formattedPrice(totalPrice)} </p>
                    </TotalPrice>
                    : ""
                }

                <BuyButton type="button"> Faça sua encomenda </BuyButton>
            </CartList>
        </>
    )
}