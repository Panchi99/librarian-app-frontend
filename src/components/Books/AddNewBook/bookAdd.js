import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';


const ProductAdd = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = useState({
        name: "",
        category: "",
        author: "",
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const author = formData.author;
        const availableCopies = formData.availableCopies;

        props.onAddBook(name, category, author, availableCopies);
        navigate("/books");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group mt-3">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Book category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((category,index) =>
                                <option key={index} value={category.id}>{category}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <label>Book author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((author) =>
                                <option key={author.id} value={author.id}>{author.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="availableCopies">Book available copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               required
                               placeholder="Enter available copies of the book"
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductAdd;