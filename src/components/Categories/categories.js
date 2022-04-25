
const categories = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>

                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((category,index) => {
                            return (
                                <tr key={index}>
                                    <td > {category}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export  default categories;