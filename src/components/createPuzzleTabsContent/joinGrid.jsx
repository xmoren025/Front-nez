"use client"

// material
import { Box } from "@mui/material";

// icon

// component
import CartGrid from "./cartGrid";
import Workspace from "../dragDrop/workspace";

// style
import styles from "./TabsContentGrids.module.css";

function JoinGrid(){
    return(
        <Box>
            <Box className={styles.joinContent}>
            </Box>
            <Box className={styles.cart}>
                <CartGrid/>
            </Box>
        </Box>
    );
}

export default JoinGrid;