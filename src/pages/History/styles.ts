import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1{
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th{
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 0.5rem;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 0.5rem;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 0.25rem solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

interface TaskStatusProps {
  status : keyof typeof StatusColor;
}

const StatusColor = {
  green : 'green-500',
  yellow : 'yellow-500',
  red : 'red-500',
} as const

export const TaskStatus = styled.span<TaskStatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content:'';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 1rem;
    background: ${(props) => props.theme[StatusColor[props.status]]}
  }
`