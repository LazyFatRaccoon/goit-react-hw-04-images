import styled from '@emotion/styled'
import { BsSearch} from 'react-icons/bs';


export const SearchBarPanel = styled.header`
    
    background-color:#5e25a8;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    
    //position: fixed;
` 
export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`
export const Input = styled.input`
    font-size: 40px;
    padding-left: 60px;

    
`
export const SearchBtn = styled.button`
    border: none;
    background-color: transparent;
    position: absolute;
    
`
export const SearchIcon = styled(BsSearch)`
   

`





