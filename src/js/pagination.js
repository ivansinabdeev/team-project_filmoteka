import { getFilm } from './api/getFilm';

async function main() {
    const postsData = await getFilm();
    let currentPage = 1;
    let rows = 7;
  
    function displayList(arrData, rowPerPage, page) {
      const postsEl = document.querySelector('.posts');
      postsEl.innerHTML = "";
      page--;
  
      const start = rowPerPage * page;
      const end = start + rowPerPage;
      const paginatedData = arrData.slice(start, end);
  
      paginatedData.forEach((el) => {
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerText = `${el.title}`;
        postsEl.appendChild(postEl);
      })
    }
  
    function displayPagination(arrData, rowPerPage) {
      const paginationEl = document.querySelector('.pagination');
      const pagesCount = Math.ceil(arrData.length / rowPerPage);
      const ulEl = document.createElement("ul");
      ulEl.classList.add('pagination__list');
  
      for (let i = 0; i < pagesCount; i++) {
        const liEl = displayPaginationBtn(i + 1);
        ulEl.appendChild(liEl)
      }
      paginationEl.appendChild(ulEl)
    }
  
    function displayPaginationBtn(page) {
      const liEl = document.createElement("li");
      liEl.classList.add('pagination__item')
      liEl.innerText = page
  
      if (currentPage == page) liEl.classList.add('pagination__item--active');
  
      liEl.addEventListener('click', () => {
        currentPage = page
        displayList(postsData, rows, currentPage)
  
        let currentItemLi = document.querySelector('li.pagination__item--active');
        currentItemLi.classList.remove('pagination__item--active');
  
        liEl.classList.add('pagination__item--active');
      })
  
      return liEl;
    }
  
    displayList(postsData, rows, currentPage);
    displayPagination(postsData, rows);
  }
  
  main();