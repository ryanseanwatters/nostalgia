import React from 'react'; 
import { FaCheckCircle, FaPen, FaTrash } from "react-icons/fa";
import TextInput from './TextInput';
import { formatDate } from '../utils';

import './Entry.css';

function NewEntry() {

  return (
    <div className="Entry">
     
      <div className="Entry-buttons">
        <div className="Entry-buttons-child" alt="save">
          <FaCheckCircle onClick={() => alert("save clicked")} className="Entry-buttons-child-icon" />
        </div> 
      </div>

      <div className="Entry-body"> 
        <div className="Entry-body-child" id="Entry-date">
          { formatDate(new Date()) }
        </div>
        
        <div className="Entry-body-child Entry-questions-container">
          <div>
            <div className="Entry-question">
              what does your normal day look like?
            </div>
            <TextInput />
          </div>

          <div>
            <div className="Entry-question">
              what are you biggest goals right now? 
            </div>
            <TextInput />
          </div>

          <div>
            <div className="Entry-question">
              what are you watching nowadays?
            </div>
            <TextInput />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewEntry;