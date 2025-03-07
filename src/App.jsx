import { useState } from "react";
import data from "./data.json";

import "./App.css";

function App() {
  const [notifications, setNotifications] = useState(data);
  const [counter, setCounter] = useState(
    notifications.filter((notification) => !notification.isRead).length
  );

  function read(id) {
    const updateNotifications = notifications.map((notification) => {
      if (notification.id == id) {
        return { ...notification, isRead: true };
      } else {
        return notification;
      }
    });

    setNotifications([...updateNotifications]);

    const clickedNotification = notifications.find(
      (notification) => notification.id == id
    );
    if (!clickedNotification.isRead) {
      setCounter(counter - 1);
    }
  }

  function markAllAsRead() {
    const updateNotifications = notifications.map((notification) => {
      return { ...notification, isRead: true };
    });
    setCounter(0);
    setNotifications([...updateNotifications]);
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="left">
            <h1>Notifications</h1>
            <span>{counter}</span>
          </div>
          <div className="right">
            <h2 onClick={markAllAsRead}>Mark all as read</h2>
          </div>
        </div>

        <main>
          {notifications.map((notifications) => {
            return (
              <div
                className="notifications"
                style={{
                  backgroundColor: !notifications.isRead ? "#F7FAFD" : "",
                }}
                onClick={() => read(notifications.id)}
                key={notifications.id}
              >
                <img src={notifications.profilePic} className="image" />
                <div className="info">
                  <span className="name">{notifications.username}</span>
                  {notifications.action ? (
                    <span className="action">{notifications.action}</span>
                  ) : null}
                  {notifications.post ? (
                    <span className="post">{notifications.post}</span>
                  ) : null}

                  {notifications.groupName ? (
                    <span className="group">{notifications.groupName}</span>
                  ) : null}
                  {!notifications.isRead ? (
                    <div className="circle"></div>
                  ) : null}

                  {notifications.time ? (
                    <p className="time">{notifications.time}</p>
                  ) : null}

                  {notifications.text ? (
                    <div className="text-div">
                      <span className="text">{notifications.text}</span>
                    </div>
                  ) : null}
                </div>

                {notifications.userPicture ? (
                  <img src={notifications.userPicture} className="userpic" />
                ) : null}
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
