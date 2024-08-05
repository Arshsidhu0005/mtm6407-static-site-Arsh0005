export default function CosmicPhenomenaPage() {
  return (
    <div className="container mt-5">
      <h1>Cosmic Phenomena</h1>
      <p>The universe is filled with extraordinary phenomena that challenge our understanding of physics and astronomy. From pulsars to quasars, these cosmic wonders provide a glimpse into the dynamic and complex nature of the cosmos.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://media.istockphoto.com/id/1470236502/photo/quasar-surrounded-by-an-orbiting-accretion-disk-of-gas-supermassive-star-with-x-rays-and.jpg?b=1&s=612x612&w=0&k=20&c=SPz4zt1fUT4S05ENUGEZ25tPqJBpBRnTfl20NfpEJic=" className="card-img-top" alt="Pulsars" />
            <div className="card-body">
              <h5 className="card-title">Pulsars</h5>
              <p className="card-text">Pulsars are highly magnetized, rotating neutron stars that emit beams of electromagnetic radiation from their poles.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://media.istockphoto.com/id/532378051/photo/night-sky-with-stars-and-clouds.jpg?b=1&s=612x612&w=0&k=20&c=qequf4kIr8C44JMi0rASovZiKpKz5oOtXZovK761J60=" className="card-img-top" alt="Quasars" />
            <div className="card-body">
              <h5 className="card-title">Quasars</h5>
              <p className="card-text">Quasars are incredibly luminous active galactic nuclei, powered by supermassive black holes at their centers.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://images.pexels.com/photos/6444367/pexels-photo-6444367.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Supernovae" />
            <div className="card-body">
              <h5 className="card-title">Supernovae</h5>
              <p className="card-text">Supernovae are powerful explosions that occur at the end of a star's life cycle, dispersing heavy elements into space.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
