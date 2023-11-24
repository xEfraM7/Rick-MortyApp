import { Result } from "../interfaces/interfaces";

interface cardProp {
  re: Result;
}

export const Card = ({ re }: cardProp) => {
  const colorStatus = (status: string) => {
    switch (status) {
      case "Dead":
        return "text-red-800 text-lg font-bold";
      case "Alive":
        return "text-green-600 text-lg font-bold";
      default:
        return "text-blue-800 text-lg font-bold";
    }
  };

  return (
    <>
      <div className="card w-25 bg-blue-100 shadow-xl my-5 m-3">
        <figure className="mt-5 mx-10">
          <img src={re.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black text-2xl">{re.name}</h2>
          <p className="text-xl">
            Status: <span className={colorStatus(re.status)}>{re.status}</span>
          </p>
          <p className="text-black">Gender y 39 tipos de gays: {re.gender}</p>
          <p className="text-black">Species: {re.species}</p>
          <p className="text-black">Origin: {re.origin.name}</p>
          <p className="text-black">Location: {re.location.name}</p>
        </div>
      </div>
    </>
  );
};
