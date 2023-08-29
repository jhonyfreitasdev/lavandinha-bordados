import { images } from "./images"

const chaveirinhos = [
    {
        id: 'chaveirinhos 1',
        image: images.chaveiroPet,
        describe: 'Chaveiro Pet personalizado',
        price: 22.00
    },
    {
        id: 'chaveirinhos 2',
        image: images.chaveiroPet2,
        describe: 'Chaveiro Pet personalizado',
        price: 22.00
    },
    {
        id: 'chaveirinhos 3',
        image: images.chaveiroMickey,
        describe: 'Chaveiro Mickey',
        price: 22.00
    },
    {
        id: 'chaveirinhos 4',
        image: images.chaveiroNSAparecida,
        describe: 'Chaveiro N.S. Aparecida',
        price: 22.00
    },
    {
        id: 'chaveirinhos 5',
        image: images.chaveiroAbelha,
        describe: 'Chaveiro Abelhinha',
        price: 22.00
    },
]

const bastidores = [
    {
        id: 'bastidor 1',
        image: images.bastidorVenus,
        describe: 'Bastidor Vênus - 16cm',
        price: 54.00
    },
    {
        id: 'bastidor 2',
        image: images.bastidorCoelha,
        describe: 'Bastidor Coelhinha - 16cm',
        price: 54.00
    }
]

const ecobag = [
    {
        id: 'ecobag 1',
        image: images.ecobagLibelula,
        describe: 'Ecobag Libélula',
        price: 56.00
    },
    {
        id: 'ecobag 2',
        image: images.ecobabFloresAlgodao,
        describe: 'Ecobag Flores de Algodão',
        price: 56.00
    },
    {
        id: 'ecobag 3',
        image: images.ecobagGatos,
        describe: 'Ecobag Gato e Arte',
        price: 56.00
    },
    {
        id: 'ecobag 4',
        image: images.ecobagFloresAzuis,
        describe: 'Ecobag Flores Azuis',
        price: 56.00
    },
    {
        id: 'ecobag 5',
        image: images.ecobabPatinhoBranco,
        describe: 'Ecobag Patinho Branco com Bolso',
        price: 60.00
    }
]

const camisetas = [
    {
        id: 'camiseta 1',
        image: images.camisetaSaoJose,
        describe: 'Camiseta São José',
        price: 100.00
    },
    {
        id: 'camiseta 2',
        image: images.camisetaPersonalizada,
        describe: 'Camiseta com bordado personalizado',
        price: 100.00
    }
]

const quadros = [
    {
        id: 'quadro 1',
        image: images.quadroPersonalizado,
        describe: 'Quadro com bordado personalizado',
        price: 100.00
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