import React, { useState, useEffect } from 'react'; 
import { FaCheckCircle, FaPen, FaTrash } from "react-icons/fa";
import TextInput from './TextInput';
import { formatDate } from '../utils';

import './Entry.css';

const API_URL = 'http://localhost:4200';

function ViewEntry(props) {
  const { entryId = '' } = props;

  const [entry, setEntry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [inEditingMode, setEditingMode] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState({});

  useEffect(() => { getEntry(); }, [entryId]);

  const getEntry = async () => {
    setIsLoading(true);

    await fetch(`${API_URL}/user/1/entry/${entryId}`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(({ entry }) => setEntry(entry))
    .then(() => setIsLoading(false));
  };

  const handleTextInputChanges = ((qId, content) => {
    const newState = unsavedChanges;
    newState[qId] = content;

    setUnsavedChanges(newState);
  });

  const handleSave = async () => {
    setEditingMode(false);

    await fetch(`${API_URL}/user/1/entry/${entry.entryId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ changes: unsavedChanges }),
    });
  }

  return (
    <div className="Entry">
      <div className="Entry-buttons">   
        {!inEditingMode ?
          <div className="Entry-buttons-child" onClick={() => setEditingMode(true)}>
            <FaPen className="Entry-buttons-child-icon" />
          </div> : null
        }

        {inEditingMode ?
          <div className="Entry-buttons-child" onClick={handleSave}>
            <FaCheckCircle className="Entry-buttons-child-icon" />
          </div> : null
        }

        {!inEditingMode ?
          <div className="Entry-buttons-child" onClick={() => alert("delete clicked")}>
            <FaTrash className="Entry-buttons-child-icon" />
          </div> : null
        }
      </div>

      {!isLoading ? <div className="Entry-body">
        <div className="Entry-body-child" id="Entry-date">
          { formatDate(new Date(entry.createdAt)) }
        </div>

        <div className="Entry-body-child Entry-questions-container">
          {
            entry.questions.map((question) => (
              <div key={question.qId}>
                
                <div key={`${question.qId}_q`} className="Entry-question">
                  {question.q}
                </div>

                <TextInput
                  key={`${question.qId}_a`}
                  qId={question.qId}
                  initialAnswerContentState={question.a}
                  handleTextInputChanges={handleTextInputChanges}
                  readOnly={!inEditingMode}
                />
              
              </div>
            ))
          }   
        </div>
      </div> : null }
    </div>
  )
}

export default ViewEntry;
