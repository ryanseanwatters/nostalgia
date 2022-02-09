import React from 'react'; 
import { FaPen, FaTrash } from "react-icons/fa";
import TextInput from './TextInput';

import './Entry.css';

class Entry extends React.Component {
    render() {
        return (
            <div className='Entry'>
                <div className='Entry-buttons'>
                    <div className='Entry-buttons-child'>
                        <FaPen onClick={() => alert('edit clicked')} className='Entry-buttons-child-icon' />
                    </div>
                    <div className='Entry-buttons-child'>
                        <FaTrash onClick={() => alert('delete clicked')} lassName='Entry-buttons-child-icon' />
                    </div>
                    {/* <div className='Entry-buttons-close'></div> */}
                </div>
                <div className='Entry-body'> 
                    <div className='Entry-body-child' id='Entry-date'> febuary 7, 2021 </div>
                    <div className='Entry-body-child Entry-questions-container'>
                        <div>
                            <div className='Entry-question'>
                                what does your normal day look like?
                            </div>

                            <TextInput />
                        </div>

                        <div>
                            <div className='Entry-question'>
                                what are you biggest goals right now? 
                            </div>
                            {/* <input className='Entry-question-input'></input> */}

                            <TextInput />
                        </div>


                        <div>
                            <div className='Entry-question'>
                            what are you watching nowadays?
                            </div>
                            {/* <input className='Entry-question-input'></input> */}

                            <TextInput />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Entry;
