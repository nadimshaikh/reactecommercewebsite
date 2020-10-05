import React,{createContext,useState} from 'react'
import Adidas from "../ecommerceshoes/Adidas.jpg"
import Adidass from "../ecommerceshoes/Adidass.jpg"
import Hrx from "../ecommerceshoes/Hrx.jpg"
import Hrxx from "../ecommerceshoes/Hrxx.jpg"
import Cr from "../ecommerceshoes/Cr.jpg"
import Nike from "../ecommerceshoes/Nike.jpg"
import Nikee from "../ecommerceshoes/Nikee.jpg"
import Puma from "../ecommerceshoes/Puma.jpg"
export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState([
    {id:1, name:'Adidas', price:600, image:Adidas, status:'hot'},
    {id:2, name:'Adidass', price:400, image:Adidass, status:'new'},
    {id:3, name:'Hrx', price:300, image:Hrx, status:'hot'},
    {id:4, name:'Hrxx', price:100, image:Hrxx, status:'hot'},
    {id:5, name:'Cr', price:700, image:Cr, status:'new'},
    {id:6, name:'Nike', price:200, image:Nike, status:'new'},
    {id:7, name:'Nikee', price:300, image:Nikee, status:'hot'},
    {id:8, name:'Puma', price:500, image:Puma, status:'new'}
    ])
    return (
        
            <ProductsContext.Provider value={{products: [...products]}}>
                {props.children}
            </ProductsContext.Provider>
            
        
    );
};

export default ProductsContextProvider;
