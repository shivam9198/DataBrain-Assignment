import React, { useState } from 'react';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    cardNumber: '',
    expiry: '',
  });
  const [submitted, setSubmitted] = useState(false);
  

  // Move to the next step
  const nextStep = () => {
    setStep(step + 1);
  };
  

  // Move to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle form change
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  // Submit form
  const handleSubmit = () => {
    console.log(formData);
    alert('Form submitted successfully!');
    setSubmitted(true);
  };

  const isStepValid = () => {
    if (step === 1) {
      return formData.name && formData.email;
    } else if (step === 2) {
      return formData.address && formData.city;
    } else if (step === 3) {
      return formData.cardNumber && formData.expiry;
    }
    return false;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-900">
       <div className="text-black shadow-md rounded-lg p-8 w-full max-w-md">
        {submitted ? ( 
          <div className="text-white mb-60 text-[1.5vw]">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <div className="text-white border border-blue-700 bg-zinc-800 p-6 rounded-lg">
            <ul className="list-disc pl-5">
              <li><span className='font-semibold text-emerald-400'>Name:</span> {formData.name}</li>
              <li><span className='font-semibold text-emerald-400'>Email:</span> {formData.email}</li>
              <li><span className='font-semibold text-emerald-400'>Address:</span> {formData.address}</li>
              <li><span className='font-semibold text-emerald-400'>City:</span>  {formData.city}</li>
              <li><span className='font-semibold text-emerald-400'>Card Number:</span> {formData.cardNumber}</li>
              <li><span className='font-semibold text-emerald-400'>Expiry Date:</span>  {formData.expiry}</li>
            </ul>
            </div>
          </div>
        ):
      (
        <>
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Personal Details</h2>
              <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange('name')}
              />
              <input
                type="email"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange('email')}
              />
              <div className="flex justify-between">
                <button
                  disabled
                  className="bg-gray-300 text-white py-2 px-4 rounded opacity-50 cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  className={`py-2 px-4 rounded ${isStepValid() ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                  onClick={nextStep}
                  disabled={!isStepValid()} 
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Address</h2>
              <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange('address')}
              />
              <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                placeholder="City"
                value={formData.city}
                onChange={handleChange('city')}
              />
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={prevStep}
                >
                  Previous
                </button>
                <button
                  className={`py-2 px-4 rounded ${isStepValid() ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                  onClick={nextStep}
                  disabled={!isStepValid()} 
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Payment Details</h2>
              <input
                type="number"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange('cardNumber')}
                />
                <input
                  type="text"
                  className="w-full p-2 mb-4 border border-gray-300 rounded"
                  placeholder="Expiry Date"
                  value={formData.expiry}
                  onChange={handleChange('expiry')}
                />
                <div className="flex justify-between">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={prevStep}
                  >
                    Previous
                  </button>
                  <button
                    className={`py-2 px-4 rounded ${isStepValid() ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    onClick={handleSubmit}
                    disabled={!isStepValid()} 
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default StepForm;
