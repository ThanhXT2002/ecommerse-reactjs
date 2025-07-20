import Stepper from '@pages/Cart/components/Steps/Stepper';
import styles from '../../styles.module.scss';
import React, { useContext } from 'react';
import { StepperContext } from '@contexts/SteperProvider';

function Steps() {
    const { containerSteps,steps, line,textNoti } = styles;
    const { currentStep } = useContext(StepperContext);

    const dataSteps = [
        { number: 1, content: 'SHOPPING CART' },
        { number: 2, content: 'CHECKOUT' },
        { number: 3, content: 'ORDER CONFIRMATION' }
    ];
    return (
        <div className={containerSteps}>
            <div className={steps}>
                {dataSteps.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Stepper
                                number={item.number}
                                content={item.content}
                                 isDisabled={index >= currentStep}
                            />
                            {index !== dataSteps.length - 1 && (
                                <div className={line} />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
            <div className={textNoti}>
                  You are out of time! Checkout now avoid losing your order!  
            </div>
        </div>
    );
}

export default Steps;
