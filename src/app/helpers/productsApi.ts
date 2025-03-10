export interface Product {
    id?: string;
    name: string;
    description: string;
    price: string;
    quantityStock: string;
}

export const getProducts = async (chosenMethod:string,product?:Product,id?:string): Promise<Product[]> => {
    let idSelected = ""
    
    if (id) {
        idSelected = id
    }

    try {
        const options: RequestInit = {
            method: chosenMethod,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        if ((chosenMethod === "POST" || chosenMethod === "PUT") && product) {
            options.body = JSON.stringify(product);
        }
        const response = await fetch(`http://localhost:3006/products/${idSelected}`, options);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('erro pai', error)
        return []
    }
}

