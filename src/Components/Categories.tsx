import React from "react";
import { Link } from "react-router-dom";

type CategoriesProps = {
    items: {
        name: string,
        url: string
    }[]
};

const Categories: React.FC<CategoriesProps> = ({ items }) => {
    return(
        <>
            {
                items.map((item, index) => <div className="category-menu-item active" key={`${item.name}_${index}`}>
                    <Link to={"/Category/" + item.url}>{item.name}</Link>
                </div>)
            }
        </>
    )}

export default Categories;
