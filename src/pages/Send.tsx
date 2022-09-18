import Form from "../components/Send/Form";

const Send = () => {
  return (
      <div className="bg-backgroundMain w-screen h-screen py-10">
        <div className="bg-backgroundSecondary w-10/12 h-5/6 mx-auto rounded shadow-lg py-6 sm:w-7/12 lg:w-3/12 md:5/12 xl:3/12">
         <Form/>
        </div>
      </div>
  );
};

export default Send;
