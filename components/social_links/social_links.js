import {useState} from 'react';
import { useTranslation } from 'react-i18next'
import styles from './social_links.module.scss';

function SocialLinks() {

  const { i18n } = useTranslation()
  const [activeLang, changeActive] = useState("ES")

  return (
    <div className={`${styles.links}`}>
      <a href={"https://www.linkedin.com/company/tximenea-films"} rel="noopener noreferrer" target="_blank" className="linkedin">LinkedIn</a>
      <a href={"https://www.instagram.com/tximenea.films/"} rel="noopener noreferrer" target="_blank" className="insta">Instagram</a>
      <a href={"https://twitter.com/TximeneaF"} rel="noopener noreferrer" target="_blank" className="twitter">Twitter</a>
      <a href={"https://business.facebook.com/tximenea.films/"} rel="noopener noreferrer" target="_blank" className="facebook">facebook</a>
      <p className={activeLang === "ES" ? styles.active : ""} onClick={() => {i18n.changeLanguage("es");changeActive("ES")}}>ES</p>
      <p className={activeLang === "EN" ? styles.active : ""}  onClick={() => {i18n.changeLanguage("en");changeActive("EN")}}>EN</p>
    </div>
  );
}

export default SocialLinks;
