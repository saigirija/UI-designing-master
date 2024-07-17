import React from "react";
import MagicBell, {
  FloatingNotificationInbox,
} from "@magicbell/magicbell-react";

const theme = {
  icon: {
    display: "inline-block",
    width: "100%",
    borderColor: "#003349",
  },
  unseenBadge: { backgroundColor: "#af0d21" },
  header: {
    backgroundColor: "#003349",
    textColor: "#ffffff",
    borderRadius: "16px",
    fontFamily: "inherit",
  },
  footer: {
    backgroundColor: "#003349",
    textColor: "#ffffff",
    borderRadius: "16px",
    fontFamily: "inherit",
  },
  notification: {
    default: {
      textColor: "#fff",
      borderRadius: "8px",
      backgroundColor: "#003349",
      fontFamily: "inherit",
    },
    unseen: {
      backgroundColor: "#003349",
      textColor: "#fff",
      borderRadius: "8px",
      fontFamily: "inherit",
    },
    unread: {
      backgroundColor: "#003349",
      textColor: "#fff",
      borderRadius: "8px",
      fontFamily: "inherit",
    },
  },
};

const ChatApp = () => {
  return (
    <div className="chat_app">
      <MagicBell
        apiKey="1c76d8babcc928ba15ef090fb6daa82dda3d204b"
        userEmail="suryachidurala123@gmail.com"
        theme={theme}
      >
        {(props) => (
          <FloatingNotificationInbox width={400} height={500} {...props} />
        )}
      </MagicBell>
    </div>
  );
};

export default ChatApp;
