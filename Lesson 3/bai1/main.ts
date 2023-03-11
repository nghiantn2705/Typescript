export {}
interface Object {
    id:number,
    name:string,
    image:string,
    link:string,
    member:number
}
const projectList: Object[] =[
    {
        id: 1,
        name: "Iphone 14",
        image: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
        link:"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
        member: 1
    },
    {
        id: 2,
        name: "Iphone 13",
        image: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
        link:"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
        member: 2
    },
    {
        id: 3,
        name: "Iphone 12",
        image: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
        link:"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
        member: 3
    }
]
const product1:Object = {
    id: 10,
    name: "Iphone X",
    image: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
    link:"https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
    member: 6
}
const valueId = 1
function deleteProject (id){
    const newProjectList = projectList.filter((item)=>item.id !== id)
    console.log(newProjectList)
    return newProjectList
}
const addProject = (product:Object)=>{
    console.log(projectList)
    return projectList.push(product)
}
const listProject = (product:Object[])=>{
    addProject(product1)
    deleteProject(valueId)
    const app = document.querySelector("#app")
    if(app){
       app.innerHTML = product.map((pop,index)=>{
        
            return /*html*/`
                <div>${pop.name}</div>
                <div>${pop.image}</div>
                <div>${pop.link}</div>
                <div>${pop.member}</div>
            `
        }).join("")
    }else{
        console.log("Không tìm thấy")
    }
}
listProject(projectList)
