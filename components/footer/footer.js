import { useState } from 'react';
import { withTranslation } from 'react-i18next'
import styles from './footer.module.scss'

function Footer({t}) {

  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@tximeneafilms.com')
    setIsCopied(true)
  }

  return (
    <footer className={styles.footer}>
      <img src='/static/icons/icon_phone.svg' alt="phone_icon" width={15} height={15} style={{alignSelf:"center"}}/>
      <p>+34 623 17 29 68 || +34 617 24 00 23 </p>
      <img src="/static/icons/icon_mail.svg" alt="icon_mail" width={15} height={15} style={{alignSelf:"center"}}/>
      {isCopied ?
        <p onMouseLeave={() => setIsCopied(false)}>{t("footer.contact")}<span>{t("footer.email")}</span>{t("footer.project")}</p>:
        <p onClick={handleCopy}>{t("footer.contact")}<span>HELLO@TXIMENEAFILMS.COM</span>{t("footer.project")}</p>
      }
    </footer>
  );
}

export default withTranslation('common')(Footer);
