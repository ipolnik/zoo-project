const React = require('react');
const Layout = require('./Layout');
// const findId = require('../controllers/listController');

function List({ animals, admin }) {
  return (
    <Layout admin={admin}>
      <script defer src="js/listeFront.js" />
      {admin ? (
        <>
          <div className="addAnimal">
            <button type="button" className="btn-add-animal" id="addAnimal">Добавить собакена</button>
          </div>
          <div className="card-deck admin">
            {animals.map((animal) => (
              <div className="card animate__animated animate__pulse" id={animal.id}>
                {/* {link.map((links) => (<img className="card-img-top" src={} alt="Card cap" />))} */}

                <img className="card-img-top" src={animal.Pictures[0]?.picture_link} alt="Card cap" />

                <div className="card-body">
                  <h5 className="card-title">{animal.name}</h5>
                  <h3 className="card-title">{animal.breed}</h3>
                  <p className="card-text">{animal.description}</p>
                </div>
                <button type="button" name="edit" className="btn btn-success" id={animal.id}>Edit</button>
                <button type="button" name="edit" className="btn btn-danger" id={animal.id}>Delete</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="card-deck">
          {animals.map((animal) => (
            <div className="card animate__animated animate__pulse">
              <img className="card-img-top" src={animal.Pictures[0]?.picture_link} alt="Card cap" />
              <h3 className="card-title">{animal.name}</h3>
              <h5 className="card-title">{animal.breed}</h5>
              <p className="card-text">{animal.breed}</p>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

module.exports = List;
