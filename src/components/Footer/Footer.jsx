import styles from './styles.module.scss';

function MyFooter() {
  const { container } = styles;
  
  return (
    <div className={container}>
        <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png" 
        width={160}
        height={55}

        alt="" />
      </div>
  );
}

export default MyFooter;