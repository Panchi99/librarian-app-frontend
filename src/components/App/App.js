import './App.css';
import {useEffect, useState} from "react";
import BookService from "../../BookRepository/BookRepository";
import Books from "../Books/BookList/books";
import Categories from "../Categories/categories"
import BookAdd from "../Books/AddNewBook/bookAdd";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "../Header/header";
import BookEdit from "../Books/BookEdit/bookEdit";

function App() {

    function loadBooks() {
        BookService.getBooks().then(success => {
            setBooks(success.data)
            console.log(success.data)
        })
    }

    const loadCategories = () => {
        BookService.getCategories().then(success => {
            setCategories(success.data)
        })
    }

    const loadAuthors = () => {
        BookService.getAuthors().then(success => {
            setAuthors(success.data)
        })
    }

    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [selectedBook, setSelectedBook] = useState({});

    useEffect(()=>{
        loadBooks();
        loadCategories();
        loadAuthors();
    },[])

    const addBook = (name, category, authorId, availableCopies) => {
        BookService.addBook(name, category, authorId, availableCopies)
            .then((successData) => {
                loadBooks();
            });
    }
    const editBook = (id,name, category, author, availableCopies) => {
        BookService.editBook(id,name, category, author, availableCopies)
            .then((successData) => {
                loadBooks();
            });
    }

    const deleteBook = (id) => {
        BookService.deleteBook(id)
            .then((successData) => {
                loadBooks();
            })
    }

    const getBook = (id) => {
        BookService.getBookById(id)
            .then((successData) => {
                setSelectedBook(successData.data);
            })
    }

    const markAsTaken = (id) => {
        BookService.markAsTaken(id)
            .then((successData) => {
                loadBooks();
            })
    }

    return (
        <BrowserRouter>
            <Header/>
            <main>
                <div className="container">
                    <Routes>
                        <Route path={"/categories"} element={<Categories categories={categories}/>}>
                        </Route>
                    <Route path={"/books/add"} element={
                        <BookAdd categories={categories}
                         authors={authors}
                               onAddBook={addBook}/>}/>

                     <Route path={"/books/edit/:id"} element={
                        <BookEdit categories={categories}
                                   authors={authors}
                                   onEditBook={editBook}
                                  book={selectedBook}/>}/>

                        <Route path={"/"} element={ <Books books={books}
                                                        onDelete={deleteBook}
                                                        onEdit={getBook}
                                                           onMarkAsTaken={markAsTaken}/>} />

                        <Route path={"/books"} element={<Books books={books}
                                                               onDelete={deleteBook}
                                                               onEdit={getBook}
                                                                   onMarkAsTaken={markAsTaken}/>}/>
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
