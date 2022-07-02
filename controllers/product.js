import {
  v4 as uuidV4
} from "uuid";


let products = [{
    id: uuidV4(),
    img: "https://hyperpc.ru/cache/hp_product_hyperpc_epix/hyperpc-matrix-40-pc-450x450.jpg",
    "name": "PC Engine EPIX",
    "description": "lorem ipsum alert maybe baby i dont know man hi alo hey no Tolib jon and no",
    price: 500,
  },
  {
    id: uuidV4(),
    img: "https://hyperpc.ru/cache/hp_product_hyperpc_epix/hyperpc-matrix-40-pc-450x450.jpg",
    "name": "PC Engine Tolib",
    "description": "lorem ipsum alert maybe baby i dont know man hi alo hey no Tolib jon and no",
    price: 700,
  },
  {
    id: uuidV4(),
    img: "https://hyperpc.ru/cache/hp_product_hyperpc_epix/hyperpc-matrix-40-pc-450x450.jpg",
    "name": "PC Engine Alishaka",
    "description": "lorem ipsum alert maybe baby i dont know man hi alo hey no Tolib jon and no",
    price: 200,
  },
]


export const getProducts = function (req, res) {
  res.json(products)
}

export const createProduct = function (req, res) {
  const {
    name,
    img,
    description,
    price,
  } = req.body

  products.push({
    name,
    img,
    description,
    price,
    id: uuidV4()
  })

  res.json(products)
}



export const getOneProduct = function (req, res) {
  const productId = req.params.id

  const product = products.find(function (product) {
    return product.id === productId;
  })

  res.json(product)
}



export const deleteProduct = function (req, res) {
  const productId = req.params.id

  products = products.filter(function (product) {
    return product.id !== productId
  })

  res.json(products)
}



export const updateProduct = function (req, res) {
  const productId = req.params.id
  const {
    name,
  } = req.body

  products = products.map(function (product) {
    if (product.id === productId) {
      return {
        name,
        id: product.id
      }
    }
    return product
  })

  res.json(products)
}