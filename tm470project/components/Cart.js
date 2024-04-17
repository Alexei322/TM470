import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography, Select, MenuItem } from '@mui/material';
export default function Cart() {
    return (
        <div className="MuiPaper-root MuiPaper-rounded pt-5 flex flex-col ">
            <div className='flex flex row'>
               <ShoppingCartIcon fontSize='large'/>
                  <Typography variant='h5'>Cart (~)
               </Typography>
            </div>
            <div className='flex flex-row'>
                <Typography variant='h5'>Apply discount:</Typography>
                <Select defaultValue="" id="discount-select" style={{width: "10em", height: '2em'}}>
                    <MenuItem value={10}>10%</MenuItem>
                    <MenuItem value={20}>20%</MenuItem>
                    <MenuItem value={30}>30%</MenuItem>
                </Select>
                
            </div>
        </div>
    )
}