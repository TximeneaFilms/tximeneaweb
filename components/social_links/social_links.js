import {useState}from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import { withTranslation } from '../../i18n'
import styles from './social_links.module.scss';

function Social_Links({i18n}) {

  const [activeLang, changeActive] = useState("ES")

  return (
    <>
    <BrowserView>
      <div className={`${styles.links} ${styles.links_desktop}`}>
        <a href={"https://www.linkedin.com/company/tximenea-films"} rel="noopener noreferrer" target="_blank" className="linkedin">LinkedIn</a>
        <a href={"https://www.instagram.com/tximenea.films/"} rel="noopener noreferrer" target="_blank" className="insta">Instagram</a>
        <p className={activeLang === "ES" ? styles.active : ""} onClick={() => {i18n.changeLanguage("es");changeActive("ES")}}>ES</p>
        <p className={activeLang === "EN" ? styles.active : ""}  onClick={() => {i18n.changeLanguage("en");changeActive("EN")}}>EN</p>
      </div>
   </BrowserView>
   <MobileView>
      <div className={`${styles.links} ${styles.links_mobile}`}>
        <a href={"https://www.linkedin.com/company/tximenea-films"} rel="noopener noreferrer" target="_blank" className="linkedin">LinkedIn</a>
        <a href={"https://www.instagram.com/tximenea.films/"} rel="noopener noreferrer" target="_blank" className="insta">Instagram</a>
      </div>
      <div className={`${styles.links} ${styles.links_mobile}`}>
        <p className={activeLang === "ES" ? styles.active : ""} onClick={() => {i18n.changeLanguage("es");changeActive("ES")}}>ES</p>
        <p className={activeLang === "EN" ? styles.active : ""}  onClick={() => {i18n.changeLanguage("en");changeActive("EN")}}>EN</p>
      </div>
   </MobileView>
   </>
  );
}

export default withTranslation('common')(Social_Links);
