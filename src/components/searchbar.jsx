"use client";

import React from "react";

// material
import { Box, InputBase } from "@mui/material";

// component
import SearchIcon from "@mui/icons-material/Search";

// style
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className={styles.search}>
        <div className={styles.searchIconWrapper}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          className={styles.inputBase}
        />
      </div>
    </Box>
  );
}

export default SearchBar;
