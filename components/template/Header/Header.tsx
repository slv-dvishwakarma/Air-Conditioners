"use client"
import React, { useEffect, useState } from 'react';
import jsonData from "./Headerstyleonejson/jsonData.json";
import hi from "./Headerstyleonejson/hi.json";
import english from "./Headerstyletwojson/english.json";
import hindi from "./Headerstyletwojson/hindi.json";
import { HeaderTemplate } from './HeaderTemplate';
import { HeaderTemplatetwo } from './HeaderTemplatetwo';

export const Header = () => {
  const [jsonDataFile, setJsonDataFile] = useState(jsonData);
  const [jsonFile, setJsonFile] = useState(english);

  useEffect(() => {
    const newLanguage = localStorage.getItem('language');
    if (newLanguage === 'hi') {
      setJsonDataFile(hi);
      setJsonFile(hindi);
    } else {
      setJsonDataFile(jsonData);
      setJsonFile(english);
    }
  }, []);

  return (
    <>
      {jsonDataFile.style && (
        <HeaderTemplate logo={jsonDataFile.template_1.logo} alt={jsonDataFile.template_1.alt} cart={jsonDataFile.template_1.cart} searchbar={jsonDataFile.template_1.searchbar} option={jsonDataFile.template_1.searchbar.option} language={jsonDataFile.template_1.searchbar.language} options={jsonDataFile.template_1.options} />
      )}
      {jsonFile.style && (
        <HeaderTemplatetwo header_data={jsonFile.template_2} search={jsonFile.template_2.search} button={jsonFile.template_2.button} login_form={jsonFile.login_form} signup_form={jsonFile.signup_form}/>
      )}
    </>
  );
};
