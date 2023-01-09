import { useContext } from "react";
import {formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CyclesContext } from "../../contexts/CycleContext";
import { HistoryContainer, HistoryList, TaskStatus } from "./styles";

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico.</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {cycles.map(cycle => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>{formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}</td>
                  <td>
                    {cycle.finishedDate && <TaskStatus status="green">Concluído</TaskStatus>}
                    {cycle.interruptedDate && <TaskStatus status="red">Interrompido</TaskStatus>}
                    {(!cycle.finishedDate && !cycle.interruptedDate) && <TaskStatus status="yellow">Em andamento</TaskStatus>}
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
