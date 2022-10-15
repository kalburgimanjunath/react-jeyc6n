import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const TextEditor = ({main}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row',alignItems:'center' }}>
      <div onClick={}>
        <FontAwesomeIcon icon={faPlus} color="blue" size={main?'2x':'md'} />
        {/* <div>Menu goes here</div> */}
      </div>
      <div className={main ? `editor_main`:'editor'}>
        <input type="text" className="editor" id="editor" placeholder={main ? 'Title':'Tell Your Story'}/>
      </div>
    </div>
  );
};

export default function Editor() {
  const [allEditors,setEditor] = useState([]);
  
  const addEditor= ()=>{
    const newComponent = <TextEditor/>
    setEditor([newComponent,...allEditors])
  }
  console.log(allEditors);
  return (
    <div>
      <TextEditor main={true}/>      
      {allEditors}
      <div onClick={addEditor} style={{height:100}}></div>
    </div>
  );
}
