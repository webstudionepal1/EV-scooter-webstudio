import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ProductContainer = () => {
  return (
    <Stack direction="row" spacing={2.75} alignItems="center">
      {/* Navigation indicator */}
      <Stack alignItems="flex-end" spacing={0.375}>
        <Box
          sx={{
            width: "6px",
            height: "30px",
            bgcolor: "black",
            borderRadius: "50px",
          }}
        />
        <Box
          sx={{
            width: "6px",
            height: "12px",
            bgcolor: "#d9d9d9",
            borderRadius: "50px",
          }}
        />
        <Box
          sx={{
            width: "6px",
            height: "12px",
            bgcolor: "#d9d9d9",
            borderRadius: "50px",
          }}
        />
      </Stack>

      {/* Product card container */}
      <Stack spacing={1} width="169px">
        {/* Top blurred gradient */}
        <Box
          sx={{
            height: "85px",
            borderRadius: "20px",
            filter: "blur(2px)",
            background:
              "linear-gradient(179deg, rgba(0,200,83,1) 38%, rgba(60,218,126,1) 100%)",
          }}
        />

        {/* Product card */}
        <Box
          sx={{
            height: "85px",
            p: 3,
            bgcolor: "white",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2.5,
          }}
        >
          {/* Product info */}
          <Stack spacing={1} justifyContent="center">
            <Typography
              sx={{
                width: "72px",
                fontFamily: "'Poppins-Medium', Helvetica",
                fontWeight: 500,
                fontSize: "14px",
                color: "black",
              }}
            >
              DB50QT
            </Typography>
            <Typography
              sx={{
                width: "72px",
                height: "17px",
                fontFamily: "'Poppins-Medium', Helvetica",
                fontWeight: 500,
                fontSize: "12px",
                color: "#a7a7a7",
              }}
            >
              VeloZip
            </Typography>
          </Stack>

          {/* Product image */}
          <Box
            sx={{
              width: "63px",
              height: "63px",
              borderRadius: "20px",
              backgroundImage: "url(/product-image.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>

        {/* Bottom blurred gradient */}
        <Box
          sx={{
            height: "85px",
            borderRadius: "20px",
            filter: "blur(2px)",
            background:
              "linear-gradient(359deg, rgba(0,200,83,1) 24%, rgba(60,218,126,1) 100%)",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default ProductContainer;

