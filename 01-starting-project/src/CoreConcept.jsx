

function CoreConcept(props) {
  
    return (

        <div className="main">
            <img src={props.image} className="core-concepts" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    //     <div>
    //     {data.map((item, index) => (
    //         <div className="main" key={index}>
    //             <img src={item.image} className="core-concepts" alt={item.title} />
    //             <h3>{item.title}</h3>
    //             <p>{item.description}</p>
    //         </div>
    //     ))}
    // </div>

    );
}
export default CoreConcept;