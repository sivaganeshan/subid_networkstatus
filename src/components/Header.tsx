import { AppBar, Typography , Box} from "@mui/material";
import { subidLogo } from "../constants";


const Header = ()=>{
    return(

        <AppBar className="appbar" position="static" color="default">
        <Box>
        <img src={subidLogo} className="logo" alt="logo of subid"></img>
        <Typography variant="h6" color="textPrimary" component={"span"} >
                Network Status
        </Typography>
        </Box>

        </AppBar>

    )
}

export default Header;