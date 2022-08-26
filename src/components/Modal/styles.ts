import styled from 'styled-components';

export const Fade = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #000;
  opacity: 0.7;
`
export const Modal = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
  right: 0;
  max-width: 520px;
  height: 400px;
  margin: 0 auto;
  background: #161a2b;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 1rem;
  }

  form {
    width: 90%;
  }
`