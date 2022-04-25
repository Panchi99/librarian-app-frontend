import React, {useState} from "react";
import './books.css';
import BookTerm from '../BookTerm/bookTerm'
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate'

const Books = (props) => {

    const [state, setState] = useState({
        page: 0,
        size: 5
    });

    const getBooksPage = (offset, nextPageOffset) => {
        return props.books.map((book, index) => {
            return (
                <BookTerm key={book.id} book={book} onDelete={props.onDelete} onEdit={props.onEdit} onMarkAsTaken={props.onMarkAsTaken}/>
            );
        }).filter((product, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

    const offset = state.size * state.page;
    const nextPageOffset = offset + state.size;
    const pageCount = Math.ceil(props.books.length / state.size);
    const books = getBooksPage(offset, nextPageOffset);


    function handlePageClick(event) {
        setState((prevState) => {
            return {
                size: 5,
                page: event.selected
            }

        })
    }

    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <table className={'table table-striped'}>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Category</td>
                        <td>Author</td>
                        <td>Available Copies</td>
                    </tr>
                    </thead>
                    <tbody>
                    {books}
                    </tbody>
                </table>
            </div>

            <div className={"row"}>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new product</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-3"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>

            </div>


        </div>
    )
}

export default Books;