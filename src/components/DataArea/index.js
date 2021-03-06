import React, { useState, useEffect } from "react";
import DataTable from "../DataTable"
import Navbar from "../Navbar";
import DataAreaContext from "../../utils/DataAreaContext"
import API from "../../utils/API";

// set State of the values prior to rending. Best practice to place at the top
const DataArea = () => {
    const [developerState, setDeveloperState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
            { name: "Image", width: "10%" },
            { name: "Name", width: "10%" },
            { name: "Phone", width: "20%" },
            { name: "Email", width: "20%" },
            { name: "DOB", width: "10%" }
        ]
    });

        // function to handle the sorting "descending / ascending"
    const handleSort = heading => {
        if (developerState.order === "descend") {
            setDeveloperState({
                order: "ascend"
            })
        } else {
            setDeveloperState({
                order: "descend"
            })
        }
    

        const compareFnc = (a, b) => {
            if (developerState.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            } else {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                }
            }
        }
        const sortedUsers = developerState.filteredUsers.sort(compareFnc);

        setDeveloperState({
            ...developerState, filteredUsers: sortedUsers
        });
    };

    // function that handles any changes to the value of the search bar 
    const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
            let values = item.name.first.toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });

                // ...developer state get all previous states and updates them 
        setDeveloperState({
            ...developerState, filteredUsers: filteredList
        })
    };

    useEffect(() => {
        // API.getUsers().then(results => {
        //     setDeveloperState({
        //         ...developerState, users: results.data.results,
        //         filteredUsers: results.data.results
        //     });
        // });
        getData();

    }, []);

    const getData =async ()=>{
        console.log("getData pinged")
        const {data}= await API.getUsers()
        console.log(data.results)
        setDeveloperState({...developerState, users: data.results, filteredUsers:data.results})
    }
    const styles = {
        dataAreaStyle: {
            margin: "0 auto",
            width: "90%"
        }
    }

    return (
        <DataAreaContext.Provider
            value={{ developerState, handleSearchChange, handleSort }}
        >
            <Navbar />
            <div style={styles.dataAreaStyle} className="data-area">
                {developerState.filteredUsers.length > 0 ? <DataTable /> : <div> </div>}
            </div>
        </DataAreaContext.Provider>
    );
}

export default DataArea;