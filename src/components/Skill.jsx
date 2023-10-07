/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./../styles/SKill.scss";

// สร้างเทมเพลตการ์ด
function Card({ data }) {
  return (
    <div className="card">
      <div className="card_img">
        <img width={150} src={data.image} alt={data.title} />
      </div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}

// สร้างคอมโพเนนต์เรียกใช้การ์ด
function CardList({ dataList }) {
  return (
    <div className="card-list">
      {dataList.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

// ตัวอย่างข้อมูล
const data = [
  {
    title: "HTML",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ratione cumque nobis natus ducimus doloribus dolor iure omnis? Ipsa, illum?",
    image:
      "https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png",
  },
  {
    title: "CSS",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ratione cumque nobis natus ducimus doloribus dolor iure omnis? Ipsa, illum?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
  },
  {
    title: "JAVA Script",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ratione cumque nobis natus ducimus doloribus dolor iure omnis? Ipsa, illum?",
    image: "https://iconape.com/wp-content/png_logo_vector/javascript-logo.png",
  },
  {
    title: "ReactJS",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ratione cumque nobis natus ducimus doloribus dolor iure omnis? Ipsa, illum?",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
];

function Skill() {
  return (
    <>
      <div className="skill_con">
        <h1>SKILL</h1>
        <CardList dataList={data} />
      </div>
    </>
  );
}

export default Skill;
