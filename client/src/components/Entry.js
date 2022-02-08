import React from 'react'; 
import { FaPen, FaTrash } from "react-icons/fa";

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
                    <div className='Entry-body-child Entry-questions'>
                        <div className='Entry-question'>
                            <div>
                                what is your favorite food?
                            </div>
                            <input className='Entry-question-input'></input>
                        </div>

                        <div className='Entry-question'>
                            <div>
                                what is your favorite food?
                            </div>
                            <input className='Entry-question-input'></input>
                        </div>

                        <div className='Entry-question'>
                            <div>
                                what is your favorite food?
                            </div>
                            <input className='Entry-question-input'></input>
                        </div>

                        <div className='Entry-question'>
                            <div>
                                what is your favorite food?
                            </div>
                            <input className='Entry-question-input'></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Entry;
