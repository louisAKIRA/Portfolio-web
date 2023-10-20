/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./../styles/Banner.scss";
import ReactTypingEffect from "react-typing-effect";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner_con">
          <div className="titel">
            <h1>
              Hi I'm
              <span>
                <ReactTypingEffect
                  text={["Iiitpon", "a Web Developer"]}
                  speed={150}
                  eraseDelay={250}
                  className="typingEffect"
                />
              </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit
              eum voluptatem dolorum minima provident adipisci officiis velit at
              esse error, possimus perspiciatis accusamus ipsum pariatur
              laboriosam dolorem rem vitae.
            </p>
          </div>
          <div className="img_me">
            <img
              src="https://scontent.fcnx2-1.fna.fbcdn.net/v/t39.30808-6/331476986_1467046164132053_4758737825218260078_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFRHJrAbPYWMyVXCp7-PuCbmKQ6YpYJAhaYpDpilgkCFnDz8KRYgMM2x1J0DnHXgKN_gBel1XQX8s-Ocdz-RTft&_nc_ohc=ieXPp3krj5gAX9RCKWQ&_nc_ht=scontent.fcnx2-1.fna&oh=00_AfCNvuxYuX5ZWjAbVj4nppU6bLqqyk1lB3oR18lP-ObG9w&oe=6536BDC8"
              alt="img_me"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
