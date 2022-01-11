import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PlayersSlides from "@/components/playersSlides";
import CopyrightsAndCredits from "../copyrightsAndCredits";

const VALORANTS_AGENTS = {
  type: "loop",
  pagination: false,
  fixedWidth: "3.125rem",
};
const Layout = () => (
  <Box>
    <Box
      sx={{
        bgcolor: "#000",
        maxHeight: "5rem",
        mb: "0.5rem",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <Splide
        options={VALORANTS_AGENTS}
        onArrowsMounted={(_, prev, next) => {
          prev.remove();
          next.remove();
        }}
      >
        {[
          "V",
          "O",
          "L",
          "R",
          "A",
          "N",
          "T",
          "-",
          "A",
          "G",
          "E",
          "N",
          "T",
          "S",
          "-",
        ].map((char, idx) => {
          return (
            <SplideSlide key={`logo_${idx}`}>
              <Typography
                align="center"
                color="primary.main"
                variant="h4"
                sx={{ fontFamily: "Valorant" }}
              >
                {char}
              </Typography>
            </SplideSlide>
          );
        })}
      </Splide>
    </Box>
    <PlayersSlides />
    <CopyrightsAndCredits />
  </Box>
);

export default Layout;
