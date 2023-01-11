import { useParams } from 'react-router-dom';
import nikeLogo from '../../nike.png';
import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();
  return (
    <>
      <div className="background" style={{ background: `rgb(${r}, ${g}, ${b})` }}>
        <img src={nikeLogo} />
        <p>{`rgb(${r}, ${g}, ${b})`}</p>
      </div>
    </>
  );
}
