


// export default {
//     addPaginationList(totalHits, activePage) {

//         if (!totalHits || totalHits <= getFilm.perPage) {
//             refs.paginationBox.classList.add('is-hidden');
//             return;
//         }

//         totalPages =
//             totalHits /  getFilm.perPage <= limit
//                 ? Math.ceil(totalHits /  getFilm.perPage)
//                 : limit;

//         if (!totalHits) return;
//         let arrayPagination;

//         if (totalPages <= 5) {
//             numberOfPagesPagination = totalPages;
//         } else {
//             if (document.body.clientWidth < screenWidth) {
//                 numberOfPagesPagination = 5;
//             } else {
//                 numberOfPagesPagination = 9;
//             }
//         }
//         if (document.body.clientWidth < screenWidth) {
//             arrayPagination = createArrayPaginationMobile(
//                 totalPages <= 5 ? totalPages : numberOfPagesPagination,
//                 activePage,
//                 totalPages,
//             );
//         } else {
//             arrayPagination = createArrayPagination(
//                 totalPages <= 9 ? totalPages : numberOfPagesPagination,
//                 activePage,
//                 totalPages,
//             );
//         }

        // refs.paginationBox.classList.remove('is-hidden');
        // refs.paginationList.innerHTML = '';
        // refs.paginationList.insertAdjacentHTML(
        //     'beforeend',
        //     paginationList(arrayPagination),
        // );
    // },

    // getActivePageForFetch(eventTarget) {
    //     let activePage = +refs.paginationBox.querySelector('.active').textContent;

    //     if (eventTarget.classList.contains('prev')) {
    //         return activePage > 1 ? activePage - 1 : 1;
    //     }
    //     if (eventTarget.classList.contains('next')) {
    //         return activePage < totalPages ? activePage + 1 : totalPages;
    //     }
    //     return +eventTarget.textContent;
    // },

    // getSettingForFetch(activePage) {
    //     let resultArray = [];
    //     const perPage =  getFilm.perPage;

    //     let itemEnd = activePage * perPage;
    //     let itemStart = itemEnd - perPage + 1;

    //     const currentPage = Math.floor(itemStart / FETCH) + 1;

    //     const currentNumStart =
    //         itemStart % FETCH ? (itemStart % FETCH) - 1 : FETCH - 1;

    //     let currentNumEnd = currentNumStart + perPage;

    //     if (currentNumEnd < FETCH) {
    //         resultArray = [
    //             { page: currentPage, numStart: currentNumStart, numEnd: currentNumEnd },
    //         ];
    //         return resultArray;
    //     }

    //     else {
    //         resultArray = [
    //             { page: currentPage, numStart: currentNumStart, numEnd: undefined },
    //         ];
    //         if (FETCH - currentNumStart === perPage) {
    //             return resultArray;
    //         }
    //     }

    //     const nextPage = currentPage + 1;
    //     const nextNumStart = 0;
    //     const nextNumEnd = perPage - (FETCH - currentNumStart);

    //     resultArray = [
    //         ...resultArray,
    //         { page: nextPage, numStart: nextNumStart, numEnd: nextNumEnd },
    //     ];
    //     return resultArray;
    // },

    // getActivePage() {
    //     return +refs.paginationBox.querySelector('.active').textContent;
    // },
// };












// import { getFilm } from './api/getFilm';

// async function main() {
//     const postsData = await getFilm();
//     let currentPage = 1;
//     let rows = 7;
  
//     function displayList(arrData, rowPerPage, page) {
//       const postsEl = document.querySelector('.posts');
//       postsEl.innerHTML = "";
//       page--;
  
//       const start = rowPerPage * page;
//       const end = start + rowPerPage;
//       const paginatedData = arrData.slice(start, end);
  
//       paginatedData.forEach((el) => {
//         const postEl = document.createElement("div");
//         postEl.classList.add("post");
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