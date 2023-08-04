import { useContext, useState } from "react"
import { CartContext } from "../../context/cart"
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons"
import { EmptyCart } from "../empty"
import { PriceContainer } from "../price-container"
import { BuyButton } from "../buy-button"
import { formattedPrice } from "../../objects/formatted-price"
import { CartButton, CartIcon, CounterProducts, CartList, CloseIcon, Title, List, ListItem, ImageDiv, Describe, BtnRemoveItem, TotalPrice } from "./style"

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

            {statusCartBar === true ?
                <CartList>
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

                                            <PriceContainer item={item} />

                                            <BtnRemoveItem icon={faXmark} onClick={() => removeProductFromCart(item)} />
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

                    {cartList.length > 0 ? <BuyButton /> : ""}
                </CartList>
                : ""}

        </>
    )
}