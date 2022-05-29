import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from './AcountItem.module.scss';

const cx = classNames.bind(style);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://thuthuatnhanh.com/wp-content/uploads/2021/02/Anh-avatar-bua-cute-dep-390x390.jpg"
                alt="Ngoc"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Dang Nhu Ngoc</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>dangnhungoc</span>
            </div>
        </div>
    );
}

export default AcountItem;
