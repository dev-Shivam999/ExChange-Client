/// <reference types="vite/client" />
interface Post3 {
    success: boolean;
    message: string | lol;
    id: string
}
type lol = {
  
        
            email
            : string
            name
            :
            string
            number
            :
            string
         Private:boolean
          
        

    pic: string
    
}



type Ad = {
    ProductName: string,
    ProductPrice: string,
    ProductTittle: string,
    ProductType: string,
    ProductDiscretion: string,
    UserId: string,
    ProductImg: string,
    _id: string
    Private:boolean
}
type Ad2 = {
    Private:boolean
    ProductSale: string,
    ProductSale:string
    username: string
    SubLocation:string,
    District:string
    ProductName: string,
    ProductPrice: string,
    ProductTittle: string,
    ProductType: string,
    ProductDiscretion: string,
    userId: string,
    ProductImg: [],
    _id: string
}

interface Post1 {
    success: boolean;
    message: Ad2[]
}
interface Post10 {
    success: boolean;
    message: Ad[]|string
}
interface Post0 {
    success: boolean;
    message: string|Ad2
}

interface Post {
    success: boolean;
    message: string | lol;
}

interface U {
    name: string;
    email: string;
    number: string;
    password: string;
    success?: boolean;
    message?: string;
}

interface Pic {
    pic: string;
    picId: string;
}