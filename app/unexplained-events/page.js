export default function UnexplainedEventsPage() {
  return (
    <div className="container mt-5">
      <h1>Unexplained Events</h1>
      <p>The universe is full of unexplained events that baffle scientists and astronomers. From mysterious signals to anomalous objects, these phenomena challenge our understanding of the cosmos and spark curiosity and investigation.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://images.pexels.com/photos/6325003/pexels-photo-6325003.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Fast Radio Bursts" />
            <div className="card-body">
              <h5 className="card-title">Fast Radio Bursts</h5>
              <p className="card-text">Fast radio bursts (FRBs) are intense, brief flashes of radio waves from distant galaxies, with unknown origins.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://media.istockphoto.com/id/924198010/photo/a-3d-illustration-of-the-interstellar-object-known-as-oumuamua-originally-classified-as-an.jpg?b=1&s=612x612&w=0&k=20&c=zxIn65Dsud2opAKhl8wA3nxHE-_fE10rtKWI7kCkaNc=" className="card-img-top" alt="Oumuamua" />
            <div className="card-body">
              <h5 className="card-title">Oumuamua</h5>
              <p className="card-text">Oumuamua is an interstellar object that passed through our solar system in 2017, exhibiting unusual characteristics.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Tabby's Star" />
            <div className="card-body">
              <h5 className="card-title">Tabby's Star</h5>
              <p className="card-text">Tabby's Star, also known as Boyajian's Star, has exhibited unusual and unexplained dimming patterns, leading to various hypotheses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
