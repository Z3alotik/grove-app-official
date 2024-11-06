import { Box } from "@mui/material";
import { Spotify } from "react-spotify-embed";
import { GAGenreContentProps } from "./GAGenre.types";

const GAGenre = ({ spotifyLink }: GAGenreContentProps) => {
  return (
    <Box>
      <Spotify width="400px" height="500px" link={spotifyLink} />
    </Box>
  );
};

export default GAGenre;
