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
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1652774400&x-signature=4ZeCVQ%2F27eqZ1altCZH3IEH6o5o%3D"
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
