import React, { useState } from 'react';
import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';

const TodoList = (props) => {
  const { items, checkBoxChange, edit, remove } = props;
  return (
    <List>
      {items.map((item) => (
        <div key={item.id}>
          <CheckBox
            // disabled={boolean('disabled', false)}
            // readonly={boolean('readonly', false)}
            checked={item.done}
            // text={text('text', 'Checkbox Text')}
            // valueState={select('valueState', ValueState, null)}
            // wrap={boolean('wrap', false)}
            onChange={() => checkBoxChange(item.id, item.done)}
            // onChange={() => selectionChange(item.id)}
          />
          {/* <StandardListItem> */}
          <span>
            ID:{item.id} - {item.text} - finish before: {item.deadline}
          </span>
          {/* </StandardListItem> */}

          <Button onClick={edit}>Edit</Button>
          <Button onClick={() => remove(item.id)}>Delete</Button>
        </div>
      ))}
    </List>
  );
};
export default TodoList;
