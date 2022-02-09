import React, { useState, useEffect } from 'react'; 
import { FaCheckCircle, FaPen, FaTrash } from "react-icons/fa";
import TextInput from './TextInput';
import { formatDate } from '../utils';

import './Entry.css';
// import EntryQuestions from './EntryQuestions';

function ViewEntry(props) {
  const { entry = {} } = props;

  const { questions } = entry;

  const [inEditingMode, setEditingMode] = useState(false);
  const [qIdMap, setQIdMap] = useState({});
  const [unsavedChanges, setUnsavedChanges] = useState({});

  useEffect(() => {
    const m = {};

    questions.forEach((q) => {
      m[q.qId] = q;
    });

    setQIdMap(m);
  }, [questions]);

  const handleTextInputChanges = ((qId, content) => {
    const newState = unsavedChanges;
    newState[qId] = content;

    setUnsavedChanges(newState);
  })

  const handleSave = () => {
    setEditingMode(false);
    console.log('handleSave unsavedChanges', unsavedChanges);
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

      <div className="Entry-body">
        <div className="Entry-body-child" id="Entry-date">
          { formatDate(new Date(entry.createdAt)) }
        </div>

        <div className="Entry-body-child Entry-questions-container">
          {
            questions.map((question) => (
              <div key={question.qId}>
                <div key={`${question.qId}_q`} className="Entry-question">
                  {question.q}
                </div>
                <TextInput
                  key={`${question.qId}_a`}
                  initialString={question.a}
                  qId={question.qId}
                  currentAnswerContentState={question.a}
                  handleTextInputChanges={handleTextInputChanges}
                  readOnly={!inEditingMode}
                />
              </div>
            ))
          }   
        </div>
      </div>
    </div>
  )
}

export default ViewEntry;
