import React from 'react';
 
const initialList = [
  { id: 'a', name: 'Task 1' },
  { id: 'b', name: 'Task 2' },
  { id: 'c', name: 'Task 3' },
];
 
const ListWithRemoveItem = () => {
  const [list, setList] = React.useState(initialList);
 
  const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  };
 
  return (
    <ul>
      {list.map(item => (
        <li key={item.id} style={{textAlign: 'center'}}>
          <label>{item.name}</label>
          <button type="button" onClick={() => handleClick(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};
 
export default ListWithRemoveItem;