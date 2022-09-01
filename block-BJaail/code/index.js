let form=document.querySelector("form");
let bookListRoot=document.querySelector(".book-list");


const nameElm=form.elements.bookName;
const authorElm=form.elements.bookAuthor;
const imageElm=form.elements.bookImage;

class BookList {
  constructor(books=[]){
    this.books=books;
  }

  addBook(name,author,image){
    let book= new Book(name,author,image);
    this.books.push(book);
    this.createUI();
  }

   createUI() {
  bookListRoot.innerHTML="";
  this.books.forEach((book)=>{
  let li=document.createElement("li");
  let img=document.createElement("img");
  let h1=document.createElement("h1");
    h1.innerText=book.name;
  let p=document.createElement("p");
    p.innerText=book.author;
  let button=document.createElement("button");
    button.innerText=book.isRead ? "completed" : "Mark as read";
  button.classList.add("form-button");
    button.addEventListener("click",()=>{
      book.toggleIsRead();
      this.createUI();
    });
  li.append(img,h1,p,button);
  bookListRoot.append(li);
 });
}
}


class Book{
  constructor(name,author,image){
    this.name=name;
    this.author=author;
    this.image=image;
    this.isRead=false;
  }
  
  toggleIsRead(){
    this.isRead=!this.isRead;
  }

}




let library= new BookList();

function handleSubmit(event){
  event.preventDefault();
  const name=nameElm.value;
  const author=authorElm.value;
  const image=imageElm.value;
  console.log(name,author,image);
  
  library.addBook(name,author,image);

  nameElm.value="";
  authorElm.value="";
  imageElm.value="";

}
form.addEventListener("submit",handleSubmit);