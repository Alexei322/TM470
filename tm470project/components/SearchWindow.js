import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function SearchWindow() {
    const [searchVal, setSearchVal] = useState('');
    const logOutput = () => { 
        console.log(searchVal);
    }

    return (
        <div className="MuiPaper-root MuiPaper-rounded pt-5">
            <IconButton type="submit" className="MuiButtonBase-root MuiIconButton-root" aria-label="search">
                <SearchIcon />
            </IconButton>
            <TextField 
                id="outlined-basic" 
                label="Search" 
                variant="outlined" 
                className="search-input"
            />
        </div>
    )
}