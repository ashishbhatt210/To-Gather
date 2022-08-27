import React, { useState, useEffect } from "react";
import "./ChatRoom.css"
import userData from "../data/user.json"
import usermessages from "../data/eventchats.json"
import users from "../data/user.json"
import button from "bootstrap/js/src/button";
const ChatRoom = () => {
    const [messagesList, setmessagesList] = useState([]);
    const [usersList, setUserList] = useState(users.users);
    console.log(usersList);
    const [messaging, setMessaging] = useState({
        "authorId": "",
        "text": "",
        "time": ""
    });

    const currentMessageId="0";
const currentUserId = 0;

const postMessage =(event)=>{
    const text=event.target.value;
    var timestamp = new Date().getTime();
    setMessaging({"authorId": currentUserId.toString(),"text":text.toString(),"time":timestamp.toString()});
};
    const sendMessage = async (event) => {
        event.preventDefault();
        const {authorId,text,time}=messaging
        var timestamp = new Date().getTime();
        const nextItem=messagesList.length;
        await fetch(`https://climex-5bd2f-default-rtdb.firebaseio.com/messages/chats/${currentMessageId}/messaging/${nextItem}.json`, {
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
        setMessaging({"authorId": currentUserId.toString(),"text":"","time":timestamp.toString()});

    };

// const eventmessages = usermessages.chats[parseInt(currentMessageId)].messaging

    useEffect(() => {

        fetch('https://climex-5bd2f-default-rtdb.firebaseio.com/messages.json')
            .then(results => results.json())
            .then(data => {
                setmessagesList(data.chats[parseInt(currentMessageId)].messaging);
                console.log(messagesList);


            })

    }, [messagesList]);


    return (


        <div id="container">
            <aside>
                <header>
                    <input type="text" placeholder="search"/>
                </header>
                <ul>{
                    userData.users.map(user => (
                        user.id !== currentUserId ?

                            (<li key={user.id}>
                            <img src={user.image} alt=""/>

                            <div>
                                <h2>{user.name}</h2>
                                <h3>
                                    <span className="status orange"></span>
                                    {user.status}
                                </h3>
                            </div>

                        </li>):null

                    ))
                }
                </ul>
            </aside>
            <main>
                <header>
                    <img src={userData.users[parseInt(currentUserId)].image} alt=""/>
                        <div>
                            <h2>{userData.users[parseInt(currentUserId)].name}</h2>
                            <h3>already 1902 messages</h3>
                        </div>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt=""/>
                </header>
                <ul id="chat">
                    {
                        messagesList.map(chats => (
                            chats.authorId !== currentUserId.toString() ?
                                (<li className="you">
                             <div className="entete">
                                <span className="status green"></span>
                                <h2>{usersList[parseInt(chats.authorId)].name}</h2>
                                <h3>10:12AM, Today</h3>
                            </div>
                            <div className="triangle"></div>
                            <div className="message">
                                {chats.text}
                            </div>
                        </li>):(<li className="me">
                                    <div className="entete">
                                        <span className="status green"></span>
                                        <h2>{usersList[parseInt(chats.authorId)].name}</h2>
                                        <h3>10:12AM, Today</h3>
                                    </div>
                                    <div className="triangle"></div>
                                    <div className="message">
                                        {chats.text}
                                    </div>
                                </li>)
                        ))
                    }
                </ul>
                <footer className="align-items-center d-flex flex-column">

                    <textarea placeholder="Type your message" value={messaging.text} onChange={postMessage}></textarea>
                    <div className="footer_class">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt=""/>
                    <button className="button_send" onClick={sendMessage} role="button">Send</button>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default ChatRoom;