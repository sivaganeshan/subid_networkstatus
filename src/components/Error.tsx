import {Dialog, Box, DialogTitle, DialogContent, DialogContentText} from "@mui/material";
import React, {useContext} from "react";
import { NetworkContext } from "../NetworkContext";

const Error :React.FC = ()=>{

    let { isError } =
    useContext(NetworkContext);

    return (
        <>
        <Box className="errorParent">
        <Dialog  open={isError}
            aria-labelledby="modal-modal-Error"
            aria-describedby="modal-modal-Error While fetching data">
                <DialogTitle>
                    {"Error while fetching the data"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    {"Error Code ER1001: Error while fetching the data from API "}
                    </DialogContentText>
                </DialogContent>
        </Dialog>
        </Box>
        </>
    )
}
export default Error;