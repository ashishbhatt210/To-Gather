import { getValue } from "@testing-library/user-event/dist/utils";
import { list } from "postcss";
import React, { useState, useEffect } from "react";
import "./darkchatroom.scss"
import "./darkmode.js"





const DarkChatRoom = () => {

    const sendMessage = async () => {

        const tex=message.toString()
        var timestamp = new Date().getTime();
        const authorId = currentAuthor.toString()
        const text = tex.toString();
        const time = timestamp
        var timestamp = new Date().getTime();
        const nextItem=messagesList.length;
        await fetch(`https://climex-5bd2f-default-rtdb.firebaseio.com/messages/chats/${currentEvent}/messaging/${nextItem}.json`, {
            method: 'PUT',
            body: JSON.stringify({
             authorId,
              text,
                time
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).catch((err) => {
                console.log(err.message);
            });
           setMessage(""); 
    
    };

    const [eventList, seteventList] = useState([
        {
        "author": "Rahul Singh",
        "authorId": 1,
        "date": "22/5/2023",
        "description": "We will clean delhi roads from Cp to Mayur Vihar. We welcome you all to come and become a part of this.",
        "id": 1,
        "image": "https://images.unsplash.com/photo-1618580298796-8c681e026369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80%20385w",
        "no_participant": 4,
        "title": "Let's Clean the City",
        "type": "Cleanliness"
      }
    ]); 
    const [messagesList, setmessagesList] = useState([ {
        "authorId": 0,
        "text": "",
        "time": 212121212
      }]);
    const [usersList, setUserList] = useState([]);
    const [currentEvent, setCurrentEvent] = useState(0);
    const [currentAuthor, setCurrentAuthor] = useState(0);
    const [message,setMessage]=useState("");
    const [messaging, setMessaging] = useState({
        "authorId": "",
        "text": "",
        "time": ""
    });

    useEffect(() => {

        fetch('https://climex-5bd2f-default-rtdb.firebaseio.com/messages.json')
            .then(results => results.json())
            .then(data => {
                setmessagesList(data.chats[parseInt(currentEvent)].messaging);
                // console.log(messagesList);
            })

        fetch(`https://climex-5bd2f-default-rtdb.firebaseio.com/eventList/${currentAuthor}.json`)
        .then(results => results.json())
        .then(data => {
           return seteventList(data); 
        })   

    }, [messagesList]);


    return (
        <div className="app">
            <div className="header">
                <div className="logo">
                    <a className="navbar-link" href="/">
                        <span className="navbar-brand mx-4"  href="/">TO-GATHER</span>
                    </a>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="user-settings">
                    <div className="dark-light">
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
                    </div>
                    <img className="user-profile account-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
                </div>
            </div>
            <div className="wrapper">   
                <div className="conversation-area">{
                eventList.map(events => (   

                    events.id!==currentEvent ?

                    (<div className="msg online">
                        <img className="msg-profile" src={events.image} alt="" />
                        <div className="msg-detail">
                            <div className="msg-username">{events.title}</div>
                            <div className="msg-content">
                                <span className="msg-message">{events.description}</span>
                                <span className="msg-date">20m</span>
                            </div>
                        </div>
                    </div>):(
                    <div className="msg active">
                        <img className="msg-profile" src={events.image} alt="" />
                        <div className="msg-detail">
                            <div className="msg-username">{events.title}</div>
                            <div className="msg-content">
                                <span className="msg-message">{events.description}</span>
                                <span className="msg-date">28m</span>
                            </div>
                        </div>
                    </div>)
                   
                ))              
               }
                </div>
                <div className="chat-area"> 
                    <div className="chat-area-header">
                        <div className="chat-area-title">Protect Wildlife</div>
                        <div className="chat-area-group">
                            <img className="chat-area-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
                            <img className="chat-area-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="" />
                                <img className="chat-area-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png" alt="" />
                                <span>+4</span>
                        </div>
                    </div>
                    <div className="chat-area-main">

                      {  
                       messagesList.map(chats => (
                        chats.authorId !== currentAuthor.toString() ?
                        (<div className="chat-msg">
                            <div className="chat-msg-profile">
                                <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
                                <div className="chat-msg-date">Message seen 1.22pm</div>
                            </div>
                            <div className="chat-msg-content">
                                 <div className="chat-msg-text">{chats.text}</div>
                            </div>
                        </div>):
                        (<div className="chat-msg owner">
                            <div className="chat-msg-profile">
                                <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
                                <div className="chat-msg-date">Message seen 1.22pm</div>
                            </div>
                            <div className="chat-msg-content">
                                <div className="chat-msg-text">{chats.text}</div>
                            </div>
                        </div>)
                        
                       ))
                        }
                    </div>
                    <div className="chat-area-footer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-video">
                            <path d="M23 7l-7 5 7 5V7z" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v8M8 12h8" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-paperclip">
                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
                        <input type="text" placeholder="Type something here..."  onChange={(e) => {setMessage(e.target.value);}}
                         onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            sendMessage();
                            e.target.value="";
                        }
                    }}/>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up">
                            <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DarkChatRoom;
