import Seo from "@component/components/Seo";
import AddButton from "@component/components/button/AddButton";
import SurveyCard from "@component/components/card/SurveyCard";
import { PageWrapper } from "@component/components/container/container";
import GoBackHeader from "@component/components/header/GoBackHeader";
import NavBar from "@component/components/navbar/NavBar";
import * as S from "./form.styles";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

const AddButtonArea = styled.div`
  padding-bottom: 40px;
`;

const Form = () => {
  const [surveyList, setSurveyList] = useState<string[]>([""]);

  return (
    <PageWrapper>
      <Seo title="대회 폼 등록" />
      <GoBackHeader title="대회 등록" />
      <S.ContentAreaWrapper>
        <S.ContestInform contestName="대한팔씨름연맹 제 26회 국가대표 선발전" contestGroup="(사)대한팔씨름연맹"></S.ContestInform>
        <S.Divider />

        {surveyList.map((survey, index) => (
          <SurveyCard key={index} index={index} setSurveyList={setSurveyList} />
        ))}
        <AddButtonArea onClick={() => setSurveyList((current) => [...current, ""])}>
          <AddButton text="질문 추가하기" />
        </AddButtonArea>
      </S.ContentAreaWrapper>
      <Link href="/register/register-success">
        <NavBar navText="등록" active={true} />
      </Link>
    </PageWrapper>
  );
};

export default Form;
