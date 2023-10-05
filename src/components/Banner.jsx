/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./../styles/Banner.scss";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner_con">
          <div className="titel">
            <h1>Hi I'm Ittipon</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit
              eum voluptatem dolorum minima provident adipisci officiis velit at
              esse error, possimus perspiciatis accusamus ipsum pariatur
              laboriosam dolorem rem vitae.
            </p>
          </div>
          <div className="img_me">
            <img
              src="https://scontent.fcnx2-1.fna.fbcdn.net/v/t39.30808-6/331476986_1467046164132053_4758737825218260078_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFRHJrAbPYWMyVXCp7-PuCbmKQ6YpYJAhaYpDpilgkCFnDz8KRYgMM2x1J0DnHXgKN_gBel1XQX8s-Ocdz-RTft&_nc_ohc=N-JU1mma7hUAX_dY8FL&_nc_ht=scontent.fcnx2-1.fna&oh=00_AfBCLLgKTiv5WeCarTjUgUGgCghO448uEasZ22TDl9p4kA&oe=6522F748"
              alt="img_me"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
