import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import style from './Header.module.scss';

const cx = classNames.bind(style);

function RenderIcon({
    children,
    delay = [0, 200],
    placement = 'bottom',
    content,
}) {
    return (
        <Tippy delay={delay} placement={placement} content={content}>
            <button className={cx('action-btn')}>{children}</button>
        </Tippy>
    );
}

RenderIcon.propTypes = {
    children: PropTypes.node.isRequired,
    delay: PropTypes.array,
    placement: PropTypes.string,
    content: PropTypes.string,
};

export default RenderIcon;
