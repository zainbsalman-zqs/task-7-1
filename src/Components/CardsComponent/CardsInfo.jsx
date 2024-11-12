function CardsInfo({ number, titleInfo, descriptionInfo }) {
    return (
      <>
        <div className="step-number">{number}</div>
        <h3>{titleInfo}</h3>
        <p>{descriptionInfo}</p>
      </>
    );
  }
  
  export default CardsInfo