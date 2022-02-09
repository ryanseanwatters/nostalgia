// out of date as of feb 9 @ 2:20 pm

// import React, { useEffect, useState } from 'react'; 
// import { FaCheckCircle, FaPen, FaTrash } from "react-icons/fa";
// import TextInput from './TextInput';
// import { formatDate } from '../utils';

// import './Entry.css';

// function EntryQuestions({ entryId, questions = [] }) {
//   const [qIdMap, setQIdMap] = useState({});
//   const [unsavedChanges, setUnsavedChanges] = useState({});

//   useEffect(() => {
//     const m = {};

//     questions.forEach((q) => {
//       m[q.qId] = q;
//     });

//     setQIdMap(m);
//   }, [questions]);

//   const handleTextInputChanges = ((qId, content) => {
//     const newState = unsavedChanges;
//     newState[qId] = content;

//     setUnsavedChanges(newState);
//     // console.log('EntryQuestions unsavedChanges', unsavedChanges)
//   })

//   return (
//     <div className="Entry-body-child Entry-questions-container">
//       {
//         questions.map((question) => (
//           <div key={question.qId}>
//             <div key={`${question.qId}_q`} className="Entry-question">
//               {question.q}
//             </div>
//             <TextInput
//               key={`${question.qId}_a`}
//               initialString={question.a}
//               qId={question.qId}
//               currentAnswerContentState={question.a}
//               handleTextInputChanges={handleTextInputChanges}
//             />
//           </div>
//         ))
//       }   
//     </div>
//   )
// }

// export default EntryQuestions;