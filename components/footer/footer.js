import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withTranslation } from '../../i18n'
import { BrowserView } from "react-device-detect";
import styles from './footer.module.scss'
import Image from 'next/image'

function Footer({t}) {

  const [isCopied, setIsCopied] = useState(false)

  return (
    <BrowserView>
      <footer className={styles.footer}>
        <img src='/static/icons/icon_phone.svg' alt="phone_icon" width={15} height={15} style={{alignSelf:"center"}}/>
        <p>+34 623 17 29 68 || +34 617 24 00 23 </p>
        <img src="/static/icons/icon_mail.svg" alt="icon_mail" width={15} height={15} style={{alignSelf:"center"}}/>
        <CopyToClipboard text="hello@tximeneafilms.com" onCopy={() => { setIsCopied(true) }}>
            {isCopied ? 
            <p onMouseLeave={() => setIsCopied(false)}>{t("footer.contact")}<span>{t("footer.email")}</span>{t("footer.project")}</p>:
            <p>{t("footer.contact")}<span>HELLO@TXIMENEAFILMS.COM</span>{t("footer.project")}</p>
            }
        </CopyToClipboard>
      </footer>
    </BrowserView>
  );
}

export default withTranslation('common')(Footer);
