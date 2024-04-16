import React, { useState } from "react";

function Contactus() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    message: ""
  });
  const [errors, setErrors] = useState({}); // Declare errors state variable

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = false;
    const newErrors = {}; // Declare a newErrors object to store error messages

    // Check if any field is empty
    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required.";
      error = true;
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required.";
      error = true;
    }
    if (!formData.emailAddress) {
      newErrors.emailAddress = "Email Address is required.";
      error = true;
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
      error = true;
    }

    // Set errors state variable
    if (error) {
      setErrors(newErrors);
      setErrorMessage("Please fill out all fields.");
    } else {
      setErrorMessage(""); // Clear any previous error message
      // Handle form submission logic here, e.g., send data to backend
    }
  };

  return (
    <div>
      <section className="py-4 bg-info">
        <div className="row">
          <div className="col-md-8 my-auto">
            <h4>Contact us</h4>
          </div>
          <div className="col-md-4 my-auto">
            <h6 className="float-end">Home / Contact us</h6>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact Form</h6>
                  <hr />
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="mb-1">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      {errorMessage && <p className="text-danger">{errorMessage}</p>}
                      {errors.fullName && <p className="text-danger">{errors.fullName}</p>}
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                      {errorMessage && <p className="text-danger">{errorMessage}</p>}
                      {errors.phoneNumber && <p className="text-danger">{errors.phoneNumber}</p>}
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Address"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                      />
                      {errorMessage && <p className="text-danger">{errorMessage}</p>}
                      {errors.emailAddress && <p className="text-danger">{errors.emailAddress}</p>}
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Message</label>
                      <textarea
                        rows="3"
                        className="form-control"
                        placeholder="Type your message...."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errorMessage && <p className="text-danger">{errorMessage}</p>}
                      {errors.message && <p className="text-danger">{errors.message}</p>}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary mt-3"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="col-md-6">
                  <h5 style={{ fontWeight: "bold", textDecoration: "underline", textAlign: "center" }}>Contact Info</h5>
                  <p style={{ color: "black", textAlign: "center" }}>
                  Company: Legendary Security Solutions <br />
                  Phone: +1234567890 <br />
                  Email: info@legendarysecurity.com <br />
                  Address: 123 Main Street <br />
                  City:MTHATHA <br />
                  Zip Code: 90878 <br />
                  Country: USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
