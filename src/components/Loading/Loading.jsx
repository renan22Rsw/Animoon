import { Box, CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center my-16" data-testid="loading-component">
      <Box sx={{ display: "flex" }}>
        <Stack sx={{ color: "#FACC15" }}>
          <CircularProgress color="inherit" />
        </Stack>
      </Box>
    </div>
  );
};

export default Loading;
