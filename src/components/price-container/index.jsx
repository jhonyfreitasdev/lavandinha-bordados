import { useContext } from 'react'
import { CartContext } from '../../context/cart'
import { Container,  DivButton } from './style'

export const PriceContainer = ({item}) => {
    const { cartList, setCartList } = useContext(CartContext)         

    const formattedPrice = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    const addProduct = (item) => {
        const updatedCartList = cartList.map(product => {
            if (product.id === item.id) {
                return { ...product, quantity: product.quantity + 1, totalPrice: (product.quantity + 1) * product.price };
            } else {
                return product;
            }
        });
        console.log(item);

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

    return (
        <Container>
            <p> {formattedPrice(item.totalPrice)} </p>

            <DivButton>
                <button type="button" onClick={() => removeProduct(item)}> - </button>
                <p> {item.quantity} </p>
                <button type="button" onClick={() => addProduct(item)}> + </button>
            </DivButton>
        </Container>
    )
}