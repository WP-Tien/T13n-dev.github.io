import Helper from './helper.js';
// rules of this book: mỗi chapter là 1 section, h2 là chuyên mục, h3, h4, h5 ...

const helper = new Helper();
// console.log( helper.change_alias('Hữu Tiến') );

const book = document.getElementsByClassName('book')[0];
const bookSection = document.querySelectorAll('section');
const arrBookSection = Array.from(bookSection);
var reNav = '';
const tableOfContents = document.querySelector('.table-of-contents nav .summary');

class Screen {
  
  pageWidth() {
    return window.innerWidth != null? window.innerWidth : document.documentElement &&
    document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null
    ? document.body.clientWidth : null;
  }

  pageHeight() {
    return window.innerHeight != null? window.innerHeight : document.documentElement &&
    document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body !=
    null? document.body.clientHeight : null;
  }

}

class Book {
  setEventBtnMenu( hamburger ) {
    hamburger.addEventListener('click', function ( e ) {
      e.preventDefault();
    
      hamburger.classList.toggle("is-actived");
      book.classList.toggle("with-table-of-contents");
    });
  }

  generateTableOfContent() {
    arrBookSection.forEach((value, index, array) => {

      if ( value.querySelector('h1') !== null ) { // Kiểm tra section có h1 tồn tại
        const titleChapterSelect = value.querySelector('h1');

        const generateIdChapter =  helper.change_alias( titleChapterSelect.innerHTML ).replace(/\s+/g,"_");
        
        // set id for chapter h1 tag
        titleChapterSelect.setAttribute("id", generateIdChapter);

        reNav += `<li class='chapter'>`;
        reNav += `<a href='#${generateIdChapter}'>`;
        reNav +=  ` Chapter ${index + 1} : ${titleChapterSelect.innerHTML.trim()} `;
        reNav += `</a>`;
          if ( value.querySelector('h2') !== null ) {  // Kiểm tra section có h1 tồn tại
            const subTitleChapter = value.querySelectorAll('h2');
            const arrsubTitleChapter = Array.from(subTitleChapter);

              arrsubTitleChapter.forEach((value, index, array) => {

                 const generateIdPart = helper.change_alias( value.innerHTML ).replace(/\s+/g,"_");

                 // set id for part in per chapters h2 tag
                 arrsubTitleChapter[index].setAttribute("id", generateIdPart);

                reNav += `<ul>`;
                  reNav += `<li>`;
                    reNav += `<a href='#${generateIdPart}'>`;
                      reNav += value.innerHTML.trim();
                    reNav += `</a>`;
                  reNav += `</li>`;
                reNav += `</ul>`;
              });
          }
        reNav += `</li>`; 
      }
    });

    const nodeReNav = new DOMParser().parseFromString( reNav, 'text/html' );
    const reNavClean = nodeReNav.body;
    // tableOfContents.innerHTML = reNav;

    tableOfContents.append(reNavClean);
  }

}

document.addEventListener("DOMContentLoaded", function() {

  const screen = new Screen();
  const book = new Book();

  if ( screen.pageWidth() < 600 ) {
    var hamburger = document.getElementsByClassName('btn-hamburger')[1]
  } else {
    var hamburger = document.getElementsByClassName('btn-hamburger')[0];
  }
  
  // set event button menu
  book.setEventBtnMenu( hamburger );
  // 
  book.generateTableOfContent();

});
  
