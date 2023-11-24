import { Result } from "../interfaces/interfaces";

interface cardProp {
  re: Result;
}

export const Card = ({ re }: cardProp) => {
  return (
    <>
      <div className="card w-25 bg-black shadow-xl my-5 m-3">
        <figure className="mt-5">
          <img src={re.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{re.name}</h2>
          <p className="text-white">{re.status}</p>
        </div>
      </div>
    </>
  );
};
