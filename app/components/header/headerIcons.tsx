import { AppstoreOutlined, HeartOutlined, MailOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import styles from '@/app/ui/header/header.module.css';

export default function HeaderIcons() {
    return (
        <div className={styles.iconsHeader}>
            <SearchOutlined className={styles.headerIcon} />
            <UserOutlined className={`hideMobile ${styles.headerIcon}`} />
            <div className={`inline relative hideMobile ${styles.headerIcon} `}>
                <HeartOutlined className={styles.headerIcon} />
                <span className={`${styles.padge} absolute`}>11</span>
            </div>
            <div className={`inline relative ${styles.headerIcon} `}>
                <ShoppingCartOutlined className={styles.headerIcon} />
                <span className={`${styles.padge} absolute`}>8</span>
            </div>
        </div>
    );
}