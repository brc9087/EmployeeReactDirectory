import React, { useContext } from "react"
import DataAreaContext from "../../utils/DataAreaContext"

const SearchBar = () => {
    const style = {
        searchStyles: {
            border: "2px solid black"
        }
    } 

    const context = useContext(DataAreaContext);

    return (
        <div style={style.searchStyles} className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="search"
                    aria-label="search"
                    onChange={e => context.handleSearchChange(e)}
                />
                <button className="btn btn-primary btn-s" type="submit">
                    SEARCH
                    </button>
            </form>
        </div>
    )
}

export default SearchBar;