
import { Avatar, Typography , List, ListItem, ListItemAvatar, ListItemText, Paper} from "@mui/material";
import {iconBaseUri} from "../constants";
import React, {useContext} from "react";
import { NetworkContext } from "../NetworkContext";


const NetworkElement = ()=>{

    let {networkDetails}= useContext(NetworkContext);
    
    return(
          <>
          <List className="parent" >
          {networkDetails.map((network)=>{
              return(
                <Paper elevation={3} key={network.name} style={{margin:"0.2rem"}}>
                <ListItem >
                <ListItemAvatar>
                <Avatar alt={`display picture of ${network.icon}`} src={iconBaseUri+network.icon} component={"span"}></Avatar>
                </ListItemAvatar>
                <ListItemText primary={
                    <Typography variant="body2"  color="textPrimary">
                    {network.name}
                    </Typography>
                }
                secondary ={
                    <React.Fragment>
                    <Typography variant="body2" color="textPrimary" component={"span"}>
                        Connection Status : 
                    </Typography>
                    <span style={{ color: network.connectedStatus === undefined?"#edf505":network.connectedStatus?"#09f505":"#f51120", border: "2px solid ",
                     width:"3rem" , height:"1rem", marginLeft:"1rem" , padding:"0.1rem"}}>
                         <Typography  variant="body2" component={"span"} color="textPrimary">
                         {network.connectedStatus === undefined?" TBD ":network.connectedStatus?" Live ":" Failed "}
                         </Typography>
                    </span>
                    </React.Fragment>
                }
                >
                </ListItemText>
                </ListItem>
                </Paper>
              )
          })}
          </List>
          </>  
    )
}

export default NetworkElement;