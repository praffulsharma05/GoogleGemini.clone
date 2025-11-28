 

import { useState, useContext } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const SideBar = () => {
    const [expanded, setExpanded] = useState(false);

    const { onSent, prevPrompts, setRecentPrompt,newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className='top'>
                <img
                    onClick={() => setExpanded((prev) => !prev)}
                    className='menu'
                    src={assets.menu_icon}
                    alt=''
                />

                <div onClick={()=> newChat()} className='new-chat'>
                    <img src={assets.plus_icon} alt='' />
                    {expanded ? <p>New chat</p> : null}
                </div>

                {expanded ? (
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>

                        {prevPrompts.map((item, index) => {
                            return (
                            <div onClick={()=>loadPrompt(item)} className='recent-entry'
                                key={index}
                                // onClick={() => {
                                //     setRecentPrompt(item);
                                //     onSent(item);
                                // }}
                            >
                                <img src={assets.message_icon} alt='' />
                                <p>{item.slice(0, 18)}...</p>
                            </div>
                            )
})}
                    </div>
                ) : null}
            </div>

            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={assets.question_icon} alt='' />
                    {expanded ? <p>Help</p> : null}
                </div>

                <div className='bottom-item recent-entry'>
                    <img src={assets.history_icon} alt='' />
                    {expanded ? <p>History</p> : null}
                </div>

                <div className='bottom-item recent-entry'>
                    <img src={assets.setting_icon} alt='' />
                    {expanded ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
