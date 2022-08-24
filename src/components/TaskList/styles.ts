import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 1rem;
`
export const TaskInfo = styled.div`

  p {
    text-align: left;
    font-style: italic;
    font-size: 0.7rem;
    margin-top: 1rem;
  }
`
export const TaskAction = styled.div`
  span {
    cursor: pointer;
    transition: 0.5s;

    &:first-child {
      margin-right: 1rem;
    }

    &:hover {
      color:rgba(48, 16, 255, 1);
    }
  }
`