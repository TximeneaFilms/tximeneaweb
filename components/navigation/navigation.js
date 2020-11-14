import {useState} from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import { slide as Menu } from 'react-burger-menu'
import { withTranslation } from '../../i18n'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './navigation.module.scss'
import SocialLinks from '../social_links/social_links.js'

function Navigation({ t, i18n}) {

  const router = useRouter()

  let menuItems = ['projects', 'services', 'contact', 'about'];

  let activePage = router.pathname.substring(1) === "" ? "projects" : router.pathname.substring(1);

  const [activeLang, changeActiveLang] = useState("ES")
  const [isOpen, toggleOpen] = useState(false)

  return (
    <>
    <BrowserView>
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
    </BrowserView>
    <MobileView>
      <Menu width={'100%'} width={'100%'} itemListClassName={"custom_menu"} crossButtonClassName={"custom_cross"} isOpen={ isOpen } onOpen={ (state) => toggleOpen(!isOpen) } >
        {
          menuItems.map((item, index) =>
            <Link
              href={item === "projects" ? "/" : "/" + item}
              key={index}
              >
                <a className={activePage === item ? styles.active : ""} onClick={ () => toggleOpen(false) }>
                  {t("navigation." + item)}
                </a>
            </Link >)
        }
        <SocialLinks/>
      </Menu>
    </MobileView>
    </>
  );
}

export default withTranslation('common')(Navigation);
