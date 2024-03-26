import toast from 'react-hot-toast';

let getBooks = () => {
    let getBooksDetails = localStorage.getItem('books')
    if(getBooksDetails){
        return JSON.parse(getBooksDetails)
    }
    else{
        return []
    }
}


 let saveToStorege =(id) => {
    let getBook = getBooks()
    let storeStorege = getBook.find(book => book.bookId === id.bookId)
    if(!storeStorege){
        toast.success(' added')
        getBook.push(id)
        localStorage.setItem('books',JSON.stringify(getBook))
    }
    else{
        toast.error('alredy added')
    }
    
    

 }

 export {saveToStorege,getBooks}