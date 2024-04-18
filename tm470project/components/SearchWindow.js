import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchWindow() {
  return (
    <div className="MuiPaper-root MuiPaper-rounded pt-5">
      <IconButton
        type="submit"
        className="MuiButtonBase-root MuiIconButton-root"
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        className="search-input"
      />
    </div>
  );
}
