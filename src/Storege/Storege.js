
import toast from 'react-hot-toast';

let getWishList = () => {
    let wishList = localStorage.getItem('Wish');
    return wishList ? JSON.parse(wishList) : [];
}

let saveToWishList = (id) => {
    let wishList = getWishList();
    let isInReadList = isBookInList(id, 'read');
    if (!isInReadList) {
        let existingBook = wishList.find(book => book.bookId === id.bookId);
        if (!existingBook) {
            toast.success('Book added to Wish List');
            wishList.push(id);
            localStorage.setItem('Wish', JSON.stringify(wishList));
        } else {
            toast.error('You have already added this book to the Wish List');
        }
    } else {
        toast.error('You have already read this book');
    }
}

let getReadList = () => {
    let readList = localStorage.getItem('read');
    return readList ? JSON.parse(readList) : [];
}

let saveToReadList = (id) => {
    let readList = getReadList();
    let existingBook = readList.find(book => book.bookId === id.bookId);
    if (!existingBook) {
        toast.success('Book added to Read List');
        readList.push(id);
        localStorage.setItem('read', JSON.stringify(readList));
    } else {
        toast.error('You have already read this book');
    }
}

let isBookInList = (id, listType) => {
    let list = listType === 'wish' ? getWishList() :  getReadList();
    return list.find(book => book.bookId === id.bookId) !== undefined;
}

export { saveToWishList, getWishList, saveToReadList, getReadList };
