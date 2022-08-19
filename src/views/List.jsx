const React = require('react');
const Layout = require('./Layout');
// const findId = require('../controllers/listController');

function List({ animals, admin }) {
  return (
    <Layout admin={admin}>
      <link rel="stylesheet" href="/styles/edouard.css" />
      <script defer src="js/listeFront.js" />
      {admin ? (
        <>
          <div className="addAnimal">
            <button type="button" className="btn-add-animal" id="addAnimal">Добавить карточку животного</button>
          </div>
          <div className="card-deck admin">
            {animals.map((animal) => (
              <div className="card animate__animated animate__pulse" id={animal.id}>

                <div className="img-div">
                  {animal.Pictures.length > 0 ? (<img className="card-img-top" src={animal.Pictures[0]?.picture_link} alt="Card cap" id={animal.id} />) : ('')}
                </div>

                <div className="card-body" id={animal.id}>
                  <h5 className="card-title" id={animal.id}>{animal.name}</h5>
                  <h3 className="card-title" id={animal.id}>{animal.breed}</h3>
                  <div className="card-text-div">
                    <p className="card-text" id={animal.id}>{animal.description}</p>
                  </div>
                </div>
                <div className="button-container">
                  <button type="button" name="edit" className="btn btn-success" id={animal.id}>Edit</button>
                  <button type="button" name="edit" className="btn btn-danger" id={animal.id}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="card-deck">
          {animals.map((animal) => (
            <div className="card animate__animated animate__pulse">
              <div className="img-div">
                {animal.Pictures.length > 0 ? (<img className="card-img-top" src={animal.Pictures[0]?.picture_link} alt="Card cap" id={animal.id} />) : ('')}
              </div>
              <h3 className="card-title" id={animal.id}>{animal.name}</h3>
              {/* <h5 className="card-title" id={animal.id}>{animal.breed}</h5> */}
              {/* <p className="card-text" id={animal.id}>{animal.breed}</p> */}
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

module.exports = List;
