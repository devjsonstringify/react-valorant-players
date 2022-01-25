import React from "react";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const SliderMain = ({ thumbnailGridCounts }) => {
  return (
    <Stack>
      <Stack direction="row" spacing={1} sx={{ mb: "1rem" }}>
        <Container maxWidth="sm">
          {Array.from(new Array(thumbnailGridCounts)).map((_, idx) => {
            return (
              <Skeleton
                key={idx}
                animation="wave"
                variant="rectangular"
                width={50}
                height={50}
                sx={{
                  borderRadius: 1,
                }}
              />
            );
          })}
        </Container>
      </Stack>
      <Box
        sx={{
          width: "100%",
          height: "calc(100vh - 25vh)",
        }}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="100%"
        />
      </Box>
    </Stack>
  );
};

export default SliderMain;
