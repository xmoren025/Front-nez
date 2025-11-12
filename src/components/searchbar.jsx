"use client";

import React, { useState } from "react";

// material
import { Box, InputBase, IconButton } from "@mui/material";

// component
import SearchIcon from "@mui/icons-material/Search";

// style
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch, placeholder = "Search…", defaultValue = "" }) {
  const [searchValue, setSearchValue] = useState(defaultValue);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className={styles.search}>
        <div className={styles.searchIconWrapper}>
          <IconButton 
            onClick={handleSearch}
            size="small"
            sx={{ color: 'inherit' }}
          >
            <SearchIcon />
          </IconButton>
        </div>
        <InputBase
          placeholder={placeholder}
          inputProps={{ "aria-label": "search" }}
          className={styles.inputBase}
          value={searchValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </Box>
  );
}

export default SearchBar;
