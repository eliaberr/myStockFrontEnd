import { getProducts } from "../helpers/api";

export  async function fetchProducts(getProductsParameters:string){
    try {
      const productsData = await getProducts(getProductsParameters);
      return productsData
    } catch (error) {
      return error
    }
};