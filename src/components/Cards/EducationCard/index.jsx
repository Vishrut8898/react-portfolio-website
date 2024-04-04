import React from "react";
import { Card, Top, Image, Body, Name, Degree, Date, Description, Span } from "./EducationCardStyledComponent";

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
