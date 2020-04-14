import React, { useState, useEffect } from 'react';
import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import AddTodoList from './AddTodoList';

import { Input } from '@ui5/webcomponents-react/lib/Input';
import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';
import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';

import TodoList from './TodoList';
import { Panel } from '@ui5/webcomponents-react/lib/Panel';

import { Toast } from '@ui5/webcomponents-react/lib/Toast';
import { render } from '@testing-library/react';

const Main = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Get some carrots',
      id: 1,
      deadline: '27/7/2018',
      done: false,
    },
    {
      text: 'Do some magic',
      id: 2,
      deadline: '22/7/2018',
      done: false,
    },
    {
      text: 'Go to the gym',
      id: 3,
      deadline: '24/7/2018',
      done: true,
    },
    {
      text: 'Buy milk',
      id: 4,
      deadline: '30/7/2018',
      done: false,
    },
    {
      text: 'sleep for a while',
      id: 5,
      deadline: '21/7/2018',
      done: true,
    },
    {
      text: 'Eat some fruits',
      id: 6,
      deadline: '29/7/2018',
      done: false,
    },
  ]);
  const [inputTextValue, setInputTextValue] = useState('');
  const [dateValue, setDateValue] = useState('');

  const AddToList = () => {
    if (inputTextValue === '' || dateValue === '') {
      alert('todo and date are supposed not to be null...');
      // Toast.error('todo and date are supposed not to be null...');
    } else {
      setTodos((todos) => [
        ...todos,
        {
          text: inputTextValue,
          id: todos.length + 1,
          deadline: dateValue,
          done: false,
        },
      ]);
    }
  };

  const handleChangeInput = (val) => {
    setInputTextValue(val);
  };

  const handleChangeDate = (val) => {
    setDateValue(val);
  };

  const handleCheckBox = (id, checked) => {
    if (checked) {
      setTodos(
        todos.map((todo) => {
          if (todo.id !== id) return todo;
          return { ...todo, done: false };
        })
      );
    } else {
      setTodos(
        todos.map((todo) => {
          if (todo.id !== id) return todo;
          return { ...todo, done: true };
        })
      );
    }
    // console.log(todos);
  };

  const handleRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = () => {
    console.log('edit');
  };
  return (
    <div>
      <section>
        <div>
          <Input
            placeholder="Input your todo...."
            disabled={false}
            readonly={false}
            type={InputType.Text}
            onInput={'action:onInput'}
            onSubmit={'action"onSubmit'}
            onSuggestionItemSelect={'action:onSuggestionItemSelect'}
            icon={null}
            onChange={(event) => handleChangeInput(event.target.value)}
            style={{ width: '70%' }}
          ></Input>
          <DatePicker
            value={''}
            formatPattern={'dd/MM/yyyy'}
            disabled={false}
            readonly={false}
            onChange={(event) => handleChangeDate(event.target.value)}
            onInput={'onInput'}
          />
          <Button
            design={'design'}
            icon={'add'}
            iconEnd={'iconEnd'}
            onClick={AddToList}
          >
            Add
          </Button>
        </div>
      </section>
      <div className="list-todos-wrapper">
        <TodoList
          items={todos.filter((todo) => !todo.done)}
          checkBoxChange={handleCheckBox}
          // selectionChange={handleDone}
          edit={handleEdit}
          remove={handleRemove}
        ></TodoList>

        <Panel
          headerText="Completed tasks"
          // collapsed={!todos.filter((todo) => todo.done).length || undefined}
        >
          <TodoList
            items={todos.filter((todo) => todo.done)}
            checkBoxChange={handleCheckBox}
            // selectionChange={handleUnDone}
            edit={handleEdit}
            remove={handleRemove}
          ></TodoList>
        </Panel>
      </div>
    </div>
  );
};

export default Main;
