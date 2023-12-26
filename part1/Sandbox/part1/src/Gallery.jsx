import Profile from './Profile.jsx'


const Gallery = ({ scientists }) => {

  return (
      <section>
        <h1>Amazing scientists</h1>
        {scientists.map(scientist => <Profile key={scientist.name} person={scientist} />)}

      </section>
    );
  }

  export default Gallery;