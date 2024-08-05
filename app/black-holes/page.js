export default function BlackHolesPage() {
  return (
    <div className="container mt-5">
      <h1>Black Holes</h1>
      <p>Black holes are regions of spacetime where gravity is so strong that nothing, not even light, can escape. They are formed when massive stars collapse at the end of their life cycles. Black holes come in various sizes, from stellar-mass black holes to supermassive black holes found at the centers of galaxies.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://images.pexels.com/photos/23522825/pexels-photo-23522825/free-photo-of-black-cosmos-with-a-white-galaxy.png?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Stellar Black Holes" />
            <div className="card-body">
              <h5 className="card-title">Stellar Black Holes</h5>
              <p className="card-text">These black holes are formed from the remnants of massive stars and typically have a mass between 3 to 10 solar masses.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://media.istockphoto.com/id/1182647590/photo/super-massive-black-hole-and-accretion-disk.jpg?b=1&s=612x612&w=0&k=20&c=AK2Yqc2l_RxhF9-6iUOiU5DGFDU1H9Nhk90ftKNPvQY=" className="card-img-top" alt="Supermassive Black Holes" />
            <div className="card-body">
              <h5 className="card-title">Supermassive Black Holes</h5>
              <p className="card-text">Found at the centers of most galaxies, these black holes have masses ranging from millions to billions of times that of the Sun.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://media.istockphoto.com/id/1397751005/photo/mysterious-black-hole-energy-gravitation-grid-interlaced-in-distant-space-sci-fi-background.jpg?b=1&s=612x612&w=0&k=20&c=pg0ocpZnI3JET0Ys-ndYMf_2uaGQfUKrWwr3SJe5UwY=" className="card-img-top" alt="Black Hole Mergers" />
            <div className="card-body">
              <h5 className="card-title">Black Hole Mergers</h5>
              <p className="card-text">When black holes merge, they create gravitational waves that ripple through spacetime and can be detected by instruments on Earth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
