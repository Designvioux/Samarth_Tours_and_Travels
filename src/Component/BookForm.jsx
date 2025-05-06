import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CSS/BookForm.css";

const BookingPopup = ({ isOpen, onClose, selectedCar }) => {
  const formik = useFormik({
    initialValues: {
      tripType: "One Way Trip",
      fullName: "",
      contactNumber: "",
      selectedCar: selectedCar || "",
      pickupDateTime: "",
      pickUpLocation: "",
      dropLocation: "",
      dropDate: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      contactNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
        .required("Required"),
      selectedCar: Yup.string().required("Required"),
      pickupDateTime: Yup.string().required("Required"),
      pickUpLocation: Yup.string().required("Required"),
      dropLocation: Yup.string().required("Required"),
      dropDate: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      try {
        const {
          tripType,
          fullName,
          contactNumber,
          selectedCar,
          pickupDateTime,
          pickUpLocation,
          dropLocation,
          dropDate,
        } = values;

        const pickupDate = new Date(pickupDateTime);
const formattedDateTime = `${pickupDate.getDate().toString().padStart(2, '0')}/${(pickupDate.getMonth() + 1)
  .toString()
  .padStart(2, '0')}/${pickupDate.getFullYear()} ${pickupDate.getHours().toString().padStart(2, '0')}:${pickupDate.getMinutes().toString().padStart(2, '0')}`;


        const message = `Hello,

This is ${fullName} (Contact: ${contactNumber}). I would like to request a car booking. Please find the booking details below:

Trip Type:
- Selected Trip Type: ${tripType}

Car Details:
- Selected Car: ${selectedCar}

Pick-Up Details:
- Location: ${pickUpLocation}
- Date & Time: ${formattedDateTime}

Drop-Off Details:
- Location: ${dropLocation}
- Date: ${dropDate}

Kindly confirm the availability of the car. Let me know if you require any additional details.

Thank you,
${fullName}`;

        const businessContactNumber = "919561812854";
        const waUrl = `https://wa.me/${businessContactNumber}?text=${encodeURIComponent(
          message
        )}`;

        const waWindow = window.open(waUrl, "_blank");

        if (!waWindow) {
          alert("Please allow pop-ups for this website to redirect to WhatsApp.");
        }

        formik.resetForm();
        onClose(); // close the popup
      } catch (error) {
        console.error("Booking failed:", error);
        alert("Failed to send booking.");
      }
    },
  });

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Book Your Car</h2>
        {/* <p>Please select your trip type and fill the details or call us directly at the number below</p> */}

        <div className="trip-buttons">
          <button
            className={formik.values.tripType === "One Way Trip" ? "selected" : ""}
            onClick={() => formik.setFieldValue("tripType", "One Way Trip")}
          >
            One Way Trip
          </button>
          <button
            className={formik.values.tripType === "Round Trip" ? "selected" : ""}
            onClick={() => formik.setFieldValue("tripType", "Round Trip")}
          >
            Round Trip
          </button>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Full name"
            {...formik.getFieldProps("fullName")}
          />
          <input
            type="tel"
            placeholder="Enter Contact Number"
            {...formik.getFieldProps("contactNumber")}
          />
          <input
            type="text"
            placeholder="Car Name (e.g., Hyundai Aura)"
            {...formik.getFieldProps("selectedCar")}
          />

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
            <div className="column-drop">
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
            <div className="column-Date">
              <input
                type="date"
                name="dropDate"
                className="Date"
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
        </form>

        <div className="contact-links">
          Contact us on <a href="tel:+919561812854">+9195618 12854</a>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
