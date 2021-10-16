import styled from 'styled-components';
import { Field } from "formik";

export const Wrapper  = styled.div `
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;
`

export const ContentMain = styled.div`
    padding-left: 20px;
    height: 100%;
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;  
`

export const StyledH4 = styled.h4`
    margin-bottom: 10px;
    font-weight: 400;
`

export const ContentInput = styled.div`
    display: flex;
`

export const FieldInput = styled(Field)`
    border-radius: 0px 6px 6px 0px;
    border: 2px solid orangered;
    width: 350px;
    &:focus{
        outline: none;
	    border: 2px solid #0085FF;
    }
`

export const Error = styled.div`
    color: red;
	font-weight: 600;
	font-size: 12px;
    margin-top: 6px;
` 

export const ContentIcon = styled.div`
    width: 48px;
    height: 45px;
    background: orangered;
    border-radius: 6px 0px 0px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: snow;
`

export const Label = styled.label`
    padding-right: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const StyledU = styled.u`
    color: rgb(0, 148, 246); 
`

export const FieldBox = styled(Field)`
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 8px;
`

export const Button = styled.button`
    width: 300px;
    height: 50px;
    background-color: #1e22aa;
    outline: 0;
    color: #fff;
    font-size: 18px;
    border-radius: 4px;
    box-shadow: 0 2px 4px #3333334d;
    text-align: center;
    letter-spacing: .16px;
    border: none;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        transform: translate(0px, -10px);
    }
`

export const WrapperBox = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content:center;
    align-items:center;
`

export const StyledP = styled.p`
    font-family: 'Roboto', sans-serif;
`

export const Span = styled.span`
    color: rgb(0, 148, 246); 
    cursor: pointer;
    font-weight: 600;
    transition: all .3s ease-in-out;
    text-decoration: none;
    &:hover{
        transform: translate(0px, -10px);
    }
`
export const Approved = styled.div`
    font-size: 14px;
	padding-top: 20px;
	color: #02a802;
`