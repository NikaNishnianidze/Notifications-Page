import "./notification.css";

export default function Notification({
  notifications,
  setNotifications,
  notification,
  counter,
  setCounter,
}) {
  function read(id) {
    const updateNotifications = notifications.map((notification) => {
      if (notification.id == id) {
        return { ...notification, isRead: true };
      }
      return notification;
    });

    setNotifications([...updateNotifications]);

    const clickedNotification = notifications.find(
      (notification) => notification.id == id
    );
    if (!clickedNotification.isRead) {
      setCounter(counter - 1);
    }
  }

  return (
    <div
      className="notifications"
      style={{
        backgroundColor: !notification.isRead ? "#F7FAFD" : "",
      }}
      onClick={() => read(notification.id)}
    >
      <img src={notification.profilePic} className="image" />
      <div className="info">
        <span className="name">{notification.username}</span>
        {notification.action ? (
          <span className="action">{notification.action}</span>
        ) : null}
        {notification.post ? (
          <span className="post">{notification.post}</span>
        ) : null}

        {notification.groupName ? (
          <span className="group">{notification.groupName}</span>
        ) : null}
        {!notification.isRead ? <div className="circle"></div> : null}

        {notification.time ? <p className="time">{notification.time}</p> : null}

        {notification.text ? (
          <div className="text-div">
            <span className="text">{notification.text}</span>
          </div>
        ) : null}
      </div>

      {notification.userPicture ? (
        <img src={notification.userPicture} className="userpic" />
      ) : null}
    </div>
  );
}
