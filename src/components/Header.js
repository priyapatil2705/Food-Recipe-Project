import React from "react";
import "../App.css";

const Header = (props) => {
    const {search , onInputchange, onsearchfield} = props;
    console.log("Search 1",search);
   
    return (
        <div className="header">
            <div>
               <i className="material-icons brand-icon" style={{fontSize: "50px", marginRight : "20px"}}>fastfood</i>
               <label style={{fontSize: "50px"}}>Food Recipe</label>
            </div>
            <div className="input-group w-40 mx-auto">
                <input type="text" className="form-control search-control"  placeholder="Search here..."
                value={search} onChange={onInputchange}/>
                <div className="input-group-append">
                    <span className="btn btn-dark search-btn" id="basic-addon2" onClick={onsearchfield}>
                        Search Recipe
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
