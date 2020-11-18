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
        <a href={"https://twitter.com/TximeneaF"} rel="noopener noreferrer" target="_blank" className="twitter">Twitter</a>
        <a href={"https://business.facebook.com/tximenea.films/"} rel="noopener noreferrer" target="_blank" className="facebook">facebook</a>
        <p className={activeLang === "ES" ? styles.active : ""} onClick={() => {i18n.changeLanguage("es");changeActive("ES")}}>ES</p>
        <p className={activeLang === "EN" ? styles.active : ""}  onClick={() => {i18n.changeLanguage("en");changeActive("EN")}}>EN</p>
      </div>
   </BrowserView>
   <MobileView>
      <div className={`${styles.links} ${styles.links_mobile}`}>
        <div className={styles.links_mobile_socialWrap}>
        <a href={"https://www.linkedin.com/company/tximenea-films"} rel="noopener noreferrer" target="_blank" className="linkedin">LinkedIn</a>
        <a href={"https://www.instagram.com/tximenea.films/"} rel="noopener noreferrer" target="_blank" className="insta">Instagram</a>
        </div>
        <div className={styles.links_mobile_socialWrap}>
        <a href={"https://twitter.com/TximeneaF"} rel="noopener noreferrer" target="_blank" className="twitter">Twitter</a>
        <a href={"https://business.facebook.com/tximenea.films/"} rel="noopener noreferrer" target="_blank" className="facebook">facebook</a>
        </div>
      </div>
      <div className={`${styles.links} ${styles.links_mobile_socialWrap}`}>
        <p className={activeLang === "ES" ? styles.active : ""} onClick={() => {i18n.changeLanguage("es");changeActive("ES")}}>ES</p>
        <p className={activeLang === "EN" ? styles.active : ""}  onClick={() => {i18n.changeLanguage("en");changeActive("EN")}}>EN</p>
      </div>
   </MobileView>
   </>
  );
}

export default withTranslation('common')(Social_Links);
