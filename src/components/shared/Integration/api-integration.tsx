import UserDataStore from "@/store/dataStore";
import { CopyButton } from "../copy-button";

const ApiIntegration = () => {
    const { user } = UserDataStore()
  return (
    <>
      <div className="flex flex-col gap-2 !w-[300px] sm:w-full">
        <h2 className=" text-primary-900  text-4xl tracking-tight font-bold">
          API Integration
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-primary-900 text-[16px] leading-[20px] mt-2">
            Wanting Your Application to use our plugin Smart-API?
        </p>
         {/* API KEY */}
        <CopyButton value={user.api_key} className="btn-primary" event="copy_text" textvalue="Copy Your API Key"/>
        <p className="text-primary-900 text-[16px] leading-[20px] mt-2">
          Make sure to keep your API key secure and do not share it with
          unauthorized individuals.
        </p>
       
        <a
          href="https://documenter.getpostman.com/view/21023738/2s9YywdJvF"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Click Here To Read the Postman documentation
        </a>
      </div>
    </>
  );
};

export default ApiIntegration;
