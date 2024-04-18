import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
export default function ProductItem({ picture }) {
    return (
        <div className="flex flex-row">
            <img src="https://placehold.co/400x100?text=Placeholder" alt="Placeholder image" className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4" />
            <div className="flex flex-col">
                <AddIcon fontSize='large'/>
                <RemoveIcon fontSize='large'/>
            </div>
        </div>
      
    )
} 