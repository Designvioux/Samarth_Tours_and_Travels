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
      pickupDate: "",
      pickupTime: "",
      pickUpLocation: "",
      dropLocation: "",
      dropDate: "",
      returnLocation: "",
      returnDate: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
  fullName: Yup.string().required("Required"),
  contactNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
    .required("Required"),
  selectedCar: Yup.string().required("Required"),
  pickupDate: Yup.string().required("Required"),
  pickupTime: Yup.string().required("Required"),
  pickUpLocation: Yup.string().required("Required"),
  dropLocation: Yup.string().required("Required"),
  dropDate: Yup.string().required("Required"),
  returnLocation: Yup.string().when("tripType", (tripType, schema) =>
    tripType === "Round Trip"
      ? schema.required("Return Location is required")
      : schema.notRequired()
  ),
  returnDate: Yup.string().when("tripType", (tripType, schema) =>
    tripType === "Round Trip"
      ? schema.required("Return Date is required")
      : schema.notRequired()
  ),
}),

    onSubmit: (values) => {
      try {
        const {
          tripType,
          fullName,
          contactNumber,
          selectedCar,
          pickupDate,
          pickupTime,
          pickUpLocation,
          dropLocation,
          dropDate,
        } = values;

        const pickupDateTime = new Date(`${pickupDate}T${pickupTime}`);
        const formattedDateTime = pickupDateTime.toLocaleString("en-IN", {
          hour12: true,
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });

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
        onClose();
      } catch (error) {
        console.error("Booking failed:", error);
        alert("Failed to send booking.");
      }
    },
  });

  if (!isOpen) return null;

  const selectTripType = (type) => {
    formik.setFieldValue("tripType", type);
    if (type === "One Way Trip") {
      formik.setFieldValue("returnLocation", "");
      formik.setFieldValue("returnDate", "");
    }


    
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Book Your Car</h2>

        <div className="trip-buttons">
          <button
            className={formik.values.tripType === "One Way Trip" ? "selected" : ""}
            onClick={() => selectTripType("One Way Trip")}
          >
            One Way Trip
          </button>
          <button
            className={formik.values.tripType === "Round Trip" ? "selected" : ""}
            onClick={() => selectTripType("Round Trip")}
          >
            Round Trip
          </button>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Full name"
            className="Fullname"
            {...formik.getFieldProps("fullName")}
          />
          <input
            type="tel"
            className="Contactno"
            placeholder="Enter Contact Number"
            {...formik.getFieldProps("contactNumber")}
          />
          <input
            type="text"
            className="Select"
            placeholder="Car Name (e.g., Hyundai Aura)"
            {...formik.getFieldProps("selectedCar")}
          />
<div className="column">
  <div className="time-input-wrapper">
    <input
      type="time"
      name="pickupTime"
      className={`Book-PickupTime ${formik.values.pickupTime ? 'time-selected' : ''}`}
      step="60"
      {...formik.getFieldProps("pickupTime")}
    />
    {!formik.values.pickupTime && (
      <span className="time-placeholder">Select Pick Up Time</span>
    )}
  </div>
  {formik.touched.pickupTime && formik.errors.pickupTime && (
    <span className="error">{formik.errors.pickupTime}</span>
  )}
</div>
          <d className="Book-Pickup-LD">
          <div className="column">
            <input
              type="text"
              name="pickUpLocation"
              className="Book-Pickup"
              placeholder="Enter Pick Up Location"
              {...formik.getFieldProps("pickUpLocation")}
            />
            {formik.touched.pickUpLocation && formik.errors.pickUpLocation && (
              <span className="error">{formik.errors.pickUpLocation}</span>
            )}
          </div>

          <div className="column">
                  <div className="date-input-wrapper">
                    <input
                      type="date"
                      name="pickupDate"
                      className={`PickupDate ${formik.values.pickupDate ? 'has-value' : ''}`}
                      {...formik.getFieldProps("pickupDate")}
                      onChange={handleInputChange}
                    />
                    {!formik.values.pickupDate && (
                      <span className="date-placeholder">Select Pick Up Date</span>
                    )}
                  </div>
                  {formik.touched.pickupDate && formik.errors.pickupDate && (
                    <span className="error">{formik.errors.pickupDate}</span>
                  )}
                </div>
              </d
</div>
         
 <div className="Book-Pickup-LD">
          <div className="column">
            <input
              type="text"
              name="dropLocation"
              className="Book-dropLocation"
              placeholder="Enter Your Destination"
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
              className="Book-Dropdate"
              {...formik.getFieldProps("dropDate")}
            />
            {formik.touched.dropDate && formik.errors.dropDate && (
              <span className="error">{formik.errors.dropDate}</span>
            )}
          </div>
</div>
          {/* ✅ Only show when Round Trip is selected */}
          {formik.values.tripType === "Round Trip" && (
            <div className="Book-Pickup-LD">
              <div className="column">
                <input
                  type="text"
                  name="returnLocation"
                  className="ReturnLocation"
                  placeholder="Enter Return Location"
                  {...formik.getFieldProps("returnLocation")}
                />
                {formik.touched.returnLocation && formik.errors.returnLocation && (
                  <span className="error">{formik.errors.returnLocation}</span>
                )}
              </div>

              <div className="column">
                <input
                  type="date"
                  name="returnDate"
                  className="ReturnDate"
                  placeholder="Select Return Date"
                  {...formik.getFieldProps("returnDate")}
                />
                {formik.touched.returnDate && formik.errors.returnDate && (
                  <span className="error">{formik.errors.returnDate}</span>
                )}
              </div>
            </div>
          )}

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
