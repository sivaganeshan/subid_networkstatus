
import { Avatar, Typography , List, ListItem, ListItemAvatar, ListItemText, Paper} from "@mui/material";
import {iconBaseUri} from "../constants";
import React, {useContext} from "react";
import { NetworkContext } from "../NetworkContext";
import {StatusWrapper} from "../styles/NetworkEle.styles";


const NetworkElement = ()=>{

    let {networkDetails}= useContext(NetworkContext);
    
    return(
          <>
          <List className="parent" >
          {networkDetails.map((network)=>{
              return (
                <Paper
                  elevation={3}
                  key={network.name}
                  style={{ margin: "0.2rem" }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        alt={`display picture of ${network.icon}`}
                        src={iconBaseUri + network.icon}
                        component={"span"}
                      ></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body2" color="textPrimary">
                          {network.name}
                        </Typography>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography
                            variant="body2"
                            color="textPrimary"
                            component={"span"}
                          >
                            Connection Status :
                          </Typography>
                          <StatusWrapper status={network.connectedStatus}>
                            <Typography
                              variant="body2"
                              component="span"
                              color="textPrimary"
                              className="connectedStatus"
                            >
                              {network.connectedStatus === undefined
                                ? " TBD "
                                : network.connectedStatus
                                ? " Live "
                                : " Failed "}
                            </Typography>
                          </StatusWrapper>
                        </React.Fragment>
                      }
                    ></ListItemText>
                  </ListItem>
                </Paper>
              );
          })}
          </List>
          </>  
    )
}

export default NetworkElement;