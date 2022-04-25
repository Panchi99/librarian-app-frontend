import React from "react";
import {Link} from "react-router-dom";


const bookTerm = (props) => {

    return (
        <tr>
            <td>{props.book.name}</td>
            <td>{props.book.category}</td>
            <td>{props.book.author.name}</td>
            <td>{props.book.availableCopies}</td>
            <td className={"text-right"}>
                <button title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.book.id)}>
                    Delete
                </button>
                <Link className={"btn btn-info m-1"}
                      onClick={() => props.onEdit(props.book.id)}
                      to={`/books/edit/${props.book.id}`}>
                    Edit
                </Link>
                <button title={"Mark As Taken"} className={"btn btn-success m-1"}
                   onClick={() => props.onMarkAsTaken(props.book.id)}>
                    Mark As Taken
                </button>
            </td>
        </tr>
    )

}

export default bookTerm;