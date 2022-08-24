import styled from 'styled-components';

export const Form = styled.form`
 
 input {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 10px;
 }

`
export const FormGroup = styled.div`

 label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
 }

 label span {
  margin: 10px 0;
  font-weight: bold;
  font-size: 18px;
 }

`
export const Btn = styled.div`
  display: flex;
  margin: 15px 0;

  input {
    width: 100%;
    background: linear-gradient(90deg, #5d0cff 0%, #9b00fa 100%);
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    transition: 0.6s;

    &:hover {
      transform: scale(1.01);
    }
  }
`
