import GAGenre from "../../../../general/GAGenre/GAGenre";
import { MusicTabsProps } from "./MusicTabsContent.types";
import { genreURLs } from "./MusicTabsContent.consts";

const MusicTabsContent = ({ tabValue }: MusicTabsProps) => {
  switch (tabValue) {
    case "dubstep":
      return <GAGenre spotifyLink={genreURLs.dubstep} />;
    case "dnb":
      return <GAGenre spotifyLink={genreURLs.dnb} />;
    case "house":
      return <GAGenre spotifyLink={genreURLs.house} />;
    case "techno":
      return <GAGenre spotifyLink={genreURLs.techno} />;
    case "rap":
      return <GAGenre spotifyLink={genreURLs.rap} />;
    case "rock":
      return <GAGenre spotifyLink={genreURLs.rock} />;
    case "pop":
      return <GAGenre spotifyLink={genreURLs.pop} />;
    default:
      return null;
  }
};

export default MusicTabsContent;
