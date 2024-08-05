export default function HomePage() {
  return (
    <div className="container mt-5">
      <div className="jumbotron p-5 mb-4 bg-dark text-light rounded-3">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="display-4">Welcome to Space Mysteries</h1>
            <p className="lead">Explore the most intriguing and mysterious phenomena of the universe.</p>
          </div>
          <div className="col-md-4">
            <img src="https://images.pexels.com/photos/207529/pexels-photo-207529.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Space Mysteries" className="img-fluid" style={{ maxHeight: '300px' }} />
          </div>
        </div>
      </div>

      <h2 className="mb-4 text-light">Featured Articles</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 bg-dark text-light">
            <img src="https://media.istockphoto.com/id/1088863384/photo/abstract-space-wallpaper-black-hole-with-nebula-over-colorful-stars-and-cloud-fields-in-outer.jpg?b=1&s=612x612&w=0&k=20&c=3ZS-ajRCdBUVlPfOiU2rPEzSb2RQHNkVEOyWpSksGKM=" className="card-img-top" alt="Black Holes" />
            <div className="card-body">
              <h5 className="card-title text-primary">Black Holes</h5>
              <p className="card-text">Delve into the enigmatic world of black holes, where gravity rules supreme.</p>
              <a href="/black-holes" className="btn btn-primary">Read more</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 bg-dark text-light">
            <img src="https://media.istockphoto.com/id/1289799840/photo/earth-and-black-hole.jpg?b=1&s=612x612&w=0&k=20&c=DD8AGFO2kdw14zoO5B6h31asPOyJyYrTnsS-ZKqMYOA=" className="card-img-top" alt="Dark Matter" />
            <div className="card-body">
              <h5 className="card-title text-primary">Dark Matter</h5>
              <p className="card-text">Uncover the secrets of dark matter, the invisible mass that makes up most of the universe.</p>
              <a href="/dark-matter" className="btn btn-primary">Read more</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 bg-dark text-light">
            <img src="https://images.pexels.com/photos/5947292/pexels-photo-5947292.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Cosmic Phenomena" />
            <div className="card-body">
              <h5 className="card-title text-primary">Cosmic Phenomena</h5>
              <p className="card-text">Explore the awe-inspiring cosmic phenomena that challenge our understanding of the universe.</p>
              <a href="/cosmic-phenomena" className="btn btn-primary">Read more</a>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-4 text-light">Latest Discoveries</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 bg-dark text-light">
            <img src="https://media.istockphoto.com/id/1249550880/photo/gravitation-waves-around-black-hole-in-space-3d-illustration.jpg?b=1&s=612x612&w=0&k=20&c=XwsJkPFW-qURTJUFIIzeIHudO_fpGxbcHXs3VhJRaGE=" className="card-img-top" alt="Latest Discovery 1" />
            <div className="card-body">
              <h5 className="card-title text-primary">Gravitational Waves</h5>
              <p className="card-text">Gravitational waves are ripples in spacetime caused by massive objects moving with acceleration, such as merging black holes or neutron stars.</p>
              <a href="https://en.wikipedia.org/wiki/Gravitational_wave" className="btn btn-secondary">Read more</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 bg-dark text-light">
            <img src="https://media.istockphoto.com/id/842969102/photo/unreal-trappist-1-exoplanets-system.jpg?b=1&s=612x612&w=0&k=20&c=YTPx_j5rjDzQ3gSW5CeXxi9JjyLkywOlYKiHCdOxgq4=" className="card-img-top" alt="Latest Discovery 2" />
            <div className="card-body">
              <h5 className="card-title text-primary">Exoplanets</h5>
              <p className="card-text">Exoplanets are planets that orbit stars outside solar system. Thousands of exoplanets have been discovered, expanding our understanding of universe.</p>
              <a href="https://en.wikipedia.org/wiki/Exoplanet" className="btn btn-secondary">Read more</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 bg-dark text-light">
            <img src="https://images.pexels.com/photos/6325003/pexels-photo-6325003.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Latest Discovery 3" />
            <div className="card-body">
              <h5 className="card-title text-primary">Fast Radio Bursts (FRBs)</h5>
              <p className="card-text">Fast Radio Bursts are high-energy astrophysical phenomena characterized by brief, intense bursts of radio waves from unknown sources in space.</p>
              <a href="https://en.wikipedia.org/wiki/Fast_radio_burst" className="btn btn-secondary">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
