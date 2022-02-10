import React, { useState, useEffect } from 'react'; 
import { FaCheckCircle, FaPen, FaTrash } from "react-icons/fa";
import TextInput from './TextInput';
import { formatDate } from '../utils';

import './Entry.css';

const newQuestions = [
  {
    qId: '20',
    q: 'what does your normal day look like?',
    a: null,
  },
  {
    qId: '21',
    q: 'what are you biggest goals right now?',
    a: null,
  },
  {
    qId: '22',
    q: 'what are you watching nowadays?',
    a: null,
  }
];

const initUnsavedChanges = {
  '20': {
    qId: '20',
    q: 'what does your normal day look like?',
    a: null,
  },
  '21': {
    qId: '21',
    q: 'what are you biggest goals right now?',
    a: null,
  },
  '22': {
    qId: '22',
    q: 'what are you watching nowadays?',
    a: null,
  }
}

const API_URL = 'http://localhost:4200';

function NewEntry(props) {
  const [unsavedChanges, setUnsavedChanges] = useState(initUnsavedChanges);

  const handleTextInputChanges = ((qId, content) => {
    const newState = unsavedChanges;
    newState[qId] = content;

    setUnsavedChanges(newState);
  });

  const handleSave = async () => {
    await fetch(`${API_URL}/user/1/entry`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ questions: unsavedChanges }),
    }).then(() => window.location.reload())
  }

  return (
    <div className="Entry">
      <div className="Entry-buttons">   
          <div className="Entry-buttons-child" onClick={handleSave}>
            <FaCheckCircle className="Entry-buttons-child-icon" />
          </div>
      </div>

      <div className="Entry-body">
        <div className="Entry-body-child" id="Entry-date">
          { formatDate(new Date()) }
        </div>

        <div className="Entry-body-child Entry-questions-container">
          {
            newQuestions.map((question) => (
              <div key={question.qId}>
                
                <div key={`${question.qId}_q`} className="Entry-question">
                  {question.q}
                </div>

                <TextInput
                  key={`${question.qId}_a`}
                  qId={question.qId}
                  initialAnswerContentState={question.a}
                  handleTextInputChanges={handleTextInputChanges}
                />

              </div>
            ))
          }   
        </div>
      </div>
    </div>
  )
}

export default NewEntry;

// const { useState, useEffect } = require( 'react'); 
// const React = require( 'react'); 
// const { FaCheckCircle, FaPen, FaTrash } = require( "react-icons/fa");
// const TextInput = require( './TextInput');
// const { formatDate } = require( '../utils');

// require('./Entry.css');
