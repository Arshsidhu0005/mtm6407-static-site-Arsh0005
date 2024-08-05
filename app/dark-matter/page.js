export default function DarkMatterPage() {
    return (
      <div className="container mt-5">
        <h1>Dark Matter</h1>
        <p>Dark matter is a form of matter that does not emit, absorb, or reflect light, making it invisible to current detection methods. However, it is believed to make up about 27% of the universe's total mass and energy content. Dark matter interacts with normal matter through gravity and possibly through other fundamental forces.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://media.istockphoto.com/id/1071945542/photo/planets-and-galaxy-cosmos-physical-cosmology-science-fiction-wallpaper.jpg?b=1&s=612x612&w=0&k=20&c=NeyZ4vi3PcOZgLK-PJbjtOEMnUJ_c5uvaJKt0N0E4ss=" className="card-img-top" alt="Dark Matter Halos" />
              <div className="card-body">
                <h5 className="card-title">Dark Matter Halos</h5>
                <p className="card-text">Dark matter halos surround galaxies and galaxy clusters, influencing their rotation curves and gravitational lensing effects.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://media.istockphoto.com/id/1271969678/photo/awesome-digital-art-paint-in-series-background-consists-of-fractal-color-texture-and-is.jpg?b=1&s=612x612&w=0&k=20&c=qqUHGG1rOW5Yw5ZTwrA2ptax2GlglTyR-rOCI4jxs2w=" className="card-img-top" alt="Direct Detection" />
              <div className="card-body">
                <h5 className="card-title">Direct Detection</h5>
                <p className="card-text">Scientists are developing experiments to directly detect dark matter particles through their interactions with normal matter.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img src="https://media.istockphoto.com/id/1056448542/photo/purple-fractal-circle-sphere-fantasy-fractal-texture-digital-art-3d-rendering-computer.jpg?b=1&s=612x612&w=0&k=20&c=OPXQPDBgs0VapXf4fe5k-2SvMR1O4DT2nIdF8pyKPzA=" className="card-img-top" alt="Mapping Dark Matter" />
              <div className="card-body">
                <h5 className="card-title">Mapping Dark Matter</h5>
                <p className="card-text">Astronomers use gravitational lensing and other techniques to map the distribution of dark matter in the universe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  