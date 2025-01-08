import PersonalizeSMSForm from "./form/personalize-form"

const PersonalizeSMSTab = () => {
  return (
    <section className="!m-5 bg-white p-6 text-primary-900 flex flex-col gap-2 rounded-[10px] shadow-lg">
      
      <div className="flex flex-col gap-2">
        <h1 className="text-[16px] leading-[24px] font-bold font-Urbanist">Personalize SMS Message</h1>
        <p className="text-[14px] leading-[18px] mt-3">Upload format(Select a CSV File , each column should contain phone number and messages).</p>
      </div>
      <PersonalizeSMSForm />
    </section>
  )
}

export default PersonalizeSMSTab
