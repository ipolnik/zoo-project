const React = require('react');
const Layout = require('./Layout');
// const findId = require('../controllers/listController');

function List({ animals, newUser }) {
  return (
    <Layout>
      <script defer src="js/listeFront.js" />
      {newUser ? (
        <>
          <div className="addAnimal">
            <button type="button" className="btn-add-animal">Добавить</button>
          </div>
          <div className="card-deck admin">
            {animals.map((animal) => (
              <div className="card" id={animal.id}>
                {/* {link.map((links) => (<img className="card-img-top" src={} alt="Card cap" />))} */}

                <img className="card-img-top" src={animal.Pictures[0]?.picture_link} alt="Card cap" />

                <div className="card-body">
                  <h5 className="card-title">{animal.name}</h5>
                  <p className="card-text">{animal.description}</p>
                </div>
                <button type="button" name="edit" className="btn btn-success">Edit</button>
                <button type="button" name="edit" className="btn btn-danger" id={animal.id}>Delete</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="card-deck">
          {animals.map((animal) => (
            <div className="card">
              <img className="card-img-top" src={animal.Pictures[0]?.picture_link} alt="Card cap" />
              <h5 className="card-title">{animal.name}</h5>
              <p className="card-text">{animal.breed}</p>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

module.exports = List;
