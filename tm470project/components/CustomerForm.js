import { TextField } from "@mui/material"

export default function CustomerForm() {
    return (
        <div className="MuiPaper-root MuiPaper-rounded pt-5">
            <form noValidate autoComplete="off">
                <TextField id="first-name" label="First Name" required/>
                <TextField id="last-name" label="Last Name" required/>
                <TextField id="postcode" label="Postcode" />
                <TextField id="country" label="Country"  required/>
            </form>
        </div>
    )
}