import { format, utcToZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Colors from "../../../styles/colors";

export interface TopContentsProps {
  name: string;
  developer: string[];
  publisher: string[];
  releaseDate: string;
}

interface Info {
  categoryName: string;
  content: string;
}

export function TopContents({ name, developer, publisher, releaseDate }: TopContentsProps) {
  const [infoList, setInfoList] = useState<Info[]>();

  const setInfoData = () => {
    setInfoList([
      { categoryName: "개발사", content: developer.join(", ") },
      { categoryName: "배급사", content: publisher.join(", ") },
      { categoryName: "출시일", content: transTimezone(releaseDate) },
    ]);
  };

  const transTimezone = (time: string) => {
    const date = new Date(time);
    const timeZone = "Asia/Seoul";
    const transTime = utcToZonedTime(date, timeZone);
    return String(format(transTime, "yyyy-MM-dd"));
  };

  useEffect(() => {
    setInfoData();
  }, []);

  return (
    <>
      <GameName>{name}</GameName>
      <InfoList>
        {infoList?.map((info, index) => (
          <InfoWrapper key={index}>
            <Category>{info.categoryName}</Category>
            <Content>{info.content}</Content>
          </InfoWrapper>
        ))}
      </InfoList>
    </>
  );
}

const GameName = styled.h1`
  font-size: 1.8rem;
  line-height: 2.7rem;
  letter-spacing: -0.02rem;
  margin: 0.6rem 1.6rem 1.4rem;
  color: white;
`;

const InfoList = styled.div`
  margin: 0 1.6rem;

  & > * {
    margin-bottom: 0.4rem;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const InfoWrapper = styled.div`
  display: flex;

  * {
    line-height: 2.1rem;
    font-size: 1.4rem;
  }
`;

const Category = styled.span`
  color: ${Colors.LightGray};
  margin-right: 1.2rem;
`;

const Content = styled.span`
  color: white;
  flex-wrap: wrap;
`;
