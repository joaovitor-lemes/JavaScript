const express = require("Express");
const app = express();
const PORT = 3000;

app.use(express.json());

let tarefas = []
let idAtual = 1;

//listar Tarefas

app.get("/tarefas", (req, res)=>{
    res.json(tarefas);})

// Adicionar Tarefa

app.post("/tarefas", (req, res) => {
    const { descricao } = req.body;
    if (!descricao) {
      return res.status(400).json({ erro: "Descrição é obrigatória" });
    }
  
    const novaTarefa = {
      id: idAtual++,
      descricao
    };
  
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
  });
  
  // Remover tarefa por ID
  app.delete("/tarefas/:id", (req, res) => {
    const id = parseInt(req.params.id);
    tarefas = tarefas.filter(t => t.id !== id);
    res.status(204).send(); // Sem conteúdo
  });
  
  app.listen(PORT, () => {
    console.log(`API de tarefas rodando em http://localhost:${PORT}`);
  });



