import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { formattedPrice } from "../../objects/formatted-price";
import { Button } from "./style";

export const BuyButton = () => {
    const { cartList } = useContext(CartContext)

    let totalPrice = 0
    for (let i = 0; i < cartList.length; i++) {
        totalPrice += cartList[i].totalPrice;
    }

    const getMessage = () => {
        let message = "Olá! Eu gostaria de encomendar esses produtos:\n\n"

        cartList.forEach(product => {
            message += `- ${product.quantity} ${product.describe}\n`
        })

        message += `\n Total: ${formattedPrice(totalPrice)}`

        return message
    }

    const message = getMessage()
    const messageCoding = encodeURIComponent(message);
    const whatsAppLink = `https://wa.me/+5511997127406?text=${messageCoding}`

    return (
        <Button href={whatsAppLink} target="_blank">
            Faça sua encomenda
        </Button>
    )
}