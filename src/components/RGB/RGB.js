import { useParams } from 'react-router-dom';
import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();
  return (
    <>
      <div className="background" style={{ background: `rgb(${r}, ${g}, ${b})` }}>
        {/* <img src={process.env.PUBLIC_URL + '/nike.png'} /> */}
        <p>{`rgb(${r}, ${g}, ${b})`}</p>
      </div>
    </>
  );
}
