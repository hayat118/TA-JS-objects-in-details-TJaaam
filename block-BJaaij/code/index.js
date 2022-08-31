class BookList{
  constructor(){
    this.books=[];
    this.currentIndex=0;
  }

  add(books=[]){
    this.books=this.books.concat(books);
    return this.books;
  }
  getCurrentBook(){
    return this.books[this.currentIndex];
  }
  getNextBook(){
    this.currentIndex=this.currentIndex + 1;
    return this.books[this.currentIndex];
  

  }
  getPrevBook(){
    this.currentIndex=this.currentIndex - 1;
    return this.books[this.currentIndex];

  }
  changeCurrentBook(index){
     this.currentIndex=index;
     return this.currentIndex;
  }
}

class Book {
  constructor(title,categoty,author){
    this.title=title;
    this.categoty=categoty;
    this.author=author;
    this.isRead=false;
    this.finishedDate=null;
  }

  markBookAsRead(){
    this.isRead=true;
    this.finishedDate=Date.now();
  }
}

let book1= new Book("Alchemist1","fiction","Paulo coelho");
let book2= new Book("Alchemist2","fiction","Paulo coelho");
let book3= new Book("Alchemist3","fiction","Paulo coelho");
let book4= new Book("Alchemist4","fiction","Paulo coelho");

let library= new BookList();
 
 library .add([book1,book2,book3,book4]);