const React = require('react');
const Layout = require('./Layout');

module.exports = function AnimalCard({
  animal, pictures, firstPic, admin,
}) {
  return (
    <Layout admin={admin}>
      <link rel="stylesheet" href="/styles/animalCard.css" />
      <div className="delete-confirm-background">
        <div className="delete-confirm alert alert-secondary">
          <p className="delete-confirm-text">Are you sure you want to delete this?</p>
          <div className="buttons-delete-confirm">
            <button type="button" className="btn btn-success">NO</button>
            <button type="button" className="btn btn-danger" data-animal_id={animal.id}>YES</button>
          </div>
        </div>
      </div>
      {/* <h3>{animal.name}</h3> */}
      <div className="main-content">
        {firstPic ? (
          <div id="carouselDiv">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                {pictures?.map((picture, i) => (
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i + 1} aria-label={`Slide ${i + 2}`} />
                ))}
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={`${firstPic?.picture_link}`} className="d-block w-100" alt="ups, no image :(" />
                </div>
                {pictures?.map((picture) => (
                  <div className="carousel-item">
                    <img src={`${picture?.picture_link}`} className="d-block w-100" alt="ups, no image :(" />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        ) : ('')}

        <div className="card-body">
          <h5 className="card-title">{animal.breed}</h5>
          <div className="card-text-container">
            <p className="card-text">{animal.description}</p>
          </div>
          <p className="card-text">
            <small className="text-muted">
              Last updated:
              {' '}
              {animal.updatedAt.toLocaleDateString()}
              {' '}
              {animal.updatedAt.toLocaleTimeString()}
            </small>
          </p>
        </div>
        {admin ? (
          <div className="btn-group animal-cards-buttons">
            <a href={`/animalcard/${animal.id}/edit`} className="btn btn-warning edit-btn">edit</a>
            <button type="button" className="btn btn-danger del-btn">delete</button>
          </div>
        ) : ('')}
      </div>
      <script defer src="/js/animalCardScript.js" />
    </Layout>
  );
};

