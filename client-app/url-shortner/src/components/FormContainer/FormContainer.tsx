import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";
import icon from "../../assets/icon.png";

interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = ({
  updateReloadState,
}) => {
  const [fullUrl, setFullUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shorturl`, {
        fullUrl: fullUrl,
      });
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col items-center text-center relative h-auto">
      <div className="absolute top-4 left-4">
        <img src={icon} alt="App Icon" className="w-10 h-10" />
      </div>

      {/* Gradient Background Effects */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute xl:w-[520px] xl:h-[520px] md:w-[300px] md:h-[400px] w-[300px] h-[200px] bg-grad-theme-135 blur-[80px] md:blur-[150px] rounded-full top-[20%] left-0"></div>
        <div className="absolute xl:w-[520px] xl:h-[520px] md:w-[300px] md:h-[400px] w-[300px] h-[200px] bg-grad-theme-135 blur-[80px] md:blur-[150px] rounded-full bottom-[10%] right-0"></div>
      </div>

      {/* Form Container */}
      <div className="rounded-2xl bg-cover bg-center pt-10 md:p-16 relative max-w-3xl w-full">
        <h2 className="text-white font-bold pt-10 xl:text-[48px] lg:text-4xl text-3xl leading-[1.25]">
          Link <span className="gradi-theme-text">Shortener</span>
        </h2>

        <p className="text-white lg:text-xl md:text-lg text-base my-4 font-light">
          Paste your unique link to shorten it
        </p>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="w-full p-10">
          <div className="flex flex-col md:flex-row items-stretch gap-[14px] md:max-w-[610px] mx-auto">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Add your link"
                required
                className="w-full lg:min-h-[56px] min-h-[50px] px-4 rounded-lg bg-transparent border-[1px] border-white
               placeholder:text-cadet-gray text-white focus:outline-none lg:text-base text-sm 
               transition-all duration-300 group-hover:border-transparent relative z-10"
                value={fullUrl}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFullUrl(e.target.value)
                }
              />
              <div
                className="absolute inset-0 rounded-lg border-[1px] border-transparent 
                  group-hover:border-none transition-all duration-300 
                  before:content-[''] before:absolute before:inset-0 before:rounded-lg 
                  before:bg-grad-theme-135 before:z-[-1] before:opacity-0 
                  group-hover:before:opacity-100 before:transition-all before:duration-300"
              ></div>
            </div>

            <button
              type="submit"
              className="bg-risd-blue rounded-lg lg:min-h-[56px] min-h-[50px] px-5 text-white text-base font-semibold hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Shorten
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
