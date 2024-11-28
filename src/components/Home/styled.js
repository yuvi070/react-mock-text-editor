// Main,
//  Body,
//  Div1,
//  Div2,
//  MainHeading,
//  Image,
//  MiniDiv,
//  Div3,
//  Button,

import styled from 'styled-components'

export const Main = styled.div`
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Body = styled.div`
  display: flex;
  width: 70%;
  background-color: #1b1c22;
  height: 75%;
  border-radius: 9px;
  font-family: Roboto;
`

export const Div1 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`

export const Div2 = styled.div`
  height: 100%;
  width: 50%;
  padding: 15px;
`

export const Div3 = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  padding: 15px;
`

export const MainHeading = styled.h1`
  color: white;
  font-family: Roboto;
  font-weight: 600;
  font-size: 26px;
  text-align: center;
`

export const Image = styled.img`
  width: 70%;
`

export const MiniDiv = styled.div`
  background-color: #25262c;
  border-radius: 8px;
  border: 1px solid white;
  height: 100%;
`

export const Button = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
  color: ${props => (props.show ? '#faff00' : '#f1f5f9')};
`
export const TextArea = styled.textarea`
  height: 80%;
  width: 100%;
  background-color: #25262c;
  border: 0px;
  outline: none;
  color: white;
  font-size: 19px;
  padding-left: 10px;
  font-weight: ${props => (props.showBold ? 'bold' : 'normal')};
  font-style: ${props => (props.showItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.showUnderline ? 'underline' : 'normal')};
`
