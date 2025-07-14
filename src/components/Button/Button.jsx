import styles from './styles.module.scss';
import classNames from 'classnames';

function Button({ content, isPrimary = true,customClassname = false, ...props }) {
    const { btn, primaryBtn, secondaryBtn, buttonContainer } = styles;
    return (
        <div className={buttonContainer}>
            <button
                className={classNames(btn, {
                    [primaryBtn]: isPrimary,
                    [secondaryBtn]: !isPrimary,
                    [customClassname]: customClassname
                })}
                {...props}
            >
                {content}
            </button>
        </div>
    );
}

export default Button;
