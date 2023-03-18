import React, { useState } from "react";
import "./styles/SearchBar.css";
import { getTokensByGroupName } from "../token-data/TokenDeserialization";

const tokenDict = getTokensByGroupName("MW_core");

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = e => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        Object.keys(tokenDict).filter(tokenName => {
            return tokenName.match(searchInput);
        });
    }

    return (
        <div>
            <input type="search" placeholder="Search here" onChange={handleChange} value={searchInput} />

            <table>
                <tr>
                    <th>Tokens</th>
                    <th>WM_core</th>
                </tr>

                {Object.keys(tokenDict).map(tokens => {
                    <div>
                        <tr>
                            <td>{tokens}</td>
                        </tr>
                    </div>;
                })}
            </table>
        </div>
    );
};

export default SearchBar;
