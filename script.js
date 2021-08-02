const menu = [
  {
    id: 1,
    title: 'project name goes here',
    category: 'website',
    img: './assets/images/portfolio/portfolio-1.jpg',
  },
  {
    id: 2,
    title: 'project name goes here',
    category: 'portal',
    img: './assets/images/portfolio/portfolio-2.jpg',
  },
  {
    id: 3,
    title: 'project name goes here',
    category: 'website',
    img: './assets/images/portfolio/portfolio-3.jpg',
  },
  {
    id: 4,
    title: 'project name goes here',
    category: 'mobile',
    img: './assets/images/portfolio/portfolio-4.jpg',
  },
  {
    id: 5,
    title: 'project name goes here',
    category: 'mobile',
    img: './assets/images/portfolio/portfolio-5.jpg',
  },
  {
    id: 6,
    title: 'project name goes here',
    category: 'ecommerce',
    img: './assets/images/portfolio/portfolio-6.jpg',
  },
  {
    id: 7,
    title: 'project name goes here',
    category: 'api',
    img: './assets/images/portfolio/portfolio-7.jpg',
  },
  {
    id: 8,
    title: 'project name goes here',
    category: 'api',
    img: './assets/images/portfolio/portfolio-8.jpg',
  },
  {
    id: 9,
    title: 'project name goes here',
    category: 'ecommerce',
    img: './assets/images/portfolio/portfolio-9.jpg',
  },
];

// ******* set date *******
// const date = document.getElementById('date');
// date.innerHTML = new Date().getFullYear();

// DOM ITEMS
const menuContainer = document.querySelector('.menu-item');
const filterBtns = document.querySelectorAll('.filter-btn');

// Loading the DOM
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
});

const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="col-lg-4 col-md-6">
            <div class="portfolio-box shadow">
                <img src=${item.img} alt=${item.title} title=${item.title} class="img-fluid">
                <div class="portfolio-info">
                    <div class="caption">
                        <h4>${item.title}</h4>
                        <p">${item.category}</p>
                    </div>
                </div>
            </div>
            </div>`;
  });
  displayMenu = displayMenu.join('');
  menuContainer.innerHTML = displayMenu;
};

filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === 'all') {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});
