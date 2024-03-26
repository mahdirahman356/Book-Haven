import toast from 'react-hot-toast';

let getBooks = () => {
    let getBooksDetails = localStorage.getItem('read')
    if(getBooksDetails){
        return JSON.parse(getBooksDetails)
    }
    else{
        return []
    }
}


 let saveToStorege =(id) => {
    let getBook = getBooks()
    let readStorege = getBook.find(book => book.bookId === id.bookId)
    if(!readStorege){
        toast.success('Books Added to Read List')
        getBook.push(id)
        localStorage.setItem('read',JSON.stringify(getBook))
    }
    else{
        toast.error('You Have Allready Read This Book')
    }
    
    

 }


let getAddWish = () => {
    let getBooksDetails = localStorage.getItem('Wish')
    if(getBooksDetails){
        return JSON.parse(getBooksDetails)
    }
    else{
        return []
    }
}


 let saveToStoregeAddWish =(id) => {
    let getAdd = getAddWish()
    let wishStorege = getAdd.find(book => book.bookId === id.bookId)
    if(!wishStorege){
        toast.success('Books Added to Wish List')
        getAdd.push(id)
        localStorage.setItem('Wish',JSON.stringify(getAdd))
    }
    else{
        toast.error('You Have Allready Added in wish List')
    }

 }

 export {saveToStoregeAddWish,getAddWish}


 export {saveToStorege,getBooks}