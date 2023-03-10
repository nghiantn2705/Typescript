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
/// Định nghĩa Kiểu dữ liệu Type
/*Object*/
/*Array*/
/*Function*/