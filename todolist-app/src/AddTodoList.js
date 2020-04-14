// import React, { useState } from 'react';
// import { Input } from '@ui5/webcomponents-react/lib/Input';
// import { InputType } from '@ui5/webcomponents-react/lib/InputType';
// import { Button } from '@ui5/webcomponents-react/lib/Button';
// import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

// const AddTodoList = (props) => {
//   const [ AddToList, handleInputTextValue ] = props;

//   return (
//     <section>
//       <div>
//         <Input
//           placeholder="input your todo...."
//           disabled={false}
//           readonly={false}
//           type={InputType.Text}
//           // valueState={ValueState.Information}
//           onInput={'action:onInput'}
//           onSubmit={'action"onSubmit'}
//           onSuggestionItemSelect={'action:onSuggestionItemSelect'}
//           icon={null}
//           onChange={handleInputTextValue(event.target.value)}
//           style={{ width: '80%' }}
//         ></Input>
//         <Button
//           design={'design'}
//           icon={'add'}
//           iconEnd={'iconEnd'}
//           onClick={AddToList}
//           style={{ width: '20%' }}
//         >
//           Add
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default AddTodoList;
