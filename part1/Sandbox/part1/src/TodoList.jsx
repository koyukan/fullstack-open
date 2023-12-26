/* eslint-disable react/no-unescaped-entities */
export const Item =  ({ name, isDone }) =>  {
  
  return <li className="item">{isDone ? <del>{name}</del> : name}</li>
}



const TodoList = () => {
  
  const name = 'Hedy Lamarr';
  
    return (
    
    <>
    <h1> {name}'s Todos</h1>
    <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo"
    />
    <ul>
      <Item name="Invent a radio guidance system" isDone={true} />
      <Item name="Become a Hollywood star" isDone={true} />
      <Item name="Invent frequency hopping" isDone={false} />
    </ul>
    </>
  );
}


export default TodoList;