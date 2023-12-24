import { getImageUrl } from "./utils";

export const Avatar = ({ name, imageId, size }) => {
  const ratio = window.devicePixelRatio;
  return (
    <img
      className="avatar"
      src={getImageUrl(imageId, (size * ratio < 90) ? 's' :'b')}
      alt={name}
      width={size}
      height={size}
    />
  );
}

export const Bio = ({ name, born, died, description }) => {
  return (
    <div className="bio">
      <h2>{name}</h2>
      <p>
        {born} &mdash; {died}
      </p>
      <p>{description}</p>
    </div>
  );
}


export const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
}



const Profile = ({person}) => {
  
  return (
    <Card>
      <Avatar {...person} size={85} />
      <Bio {...person} />
    </Card>
    )
  }


export default Profile; 