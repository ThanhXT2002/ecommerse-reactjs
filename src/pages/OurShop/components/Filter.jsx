import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from '../styles.module.scss';
import cls from 'classnames';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import SelectBox from '@pages/OurShop/components/SelectBox';

function Fillter() {
    const { containerFilter, boxIcon, boxLeft, selectBox, sort, show } = styles;

    const {showOptions, sortOptions,setSortId,setShowId,
        setIsShowGrid } = useContext(OurShopContext);

   const getValueSelect = (value, type) => {
       if(type === 'sort') {
           setSortId(value);
       }else{
        setShowId(value);
       }
    };

    const handleGetShowGrid = (type) => {
        setIsShowGrid(type === 'grid');
    }

    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                {/* <select className={cls(selectBox, sort)} name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select> */}

                <SelectBox options={sortOptions} getValue = {getValueSelect} type='sort'/>
                <div className={boxIcon}>
                    <TfiLayoutGrid4 style={{ fontSize: '25px', cursor:'pointer' }} onClick={() => handleGetShowGrid('grid')} />
                    <div
                        style={{
                            height: '20px',
                            width: '1px',
                            backgroundColor: '#e1e1e1'
                        }}

                        
                    ></div>
                    <CiCircleList style={{ fontSize: '27px', color: '#222', cursor:'pointer' }} 
                    onClick={() => handleGetShowGrid('list')}/>
                </div>
            </div>
            <div className={boxLeft}>
                <div style={{ fontSize: '14px', color: '#555' }}>Show</div>
                {/* <select className={cls(selectBox, show)} name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select> */}

                 <SelectBox options={showOptions} getValue = {getValueSelect} type='show'/>
            </div>
        </div>
    );
}

export default Fillter;
