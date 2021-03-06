import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import style from './Image.module.scss';

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallBack: customFallBack = images.noImage,
            ...props
        },
        ref,
    ) => {
        const [fallBack, setFallBack] = useState('');

        const handleError = () => {
            setFallBack(customFallBack);
        };

        return (
            <img
                className={classNames(style.wrapper, className)}
                src={fallBack || src}
                alt={alt}
                ref={ref}
                {...props}
                onError={handleError}
            />
        );
    },
);

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;
