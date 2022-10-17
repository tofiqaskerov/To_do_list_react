import { Container } from '@mui/material';
import './app.scss'
import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Initial_State = [
  { id: 1, title: "Clean the house", completed: false },
  { id: 2, title: "Go to the market", completed: true }
]

function App() {
  const [list, setList] = useState(Initial_State);
  const [inputTxt, setInputTxt] = useState('');
  const addList = title =>{
      setList([...list, { id : Date.now, title: title, completed: false}]);
      setInputTxt('');

  }
  const completed = id =>{
    setList(list.map(i => i.id === id ? { ...i, completed: !i.completed } : i))
  }
  const removeCompleted =() =>{
    setList(list.filter(item => !item.completed));
  }
  return (
    <div className="app">
      <Container maxWidth="md">
        <div className="all">
          <h1>To do list</h1>
          <div className="input-group">
            <input value={inputTxt} onChange={(e) => setInputTxt(e.target.value)} className="input-txt" type="text" placeholder='Add to the list' />
            <button onClick={() =>addList(inputTxt)}
            > 
            Add
            </button>
          </div>
          <div className="list"> 
            {list.map((item, index) =>
            (<div
              key={index}
              onClick={() => 
                completed(item.id) 
              }
              className="done"><h3 className={item.completed ? "line" : " "}>{item.title}</h3></div>)
            )}
          </div>
          <Stack direction="row" spacing={2}>
            <Button onClick={() => removeCompleted()} variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>

          </Stack>

        </div>

      </Container>
    </div>
  );
}

export default App;
