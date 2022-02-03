import { Rings } from "react-loader-spinner";
import './Loader.css'


export default function Loader () {
  return (
    <div className="loader_wrap">
      <Rings color="#00BFFF" height={80} width={80} />
    </div>
  );
};

