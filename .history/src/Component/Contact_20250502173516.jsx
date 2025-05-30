import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CSS/Contact.css";

const BookingForm = () => {
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const cars = [
    "Maruti Suzuki WagonR",
    "Hyundai Aura",
    "Maruti Suzuki Dzire",
    "Maruti Suzuki Ertiga",
    "Toyota Innova Crysta",
    "Traveller",
    "Kia Carens",
    "Honda Amaze",
    "Mahindra Scorpio N",
  ];

  const formik = useFormik({
    initialValues: {
      tripType: "One Way Trip",
      fullName: "",
      contactNumber: "",
      selectedCar: "",
      pickUpLocation: "",
      pickupDateTime: "", // Combined date and time
      dropLocation: "",
      dropDate: "",
    },
    validationSchema: Yup.object({
      tripType: Yup.string().required("Trip type is required"),
      fullName: Yup.string().required("Name is required"),
      contactNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit contact number")
        .required("Contact number is required"),
      selectedCar: Yup.string().required("Please select a car"),
      pickUpLocation: Yup.string().required("Pick Up Location is required"),
      pickupDateTime: Yup.string().required("Pick Up Date & Time is required"),
      dropLocation: Yup.string().required("Drop Location is required"),
      dropDate: Yup.string().required("Drop Date is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const formattedDateTime = new Date(values.pickupDateTime).toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short",
        });

        const message = `Hello,

This is ${values.fullName} (Contact: ${values.contactNumber}). I would like to request a car booking. Please find the booking details below:

Trip Type:
- Selected Trip Type: ${values.tripType}

Car Details:
- Selected Car: ${values.selectedCar}

Pick-Up Details:
- Location: ${values.pickUpLocation}
- Date & Time: ${formattedDateTime}

Drop-Off Details:
- Location: ${values.dropLocation}
- Date: ${values.dropDate}

Kindly confirm the availability of the car. Let me know if you require any additional details.

Thank you,
${values.fullName}`;

        const businessContactNumber = "919561812854";
        const waUrl = `https://wa.me/${businessContactNumber}?text=${encodeURIComponent(
          message
        )}`;
        const waWindow = window.open(waUrl, "_blank");

        if (!waWindow) {
          alert("Please allow pop-ups for this website to redirect to WhatsApp.");
        }

        resetForm();
        setIsConfirmationVisible(true);
      } catch (error) {
        console.error("Booking failed:", error);
        alert("Failed to send booking.");
      }
    },
  });

  const selectTripType = (type) => {
    formik.setFieldValue("tripType", type);
  };

  return (
    <div className="heading">
      <div className="contact-container">
        <h2>Rent This Car </h2>

        {!isConfirmationVisible ? (
          <form onSubmit={formik.handleSubmit}>
            <div className="button-group">
              <button
                type="button"
                className={`button ${formik.values.tripType === "One Way Trip" ? "active" : "inactive"}`}
                onClick={() => selectTripType("One Way Trip")}
              >
                One Way Trip
              </button>
              <button
                type="button"
                className={`button ${formik.values.tripType === "Round Trip" ? "active" : "inactive"}`}
                onClick={() => selectTripType("Round Trip")}
              >
                Round Trip
              </button>
            </div>

            <input
              type="text"
              name="fullName"
              placeholder="Enter your Full name"
              {...formik.getFieldProps("fullName")}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <span className="error">{formik.errors.fullName}</span>
            )}

            <input
              type="tel"
              name="contactNumber"
              placeholder="Enter Contact Number"
              {...formik.getFieldProps("contactNumber")}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber && (
              <span className="error">{formik.errors.contactNumber}</span>
            )}

            <select name="selectedCar" {...formik.getFieldProps("selectedCar")}>
              <option value="" disabled>
                Select a Car
              </option>
              {cars.map((car) => (
                <option key={car} value={car}>
                  {car}
                </option>
              ))}
            </select>
            {formik.touched.selectedCar && formik.errors.selectedCar && (
              <span className="error">{formik.errors.selectedCar}</span>
            )}

            <div className="row">
              <div className="column">
                <input
                  type="text"
                  name="pickUpLocation"
                  placeholder="Enter Your Pick Up Location"
                  {...formik.getFieldProps("pickUpLocation")}
                />
                {formik.touched.pickUpLocation && formik.errors.pickUpLocation && (
                  <span className="error">{formik.errors.pickUpLocation}</span>
                )}
              </div>
              <div className="column">
                {/* <label className="label">Pick-Up Date & Time</label> */}
                <input
                  type="datetime-local"
                  name="pickupDateTime"
                  {...formik.getFieldProps("pickupDateTime")}
                />
                {formik.touched.pickupDateTime && formik.errors.pickupDateTime && (
                  <span className="error">{formik.errors.pickupDateTime}</span>
                )}
              </div>
            </div>

            <div className="row">
              <div className="column">
                <input
                  type="text"
                  name="dropLocation"
                  placeholder="Enter Your Drop Location"
                  {...formik.getFieldProps("dropLocation")}
                />
                {formik.touched.dropLocation && formik.errors.dropLocation && (
                  <span className="error">{formik.errors.dropLocation}</span>
                )}
              </div>
              <div className="column">
                <input
                  type="date"
                  name="dropDate"
                  {...formik.getFieldProps("dropDate")}
                />
                {formik.touched.dropDate && formik.errors.dropDate && (
                  <span className="error">{formik.errors.dropDate}</span>
                )}
              </div>
            </div>

            <div className="send-btn">
              <button
                type="submit"
                className="send-email-btn"
                disabled={!formik.isValid}
              >
                Send WhatsApp Message
              </button>
            </div>
            <div className="contact-whatsApp1">
              <p>
                Contact us on   
                <a href="tel:+919561812854" className="phone-link">
                    +919561812854{" "}
                </a>
              </p>
            </div>
          </form>
        ) : (
          <div className="confirmation-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100px"
              viewBox="0 -960 960 960"
              width="100px"
              fill="#008000"
            >
              <path d="M424-296L706-578l-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <h2>Thank You for Booking!</h2>
            <p>
              Your booking has been successfully submitted. We will contact you
              soon with further details.
            </p>
            <button className="ok-btn" onClick={() => setIsConfirmationVisible(false)}>
              OK
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
