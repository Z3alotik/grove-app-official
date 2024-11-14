import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import InfoIcon from "@mui/icons-material/Info";
import RuleIcon from "@mui/icons-material/Rule";

export const navButtons = [
  { linkTag: "home", title: "Domů", icon: <HomeIcon /> },
  { linkTag: "about", title: "O akci", icon: <InfoIcon /> },
  { linkTag: "event", title: "Událost", icon: <EventIcon /> },
  { linkTag: "music", title: "Hudba", icon: <MusicNoteIcon /> },
  { linkTag: "rules", title: "Pravidla", icon: <RuleIcon /> },
];
