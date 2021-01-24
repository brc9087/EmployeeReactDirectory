import React, { useContext } from "react";
import DataBody from "../DataBody"
import DataAreaContext from "../../utils/DataAreaContext";

const styles = {
    dataTableStyles: {
        backgroundColor: "moccasin",
        color: "black",
        fontType: "bold"
    }
}

// uses the handleSort function from the DataArea folder to place results in ascending / descending order 
const DataTable = () => {
    const context = useContext(DataAreaContext);

    return (
        <div  style={styles.dataTableStyles} className="datatable mt-5">
            <table style={styles.dataTableStyles}
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase())
                                    }}
                                >
                                    {name}
                                    <span className="pointer"> </span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <DataBody />
            </table>
        </div>
    )
}

export default DataTable;