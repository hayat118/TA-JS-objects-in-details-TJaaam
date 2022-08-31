class BookList{
  constructor(allbook,currentIndex){
    this.allbook=[];
    this.currentIndex=currentIndex;
  }

  add([Book]){
    this.allbook.push(Book);
    return this.allbook;
  }
  getCurrentBook(){
    return Book[i]
  }
  getNextBook(){

  }
  getPrevBook(){

  }
  changeCurrentBook(){

  }
}

class Book {
  constructor(title,categoty,author,isRead,finishedDate){
    this.title=title;
    this.categoty=categoty;
    this.author=author;
    this.isRead=false;
    this.finishedDate=finishedDate;
  }

  markBookAsRead(){

  }
}