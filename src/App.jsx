import { useState } from "react";
import data from "./data.json";

import "./App.css";
import Notification from "./components/notification/Notification";
import Starter from "./components/notification/Starter";

function App() {
  const [notifications, setNotifications] = useState(data);
  const [counter, setCounter] = useState(
    notifications.filter((notification) => !notification.isRead).length
  );

  return (
    <>
      <div className="container">
        <Starter
          counter={counter}
          setNotifications={setNotifications}
          setCounter={setCounter}
          notifications={notifications}
          key={notifications.id}
        />
        <main>
          {notifications.map((notification) => {
            return (
              <Notification
                notification={notification}
                notifications={notifications}
                setNotifications={setNotifications}
                key={notifications.id}
                counter={counter}
                setCounter={setCounter}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
