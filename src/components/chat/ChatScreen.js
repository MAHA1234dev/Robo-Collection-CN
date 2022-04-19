import { useEffect, useState } from "react";
import robot  from '../../../../Images/robot.png'
import * as moment from "moment";
const Moment = require("moment");


function ChatScreen({ botFollowUpTrailData }) {

  const robotImg = robot

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          flexDirection: "column",
          margin: "auto",
          textAlign: "center",
          backgroundColor: "#F6EFEE",
          overflowY: "scroll",
        }}
      >
        {botFollowUpTrailData.conversationMessages.map((val, index) => {
          return !val.incoming ? (
            <>
              <div style={{ display: "flex" }} key={index}>
                <div
                  // className="fa fa-android" aria-hidden="true"
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    margin: "1rem 0.5rem",
                  }}
                >
                  <img src={robotImg} width="18px" height="14px"></img>
                </div>
                <div
                  style={{
                    width: "55%",
                    alignSelf: "self-start",
                    background: "#AFEDDC",
                    borderRadius: "10px",
                    fontFamily: "Georgia, serif",
                    fontSize: "12px",
                    fontStyle: "oblique",
                    wordWrap: "break-word",
                    marginTop: "1rem",
                    padding: "5px",
                    boxShadow: "1px 2px 10px -4px #000000",
                  }}
                >
                  {val.messageText}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "small",
                  justifyContent: "flex-start",
                  margin: "0rem 2.5rem",
                }}
              >
                {moment(val.messageTime).format(
                  "MMMM Do, HH:mm:ss"
                )}
              </div>
            </>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <div
                  style={{
                    width: "55%",

                    alignSelf: "self-end",
                    background: "#117A65",
                    borderRadius: "10px",
                    color: "white",
                    wordWrap: "break-word",
                    boxShadow: "1px 2px 10px -4px #000000",
                    fontFamily: "Georgia, serif",
                    fontSize: "12px",
                    fontStyle: "oblique",
                    padding: "5px",
                  }}
                >
                  {val.messageText}
                </div>
                <div
                  className="fa fa-user"
                  aria-hidden="true"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    margin: "0.5rem ",
                  }}
                ></div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  fontSize: "small",
                  margin: "0rem 2.5rem",
                }}
              >
                {moment(val.messageTime).format(
                  "MMMM Do, HH:mm:ss"
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ChatScreen;
