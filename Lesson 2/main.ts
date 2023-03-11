export{}
const product: {id:number,name:string,image:string,link:string,status:string} = {
    id: 1,
    name: "Iphone 12",
    image:"",
    link:"123zxc",
    status: "Iphone"
}
// function Object (test:{id:number,name:string,image:string,link:string,status:string}){
//     return test
// }
// console.log(Object(product))
///
// const projectList: {id:number,name:string}[] = [
//     { id: 1, name: "Du an mau" },
//     { id: 2, name: "Du an 1" },
//     { id: 3, name: "Du an tot nghiep" }
// ]
////

//interface
interface Project {
    id:number,
    name:string
}
const projectList: Project[] =[ 
    {
    id:1,
    name:"Nghĩa"
    },
    {
    id:2,
    name:"Tiến"
    }
]
const productListShow = (pops:Project[]):Project[]=>{
    return pops
}
console.log(productListShow(projectList))
// định nghĩa kiểu dữ liệu với type
/* Object */
type Product = {
    id: number,
    name: string
}
const products: Product = {
    id: 1,
    name: "abcd"
}
/* Array */

type ProductList = { id: number, name: string }[]
const productList: ProductList = [
    { id: 1, name: "abcd" }
]
/* Function */
type AddFunction = (a: number, b: number) => number
const add: AddFunction = (a, b) => {
    return 123
}


// interface Person {
//     id: number,
//     username: string
// }
// interface Employee extends Person {
//     email: string
// }
// const sontv: Employee = {
//     id: 1,
//     username: "sontv",
//     email: "abc@gmail.com"
// }

type Person = {
    id: number | string,
    username: string
}
type Emloyee = { email: string }
type Manager = Person & Emloyee
