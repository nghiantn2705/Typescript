"use strict";
export const __esModule = true;
var projectList = [
    {
        id: 1,
        name: "Iphone 14",
        image: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
        link: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
        member: 1
    },
    {
        id: 2,
        name: "Iphone 13",
        image: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
        link: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
        member: 2
    },
    {
        id: 3,
        name: "Iphone 12",
        image: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
        link: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
        member: 3
    }
];
var product1 = {
    id: 10,
    name: "Iphone X",
    image: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
    link: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_16.png",
    member: 6
};
var valueId = 1;
function deleteProject(id) {
    var newProjectList = projectList.filter(function (item) { return item.id !== id; });
    console.log(newProjectList);
    return newProjectList;
}
var addProject = function (product) {
    console.log(projectList);
    return projectList.push(product);
};
var listProject = function (product) {
    addProject(product1);
    deleteProject(valueId);
    var app = document.querySelector("#app");
    if (app) {
        app.innerHTML = product.map(function (pop, index) {
            return /*html*/ "\n                <div>".concat(pop.name, "</div>\n                <div>").concat(pop.image, "</div>\n                <div>").concat(pop.link, "</div>\n                <div>").concat(pop.member, "</div>\n            ");
        }).join("");
    }
    else {
        console.log("Không tìm thấy");
    }
};
listProject(projectList);
