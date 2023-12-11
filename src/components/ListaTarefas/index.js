import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  ListaContainerExcluida
} from "./styled";
import bin from "../../assets/bin.png";

const listaDeTarefasInicial = [
  {
    titulo: "Fazer exercícios"
  },
  {
    titulo: "Estudar React"
  }
];

export function ListaTarefas() {
  const [lista, setLista] = useState(listaDeTarefasInicial);
  const [novaTarefa, setNovaTarefa] = useState({ titulo: "" });

  const [listaExcluida, setListaExcluida] = useState('')

  const onChangeTarefa = (event) => {
    const tarefa = {
      titulo: event.target.value
    };

    setNovaTarefa(tarefa);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa({ titulo: "" });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      adicionaTarefa();
    }
  };

  const listaItensExcluidos = (tarefaParaRemover) => {
    const novaListaExcluida = [...listaExcluida]
    console.log('lista de itens excluidos');
    setListaExcluida(listaExcluida);
    console.log('teste');
  }

  const removeTarefa = (tarefaParaRemover) => {
    console.log('removeTarefa');
    const listaFiltrada = lista.filter(
      (tarefa) => tarefa.titulo !== tarefaParaRemover.titulo
    );
    setLista(listaFiltrada);

    listaItensExcluidos()
    
  };  
  
  
  
  

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa.titulo}
          onChange={onChangeTarefa}
          onKeyPress={handleKeyPress}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa.titulo}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />

      <ListaContainerExcluida>
          {listaItensExcluidos}
      </ListaContainerExcluida>

    </ListaTarefasContainer>

  );
}
