
import styled from  'styled-components';
import { ConnectedStatus } from '../types';

const NetworkEleWrapper = styled.div`
.parent{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    margin:2rem
}


@media only screen and (max-width: 700px) {
    .parent{
        flex-direction:column;
        align-items:center;
    }

`

export default NetworkEleWrapper;

export const StatusWrapper = styled.span<ConnectedStatus>`
.connectedStatus{
    margin-left:0.5rem;
    padding: 0 0.2rem;
    border-width: 2px;
    border-color : ${({status})=>
    status=== undefined?"#edf505":status?"#09f505":"#f51120"
    };
    border-style : solid;
   
}
`
