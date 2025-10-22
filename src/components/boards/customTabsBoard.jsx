"use client"

import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

function CustomTabsBoard({ items }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        width: "100%",
        maxWidth: 600,
        mx: "auto"
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            ".MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          {items.map((item, index) => (
            <Tab
              key={index}
              label={item.label}
              sx={{
                minWidth: "40px",
                px: 1.5,
                mx: 0.5,
                backgroundColor: "#dcdcdc",
                borderRadius: "6px 6px 0 0",
                fontSize: "0.75rem",
                textTransform: "none",
                height: "30px",
                ...(value === index && {
                  backgroundColor: "#f4f4f4",
                  fontWeight: "bold",
                }),
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Box
        sx={{
          bgcolor: "#eaeaea",
          p: 2,
          minHeight: "200px",
          borderRadius: "0 0 6px 6px",
        }}
      >
        <Typography component="div">{items[value].content}</Typography>
      </Box>
    </Box>
  );
}

export default CustomTabsBoard;
