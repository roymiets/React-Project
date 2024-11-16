export default function TabButton({ children, onSelect, isSelected, handleClick }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button type='button' onClick={handleClick} name ={children}  id ={children} className={isSelected ? 'active' : undefined}>
        {children}
      </button>
    </li>
  );
}
