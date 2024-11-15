import "../Servic/Servic.css"
function CardsInfo({ number, titleInfo, descriptionInfo }) {
    return (
      <>
        <div className="step-number">{number}
        <h3>{titleInfo}</h3>
      
        <p>{descriptionInfo}</p>
        </div>
      </>
    );
  }
  
  export default CardsInfo