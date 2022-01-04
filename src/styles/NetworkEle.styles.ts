import styled from  'styled-components';

const NetworkEleWrapper = styled.div`
.parent{
    display:flex;
    flex-directio:row;
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