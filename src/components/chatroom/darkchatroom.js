import React, { useState, useEffect } from "react";
import "./darkchatroom.scss"
import "./darkmode.js"

const darkChatRoom = () => {
    return (
        <div className="app">
            <div className="header">
                <div className="logo">
                    <span className="navbar-brand mx-4"  href="#">TO-GATHER</span>
                    <div className="collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <a className="nav-link " aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/chatroom">Discussion</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="user-settings">
                    <div className="dark-light">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
                    </div>
                    <div className="settings">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
                    </div>
                    <img className="user-profile account-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
                </div>
            </div>
            <div className="wrapper">
                <div className="conversation-area">
                    <div className="msg online">
                        <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
                        <div className="msg-detail">
                            <div className="msg-username">Madison Jones</div>
                            <div className="msg-content">
                                <span className="msg-message">What time was our meet</span>
                                <span className="msg-date">20m</span>
                            </div>
                        </div>
                    </div>
                    <div className="msg">
                        <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png" alt="" />
                        <div className="msg-detail">
                            <div className="msg-username">Miguel Cohen</div>
                            <div className="msg-content">
                                <span className="msg-message">Adaptogen taiyaki austin jean shorts brunch</span>
                                <span className="msg-date">20m</span>
                            </div>
                        </div>
                    </div>
                    <div className="msg active">
                        <div className="msg-profile group">
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
                                <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
                                <path d="M22 8.5l-10 7-10-7" />
                                <path d="M2 15.5l10-7 10 7M12 2v6.5" /></svg>
                        </div>
                        <div className="msg-detail">
                            <div className="msg-username">CodePen Group</div>
                            <div className="msg-content">
                                <span className="msg-message">Aysenur: I love CSS</span>
                                <span className="msg-date">28m</span>
                            </div>
                        </div>
                    </div>
                    <div className="msg online">
                        <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="" />
                        <div className="msg-detail">
                            <div className="msg-username">Lea Debere</div>
                            <div className="msg-content">
                                <span className="msg-message">Shoreditch iPhone jianbing</span>
                                <span className="msg-date">45m</span>
                            </div>
                        </div>
                    </div>
                    <div className="msg online">
                        <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29+%281%29.png" alt="" />
                        <div className="msg-detail">
                            <div className="msg-username">Jordan Smith</div>
                            <div className="msg-content">
                                <span className="msg-message">Snackwave craft beer raclette, beard kombucha </span>
                                <span className="msg-date">2h</span>
                            </div>
                        </div>
                    </div>
                    <div className="msg">
                        <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%284%29+%281%29.png" alt="" />
                        <div className="msg-detail">
                            <div className="msg-username">Jared Jackson</div>
                            <div className="msg-content">
                                <span className="msg-message">Tattooed brooklyn typewriter gastropub</span>
                                <span className="msg-date">18m</span>
                            </div>
                        </div>
                    </div>
                    <div className="msg online">
                        <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
                            <div className="msg-detail">
                                <div className="msg-username">Henry Clark</div>
                                <div className="msg-content">
                                    <span className="msg-message">Ethical typewriter williamsburg lo-fi street art</span>
                                    <span className="msg-date">2h</span>
                                </div>
                            </div>
                    </div>
                    <div className="msg">
                        <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/qs6F3dgm.png" alt="" />
                        <div className="msg-detail">
                            <div className="msg-username">Jason Mraz</div>
                            <div className="msg-content">
                                <span className="msg-message">I'm lucky I'm in love with my best friend</span>
                                <span className="msg-date">4h</span>
                            </div>
                        </div>
                    </div>
                    <div className="msg">
                        <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%288%29.png" alt="" />
                        <div className="msg-detail">
                            <div className="msg-username">Chiwa Lauren</div>
                            <div className="msg-content">
                                <span className="msg-message">Pabst af 3 wolf moon</span>
                                <span className="msg-date">28m</span>
                            </div>
                        </div>
                    </div>
                    <div className="msg">
                        <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%289%29.png" alt="" />
                        <div className="msg-detail">
                            <div className="msg-username">Caroline Orange</div>
                            <div className="msg-content">
                                <span className="msg-message">Bespoke aesthetic lyft woke cornhole</span>
                                <span className="msg-date">35m</span>
                            </div>
                        </div>
                    </div>
                    <div className="msg">
                        <img className="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%286%29.png" alt="" />
                        <div className="msg-detail">
                            <div className="msg-username">Lina Ashma</div>
                            <div className="msg-content">
                                <span className="msg-message">Migas food truck crucifix vexi</span>
                                <span className="msg-date">42m</span>
                            </div>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </div>
                <div className="chat-area">
                    <div className="chat-area-header">
                        <div className="chat-area-title">CodePen Group</div>
                        <div className="chat-area-group">
                            <img className="chat-area-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
                            <img className="chat-area-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="" />
                                <img className="chat-area-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png" alt="" />
                                <span>+4</span>
                        </div>
                    </div>
                    <div className="chat-area-main">
                        <div className="chat-msg">
                            <div className="chat-msg-profile">
                                <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
                                <div className="chat-msg-date">Message seen 1.22pm</div>
                            </div>
                            <div className="chat-msg-content">
                                <div className="chat-msg-text">Luctus et ultrices posuere cubilia curae.</div>
                                <div className="chat-msg-text">
                                    <img src="https://media0.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e47344fb5d835f832a976d1007c241548cc4eea4e7e&rid=giphy.gif" /></div>
                                <div className="chat-msg-text">Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Pretium lectus quam id leo.</div>
                            </div>
                        </div>
                        <div className="chat-msg owner">
                            <div className="chat-msg-profile">
                                <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
                                <div className="chat-msg-date">Message seen 1.22pm</div>
                            </div>
                            <div className="chat-msg-content">
                                <div className="chat-msg-text">Sit amet risus nullam eget felis eget. Dolor sed viverra ipsum😂😂😂</div>
                                <div className="chat-msg-text">Cras mollis nec arcu malesuada tincidunt.</div>
                            </div>
                        </div>
                        <div className="chat-msg">
                            <div className="chat-msg-profile">
                                <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="" />
                                    <div className="chat-msg-date">Message seen 2.45pm</div>
                            </div>
                            <div className="chat-msg-content">
                                <div className="chat-msg-text">Aenean tristique maximus tortor non tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae😊</div>
                                <div className="chat-msg-text">Ut faucibus pulvinar elementum integer enim neque volutpat.</div>
                            </div>
                        </div>
                        <div className="chat-msg owner">
                            <div className="chat-msg-profile">
                                <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
                                <div className="chat-msg-date">Message seen 2.50pm</div>
                            </div>
                            <div className="chat-msg-content">
                                <div className="chat-msg-text">posuere eget augue sodales, aliquet posuere eros.</div>
                                <div className="chat-msg-text">Cras mollis nec arcu malesuada tincidunt.</div>
                            </div>
                        </div>
                        <div className="chat-msg">
                            <div className="chat-msg-profile">
                                <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png" alt="" />
                                <div className="chat-msg-date">Message seen 3.16pm</div>
                            </div>
                            <div className="chat-msg-content">
                                <div className="chat-msg-text">Egestas tellus rutrum tellus pellentesque</div>
                            </div>
                        </div>
                        <div className="chat-msg">
                            <div className="chat-msg-profile">
                                <img className="chat-msg-img account-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png" alt="" />
                                    <div className="chat-msg-date">Message seen 3.16pm</div>
                            </div>
                            <div className="chat-msg-content">
                                <div className="chat-msg-text">Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et.</div>
                            </div>
                        </div>
                        <div className="chat-msg owner">
                            <div className="chat-msg-profile">
                                <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="" />
                                <div className="chat-msg-date">Message seen 2.50pm</div>
                            </div>
                            <div className="chat-msg-content">
                                <div className="chat-msg-text">Tincidunt arcu non sodales😂</div>
                            </div>
                        </div>
                        <div className="chat-msg">
                            <div className="chat-msg-profile">
                                <img className="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt=""/>
                                    <div className="chat-msg-date">Message seen 3.16pm</div>
                            </div>
                            <div className="chat-msg-content">
                                <div className="chat-msg-text">Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et🥰</div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-area-footer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video">
                            <path d="M23 7l-7 5 7 5V7z" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-image">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus-circle">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v8M8 12h8" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-paperclip">
                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
                        <input type="text" placeholder="Type something here..." />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-smile">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-thumbs-up">
                            <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default darkChatRoom;
