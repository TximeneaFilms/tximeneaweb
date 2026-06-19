import {useState} from 'react';
import { withTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './navigation.module.scss'
import SocialLinks from '../social_links/social_links.js'

function Navigation({ t }) {

  const router = useRouter()

  let menuItems = ['projects', 'services', 'contact', 'about'];

  let activePage = router.pathname.substring(1) === "" ? "projects" : router.pathname.substring(1);

  const [isOpen, toggleOpen] = useState(false)

  return (
    <>
      <nav className={styles.desktop_navigation}>
        {
          menuItems.map((item, index) =>
            <Link
              href={item === "projects" ? "/" : "/" + item}
              key={index}
              >
                <a className={activePage === item ? styles.active : ""}>
                  {t("navigation." + item)}
                </a>
            </Link >)
        }
      </nav>
      <div className={styles.mobile_menu_toggle} onClick={() => toggleOpen(!isOpen)}>
        <span className={isOpen ? styles.open : ""}></span>
        <span className={isOpen ? styles.open : ""}></span>
        <span className={isOpen ? styles.open : ""}></span>
      </div>
      <div className={`${styles.mobile_menu} ${isOpen ? styles.mobile_menu_open : ''}`}>
        {
          menuItems.map((item, index) =>
            <Link
              href={item === "projects" ? "/" : "/" + item}
              key={index}
              >
                <a className={activePage === item ? styles.active : ""} onClick={() => toggleOpen(false)}>
                  {t("navigation." + item)}
                </a>
            </Link >)
        }
        <SocialLinks/>
      </div>
    </>
  );
}

export default withTranslation('common')(Navigation);
