import "./notification.css";

export default function Starter({
  counter,
  setNotifications,
  setCounter,
  notifications,
}) {
  function markAllAsRead() {
    const updateNotifications = notifications.map((notification) => {
      return { ...notification, isRead: true };
    });
    setCounter(0);
    setNotifications([...updateNotifications]);
  }

  return (
    <div className="header">
      <div className="left">
        <h1>Notifications</h1>
        <span>{counter}</span>
      </div>
      <div className="right">
        <h2 onClick={markAllAsRead}>Mark all as read</h2>
      </div>
    </div>
  );
}
