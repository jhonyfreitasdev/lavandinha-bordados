import { images } from "../images"

const chaveirinhos = [
    {
        image: images.chaveiroPet,
        describe: 'Chaveiro pet personalizado',
        price: 'R$ 22,00'
    },
    {
        image: images.chaveiroPet2,
        describe: 'Chaveiro pet personalizado',
        price: 'R$ 22,00'
    },
    {
        image: images.chaveiroMickey,
        describe: 'Chaveiro Mickey',
        price: 'R$ 22,00'
    },
    {
        image: images.chaveiroNSAparecida,
        describe: 'Chaveiro N.S. Aparecida',
        price: 'R$ 22,00'
    },
    {
        image: images.chaveiroAbelha,
        describe: 'Chaveiro Abelhinha',
        price: 'R$ 22,00'
    },
]

const bastidores = [
    {
        image: images.bastidorVenus,
        describe: 'Bastidor Vênus - 16cm',
        price: 'R$ 54,00'
    },
    {
        image: images.bastidorCoelha,
        describe: 'Bastidor Coelhinha - 16cm',
        price: 'R$ 54,00'
    }
]

const ecobag = [
    {
        image: images.ecobagLibelula,
        describe: 'Ecobag Libélula',
        price: 'R$ 56,00'
    },
    {
        image: images.ecobabFloresAlgodao,
        describe: 'Ecobag Flores de Algodão',
        price: 'R$ 56,00'
    },
    {
        image: images.ecobagGatos,
        describe: 'Ecobag Gato e Arte',
        price: 'R$ 56,00'
    },
    {
        image: images.ecobagFloresAzuis,
        describe: 'Ecobag Flores Azuis',
        price: 'R$ 56,00'
    },
]

const camisetas = [
    {
        image: images.camisetaSaoJose,
        describe: 'Camiseta São José',
        price: 'R$ 100,00'
    },
    {
        image: images.camisetaPersonalizada,
        describe: 'Camiseta com bordado personalizado',
        price: 'R$ 100,00'
    }
]

const quadros = [
    {
        image: images.quadroPersonalizado,
        describe: 'Quadro com bordado personalizado',
        price: 'R$ 100,00'
    }
]

export const products = [
    {
        name: 'chaveirinhos',
        list: chaveirinhos
    },
    {
        name: 'bastidores',
        list: bastidores
    },
    {
        name: 'ecobag',
        list: ecobag
    },
    {
        name: 'camisetas',
        list: camisetas
    },
    {
        name: 'quadros',
        list: quadros
    }
]