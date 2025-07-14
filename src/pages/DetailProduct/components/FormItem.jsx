import { GoStarFill } from 'react-icons/go';
import styles from '../styles.module.scss';

function FormItem({ label, isRequired, typeChildren }) {
    const { formItem, boxItemStar } = styles;

    const renderStar = (length) => {
        return Array.from({ length }, (_, index) => (
            <GoStarFill
                key={index}
                style={{
                    color: '#e1e1e1'
                }}
            />
        ));
    };

//     const stars = [];
// for (let i = 1; i <= 5; i++) {
//   stars.push(<div key={i}>{renderStar(i)}</div>);
// }

    const renderChildren = () => {
        switch (typeChildren) {
            case 'rating':
                return (
                    <div className={boxItemStar}>
                        {/* {stars} */}
                        <div>{renderStar(1)}</div>
                        <div>{renderStar(2)}</div>
                        <div>{renderStar(3)}</div>
                        <div>{renderStar(4)}</div>
                        <div>{renderStar(5)}</div>
                    </div>
                );
            case 'input':
                return <input type='text' />;
            case 'textarea':
                return <textarea rows={10} />;
        }
    };

    return (
        <div className={formItem}>
            <label>
                {label} {isRequired && <span>*</span>}
            </label>
            {renderChildren()}
        </div>
    );
}

export default FormItem;
