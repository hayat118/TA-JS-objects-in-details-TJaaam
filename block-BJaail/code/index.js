class MyBookList {
  constructor(title=[],author=[],ISBN=[]){
    this.title=title;
    this.author=author;
    this.ISBN=ISBN;
  }

  add(text){
    let book= new Book(text);
    this.title.push(title);
    this.author.push(author);
    this.ISBN.push(ISBN);
    
  }
  delete(id){
   
  }
}

class Book {
  constructor(text){
    this.text=text;
    this.id=`id-${Date.now}`
  }
}