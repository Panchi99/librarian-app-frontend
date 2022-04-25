import axios from "../axios/axios";

const BookService = {

    getBooks : () => {
    return axios.get("/books")
    },

    getAuthors : () => {
        return axios.get("/authors")
    },

    getCategories : () => {
        return axios.get("/books/allCategories")
    },

    getBookById : (id) => {
        return axios.get(`/books/${id}`)
    },

    deleteBook : (id) => {
        return axios.delete(`/books/delete/${id}`)
    },

    addBook : (name, category, authorId, availableCopies) => {
              return   axios.post("/books/add",{
                    "name" : name,
                    "category" : category,
                    "authorId" : authorId,
                    "availableCopies" : availableCopies
                });
    },

    editBook : (id,name, category, author, availableCopies) => {
       return    axios.put(`/books/edit/${id}`,{
                "name" : name,
                "category" : category,
                "authorId" : author,
                "availableCopies" : availableCopies
        });
    },

    markAsTaken : (id)  => {
        return axios.get(`/books/markAsTaken/${id}`);
    }
}
export  default BookService;