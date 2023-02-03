import  getFilm  from './api/getFilm';

const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 5;
//виклик функції з передачею параметрів і додаванням внутрішнього елемента, який є тегом ul
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if(page > 1){ //показати наступну кнопку, якщо значення сторінки більше 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  }
  if(page > 2){ //якщо значення сторінки менше 2, додайте 1 після попередньої кнопки
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if(page > 3){ //якщо значення сторінки більше 3, додайте це (...) після першої li або сторінки
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }
  // скільки сторінок або li відображається перед поточним li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
   // скільки сторінок або li відображається після поточного li
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage  = afterPage + 1;
  }
  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { //якщо довжина перевищує загальну довжину сторінки, продовжуй
      continue;
    }
    if (plength == 0) { //якщо довжина дорівнює 0, додайте +1 до значення довжини
      plength = plength + 1;
    }
    if(page == plength){ //якщо сторінка дорівнює довжині, признач активний рядок в активній змінній
      active = "active";
    }else{ //інакше залиш порожнім активну змінну
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }
  if(page < totalPages - 1){ //якщо значення сторінки менше значення totalPage на -1, тоді показується остання li або сторінка
    if(page < totalPages - 2){ //якщо значення сторінки менше значення totalPage на -2, додайте це (...) перед останньою сторінкою li
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }
  if (page < totalPages) { //показати наступну кнопку, якщо значення сторінки менше totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }
  element.innerHTML = liTag; //додай тег li в тег ul
  return liTag; 
  

}
getFilm().then(res => {
  totalPages = res.total_pages;
  createPagination(totalPages, 5);
})





// const ulTag = document.querySelector('.pagination ul');
// let totalPages = 20;
// // let page = 10;

// //виклик функції з передачею параметрів і додаванням внутрішнього елемента, який є тегом ul
// element.innerHTML = createPagination(totalPages, page);
// function createPagination(totalPages, page){
//     let liTag = '';
//     let active;
//     let beforePages = page - 1;
//     let afterPages = page + 1;

//     if (page > 1){//показати наступну кнопку, якщо значення сторінки більше 1
//         liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
//     }
//     if (page > 2){//якщо значення сторінки менше 2, додайте 1 після попередньої кнопки
//         liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
//         if (page >3){ //якщо значення сторінки більше 3, додайте це (...) після першої li або сторінки
//             liTag += `<li class="dots"><span>...</span></li>`;
//         }
//     }
//     // скільки сторінок або li відображається перед поточним li
//     if (page == totalPages){
//         beforePages = beforePages - 2;
//     }else if(page == totalPages - 1){
//         beforePages = beforePages - 1;
//     }
     
//     // скільки сторінок або li відображається після поточного li
//     if (page == 1){
//         afterPages = afterPages + 2;
//     }else if(page == 2){
//         afterPages = afterPages + 1;
//     }

//     for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){
//         if (pageLength > totalPages){//якщо довжина перевищує загальну довжину сторінки, продовжуй
//             continue;
//         }
//         if (pageLength == 0){//якщо довжина дорівнює 0, додайте +1 до значення довжини
//             pageLength = pageLength + 1
//         }
//         if (page == pageLength){//якщо сторінка дорівнює довжині, признач активний рядок в активній змінній
//             active = "active";
//         }else{//інакше залиш порожнім активну змінну
//             active = "";
//         }
//         liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
//     }

//     if (page < totalPages - 1){//якщо значення сторінки менше значення totalPage на -1, тоді показується остання li або сторінка
//         if (page < totalPages - 2){  //якщо значення сторінки менше значення totalPage на -2, додайте це (...) перед останньою сторінкою li    
//             liTag += `<li class="dots"><span>...</span></li>`;
//         }
//         liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
//     }

//     if (page < totalPages){//показати наступну кнопку, якщо значення сторінки менше totalPage(20)
//         liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
//     }
//     element.innerHTML = liTag;
//     return liTag;
// }
// // // element(totalPages, 5);











// import { getFilm } from './api/getFilm';

// async function main() {
//     const postsData = await getFilm();
//     let currentPage = 1;
//     let rows = 7;
  
//     function displayList(arrData, rowPerPage, page) {
//       const postsEl = document.querySelector('.films');
//       postsEl.innerHTML = "";
//       page--;
  
//       const start = rowPerPage * page;
//       const end = start + rowPerPage;
//       const paginatedData = arrData.slice(start, end);
  
//       paginatedData.forEach((el) => {
//         const postEl = document.createElement("div");
//         postEl.classList.add("film");
//         postEl.innerText = `${el.title}`;
//         postsEl.appendChild(postEl);
//       })
//     }
  
//     function displayPagination(arrData, rowPerPage) {
//       const paginationEl = document.querySelector('.pagination');
//       const pagesCount = Math.ceil(arrData.length / rowPerPage);
//       const ulEl = document.createElement("ul");
//       ulEl.classList.add('pagination__list');
  
//       for (let i = 0; i < pagesCount; i++) {
//         const liEl = displayPaginationBtn(i + 1);
//         ulEl.appendChild(liEl)
//       }
//       paginationEl.appendChild(ulEl)
//     }
  
//     function displayPaginationBtn(page) {
//       const liEl = document.createElement("li");
//       liEl.classList.add('pagination__item')
//       liEl.innerText = page
  
//       if (currentPage == page) liEl.classList.add('pagination__item--active');
  
//       liEl.addEventListener('click', () => {
//         currentPage = page
//         displayList(postsData, rows, currentPage)
  
//         let currentItemLi = document.querySelector('li.pagination__item--active');
//         currentItemLi.classList.remove('pagination__item--active');
  
//         liEl.classList.add('pagination__item--active');
//       })
  
//       return liEl;
//     }
  
//     displayList(postsData, rows, currentPage);
//     displayPagination(postsData, rows);
//   }
  
//   main();