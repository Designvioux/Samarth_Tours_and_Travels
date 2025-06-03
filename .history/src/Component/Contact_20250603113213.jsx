// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import "./CSS/Contact.css";

// const BookingForm = () => {
//   const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

//   const cars = [
//     "WagonR", "Celerio", "Suzuki Dzire", "Ciaz", "Etos", "Ecco", "Honda Mobilio",
//     "Tavera", "Ertiga", "Kia Carens", "Innova", "Innova Crysta",
//     "17STR Tempo Traveller", "21STR Tempo Traveller", "26STR Tempo Traveller", "32STR Tempo Traveller"
//   ];
// const [time,setTime]=useState("");


//   const formatDate = (dateStr) => {
//     const date = new Date(dateStr);
//     const day = String(date.getDate()).padStart(2, "0");
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   const formatTime12Hour = (timeStr) => {
//     const [hour, minute] = timeStr.split(":").map(Number);
//     const ampm = hour >= 12 ? "PM" : "AM";
//     const hour12 = hour % 12 || 12;
//     return `${hour12}:${String(minute).padStart(2, "0")} ${ampm}`;
//   };

//   const formik = useFormik({
//     initialValues: {
//       tripType: "One Way Trip",
//       fullName: "",
//       contactNumber: "",
//       selectedCar: "",
//        pickupTime: "",
//       pickUpLocation: "",
//       pickupDate: "",
//       dropLocation: "",
//       dropDate: "",
//       returnLocation: "",
//       returnDate: "",
//     },
//    validationSchema: Yup.object({
//   tripType: Yup.string().required("Trip type is required"),
//   fullName: Yup.string().required("Name is required"),
//   contactNumber: Yup.string()
//     .matches(/^[0-9]{10}$/, "Enter a valid 10-digit contact number")
//     .required("Contact number is required"),
//   selectedCar: Yup.string().required("Please select a car"),
//   pickUpLocation: Yup.string().required("Pick Up Location is required"),
//   pickupDate: Yup.string().required("Pick Up Date is required"),
//   pickupTime: Yup.string().required("Pick Up Time is required"),
//   dropLocation: Yup.string().required("Destination is required"),
//   dropDate: Yup.string().required("Drop Date is required"),

//   returnLocation: Yup.string().when("tripType", (tripType, schema) =>
//     tripType === "Round Trip"
//       ? schema.required("Return Location is required")
//       : schema.notRequired()
//   ),

//   returnDate: Yup.string().when("tripType", (tripType, schema) =>
//     tripType === "Round Trip"
//       ? schema.required("Return Date is required")
//       : schema.notRequired()
//   ),
// }),

//     onSubmit: async (values, { resetForm }) => {
//       try {
//         const formattedPickupDate = formatDate(values.pickupDate);
//         const formattedPickupTime = formatTime12Hour(values.pickupTime);
//         const formattedDropDate = formatDate(values.dropDate);

//         let message = `Hello,

// This is ${values.fullName} (Contact: ${values.contactNumber}). I would like to request a car booking. Please find the booking details below:

// Trip Type:
// - Selected Trip Type: ${values.tripType}

// Car Details:
// - Selected Car: ${values.selectedCar}

// Pick-Up Details:
// - Location: ${values.pickUpLocation}
// - Date: ${formattedPickupDate}
// - Time: ${formattedPickupTime}

// Drop-Off Details:
// - Destination: ${values.dropLocation}
// - Date: ${formattedDropDate}`;

//         if (values.tripType === "Round Trip") {
//           const formattedReturnDate = formatDate(values.returnDate);
//           message += `

// Return Trip Details:
// - Return Location: ${values.returnLocation}
// - Return Date: ${formattedReturnDate}`;
//         }

//         message += `

// Kindly confirm the availability of the car. Let me know if you require any additional details.

// Thank you,
// ${values.fullName}`;

//         const businessContactNumber = "919561812854";
//         const waUrl = `https://wa.me/${businessContactNumber}?text=${encodeURIComponent(message)}`;
//         const waWindow = window.open(waUrl, "_blank");

//         if (!waWindow) {
//           alert("Please allow pop-ups for this website to redirect to WhatsApp.");
//         }

//         resetForm();
//         setIsConfirmationVisible(true);
//       } catch (error) {
//         console.error("Booking failed:", error);
//         alert("Failed to send booking.");
//       }
//     },
//   });

//   const selectTripType = (type) => {
//     formik.setFieldValue("tripType", type);

//     // Clear return trip fields when switching to One Way
//     if (type === "One Way Trip") {
//       formik.setFieldValue("returnLocation", "");
//       formik.setFieldValue("returnDate", "");
//     }
//   };

//   return (
//     <div className="heading">
//       <div className="contact-container">
//         <h2>Book Your Car</h2>

//         {!isConfirmationVisible ? (
//           <form onSubmit={formik.handleSubmit}>
//             <div className="button-group">
//               <button
//                 type="button"
//                 className={`button ${formik.values.tripType === "One Way Trip" ? "active" : "inactive"}`}
//                 onClick={() => selectTripType("One Way Trip")}
//               >
//                 One Way Trip
//               </button>
//               <button
//                 type="button"
//                 className={`button ${formik.values.tripType === "Round Trip" ? "active" : "inactive"}`}
//                 onClick={() => selectTripType("Round Trip")}
//               >
//                 Round Trip
//               </button>
//             </div>

//             <div className="Allinput">
//               <input
//                 type="text"
//                 name="fullName"
//                 className="Fullname"
//                 placeholder="Enter your Full name"
//                 {...formik.getFieldProps("fullName")}
//               />
//               {formik.touched.fullName && formik.errors.fullName && <span className="error">{formik.errors.fullName}</span>}

//               <input
//                 type="tel"
//                 name="contactNumber"
//                 className="Contactno"
//                 placeholder="Enter Contact Number"
//                 {...formik.getFieldProps("contactNumber")}
//               />
//               {formik.touched.contactNumber && formik.errors.contactNumber && <span className="error">{formik.errors.contactNumber}</span>}

//               <select
//                 name="selectedCar"
//                 className="Select"
//                 {...formik.getFieldProps("selectedCar")}
//               >
//                 <option value="" disabled>
//                   Select a Car
//                 </option>
//                 {cars.map((car) => (
//                   <option key={car} value={car}>
//                     {car}
//                   </option>
//                 ))}
//               </select>
//               {formik.touched.selectedCar && formik.errors.selectedCar && (
//                 <span className="error">{formik.errors.selectedCar}</span>
//               )}
// <div className="column">
//   <div className="time-input-wrapper">
//     <input
//       type="time"
//       name="pickupTime"
//       className={`PickupTime ${formik.values.pickupTime ? 'has-value' : ''}`}
//       {...formik.getFieldProps("pickupTime")}
//     />
//     {!formik.values.pickupTime && (
//       <span className="time-placeholder">Select Pick Up Time</span>
//     )}
//   </div>
//   {formik.touched.pickupTime && formik.errors.pickupTime && (
//     <span className="error">{formik.errors.pickupTime}</span>
//   )}
// </div>
//               <div className="Pickup-LD">
//               <div className="column">
//                 <input
//                   type="text"
//                   name="pickUpLocation"
//                   className="Pickup"
//                   placeholder="Enter Pick Up Location"
//                   {...formik.getFieldProps("pickUpLocation")}
//                 />
//                 {formik.touched.pickUpLocation && formik.errors.pickUpLocation && (
//                   <span className="error">{formik.errors.pickUpLocation}</span>
//                 )}
//               </div>

//               <div className="column">
//   <div className="date-input-wrapper">
//     <input
//       type="date"
//       name="pickupDate"
//       className={`PickupDate ${formik.values.pickupDate ? 'has-value' : ''}`}
//       {...formik.getFieldProps("pickupDate")}
//     />
//     {!formik.values.pickupDate && (
//       <span className="date-placeholder">Select Pick Up Date</span>
//     )}
//   </div>
//   {formik.touched.pickupDate && formik.errors.pickupDate && (
//     <span className="error">{formik.errors.pickupDate}</span>
//   )}
// </div>

// </div>
             
//  <div className="Pickup-LD">
//               <div className="column">
//                 <input
//                   type="text"
//                   name="dropLocation"
//                   className="Droplocation"
//                   placeholder="Enter Destination"
//                   {...formik.getFieldProps("dropLocation")}
//                 />
//                 {formik.touched.dropLocation && formik.errors.dropLocation && (
//                   <span className="error">{formik.errors.dropLocation}</span>
//                 )}
//               </div>

//               <div className="column">
//                 <input
//                   type="date"
//                   name="dropDate"
//                   className="Dropdate"
//                   placeholder="Select Drop Date"
//                   {...formik.getFieldProps("dropDate")}
//                 />
//                 {formik.touched.dropDate && formik.errors.dropDate && (
//                   <span className="error">{formik.errors.dropDate}</span>
//                 )}
//               </div>
// </div>
//               {/* Show return trip fields only if Round Trip */}
//               {formik.values.tripType === "Round Trip" && (
//                 <>
//                 <div className="Pickup-LD">
//                   <div className="column">
//                     <input
//                       type="text"
//                       name="returnLocation"
//                       className="ReturnLocation"
//                       placeholder="Enter Return Location"
//                       {...formik.getFieldProps("returnLocation")}
//                     />
//                     {formik.touched.returnLocation && formik.errors.returnLocation && (
//                       <span className="error">{formik.errors.returnLocation}</span>
//                     )}
//                   </div>

//                   <div className="column">
//                     <input
//                       type="date"
//                       name="returnDate"
//                       className="ReturnDate"
//                       placeholder="Select Return Date"
//                       {...formik.getFieldProps("returnDate")}
//                     />
//                     {formik.touched.returnDate && formik.errors.returnDate && (
//                       <span className="error">{formik.errors.returnDate}</span>
//                     )}
//                   </div>
//                    </div>
//                 </>
               
//               )}

//               <div className="send-btn">
//                 <button type="submit" className="send-email-btn" disabled={!formik.isValid}>
//                   Send WhatsApp Message
//                 </button>
//               </div>
//             </div>

//             <div className="contact-whatsApp1">
//               <p>
//                 Contact us on
//                 <a href="tel:+919561812854" className="phone-link"> +919561812854</a>
//               </p>
//             </div>
//           </form>
//         ) : (
//           <div className="confirmation-content">
//             <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#008000">
//               <path d="M424-296L706-578l-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
//             </svg>
//             <h2>Thank You for Booking!</h2>
//             <p>Your booking has been successfully submitted. We will contact you soon with further details.</p>
//             <button className="ok-btn" onClick={() => setIsConfirmationVisible(false)}>OK</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookingForm;




import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CSS/C";

const BookingForm = () => {
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const cars = [
    "WagonR", "Celerio", "Suzuki Dzire", "Ciaz", "Etos", "Ecco", "Honda Mobilio",
    "Tavera", "Ertiga", "Kia Carens", "Innova", "Innova Crysta",
    "17STR Tempo Traveller", "21STR Tempo Traveller", "26STR Tempo Traveller", "32STR Tempo Traveller"
  ];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime12Hour = (timeStr) => {
    const [hour, minute] = timeStr.split(":").map(Number);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${String(minute).padStart(2, "0")} ${ampm}`;
  };

  const formik = useFormik({
    initialValues: {
      tripType: "One Way Trip",
      fullName: "",
      contactNumber: "",
      selectedCar: "",
      pickupTime: "",
      pickUpLocation: "",
      pickupDate: "",
      dropLocation: "",
      dropDate: "",
      returnLocation: "",
      returnDate: "",
    },
    validationSchema: Yup.object({
      tripType: Yup.string().required("Trip type is required"),
      fullName: Yup.string().required("Name is required"),
      contactNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit contact number")
        .required("Contact number is required"),
      selectedCar: Yup.string().required("Please select a car"),
      pickUpLocation: Yup.string().required("Pick Up Location is required"),
      pickupDate: Yup.string().required("Pick Up Date is required"),
      pickupTime: Yup.string().required("Pick Up Time is required"),
      dropLocation: Yup.string().required("Destination is required"),
      dropDate: Yup.string().required("Drop Date is required"),
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
    onSubmit: async (values, { resetForm }) => {
      try {
        const formattedPickupDate = formatDate(values.pickupDate);
        const formattedPickupTime = formatTime12Hour(values.pickupTime);
        const formattedDropDate = formatDate(values.dropDate);

        let message = `Hello,

This is ${values.fullName} (Contact: ${values.contactNumber}). I would like to request a car booking. Please find the booking details below:

Trip Type:
- Selected Trip Type: ${values.tripType}

Car Details:
- Selected Car: ${values.selectedCar}

Pick-Up Details:
- Location: ${values.pickUpLocation}
- Date: ${formattedPickupDate}
- Time: ${formattedPickupTime}

Drop-Off Details:
- Destination: ${values.dropLocation}
- Date: ${formattedDropDate}`;

        if (values.tripType === "Round Trip") {
          const formattedReturnDate = formatDate(values.returnDate);
          message += `

Return Trip Details:
- Return Location: ${values.returnLocation}
- Return Date: ${formattedReturnDate}`;
        }

        message += `

Kindly confirm the availability of the car. Let me know if you require any additional details.

Thank you,
${values.fullName}`;

        const businessContactNumber = "919561812854";
        const waUrl = `https://wa.me/${businessContactNumber}?text=${encodeURIComponent(message)}`;
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

    // Clear return trip fields when switching to One Way
    if (type === "One Way Trip") {
      formik.setFieldValue("returnLocation", "");
      formik.setFieldValue("returnDate", "");
    }
  };

  return (
    <div className="heading">
      <div className="contact-container">
        <h2>Book Your Car</h2>

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

            <div className="Allinput">
              <input
                type="text"
                name="fullName"
                className="Fullname"
                placeholder="Enter your Full name"
                {...formik.getFieldProps("fullName")}
              />
              {formik.touched.fullName && formik.errors.fullName && <span className="error">{formik.errors.fullName}</span>}

              <input
                type="tel"
                name="contactNumber"
                className="Contactno"
                placeholder="Enter Contact Number"
                {...formik.getFieldProps("contactNumber")}
              />
              {formik.touched.contactNumber && formik.errors.contactNumber && <span className="error">{formik.errors.contactNumber}</span>}

              <select
                name="selectedCar"
                className="Select"
                {...formik.getFieldProps("selectedCar")}
              >
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

              <div className="time-input-wrapper">
                <input
                  type="time"
                  name="pickupTime"
                  className={`PickupTime ${formik.values.pickupTime ? 'has-value' : ''}`}
                  {...formik.getFieldProps("pickupTime")}
                />
                {!formik.values.pickupTime && (
                  <span className="time-placeholder">Select Pick Up Time</span>
                )}
              </div>
              {formik.touched.pickupTime && formik.errors.pickupTime && (
                <span className="error">{formik.errors.pickupTime}</span>
              )}

              <div className="Pickup-LD">
                <div className="column">
                  <input
                    type="text"
                    name="pickUpLocation"
                    className="Pickup"
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
                    />
                    {!formik.values.pickupDate && (
                      <span className="date-placeholder">Select Pick Up Date</span>
                    )}
                  </div>
                  {formik.touched.pickupDate && formik.errors.pickupDate && (
                    <span className="error">{formik.errors.pickupDate}</span>
                  )}
                </div>
              </div>
              
              <div className="Pickup-LD">
                <div className="column">
                  <input
                    type="text"
                    name="dropLocation"
                    className="Droplocation"
                    placeholder="Enter Destination"
                    {...formik.getFieldProps("dropLocation")}
                  />
                  {formik.touched.dropLocation && formik.errors.dropLocation && (
                    <span className="error">{formik.errors.dropLocation}</span>
                  )}
                </div>

                <div className="column">
                  <div className="date-input-wrapper">
                    <input
                      type="date"
                      name="dropDate"
                      className={`Dropdate ${formik.values.dropDate ? 'has-value' : ''}`}
                      {...formik.getFieldProps("dropDate")}
                    />
                    {!formik.values.dropDate && (
                      <span className="date-placeholder">Select Drop Date</span>
                    )}
                  </div>
                  {formik.touched.dropDate && formik.errors.dropDate && (
                    <span className="error">{formik.errors.dropDate}</span>
                  )}
                </div>
              </div>

              {/* Show return trip fields only if Round Trip */}
              {formik.values.tripType === "Round Trip" && (
                <div className="Pickup-LD">
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
                    <div className="date-input-wrapper">
                      <input
                        type="date"
                        name="returnDate"
                        className={`ReturnDate ${formik.values.returnDate ? 'has-value' : ''}`}
                        {...formik.getFieldProps("returnDate")}
                      />
                      {!formik.values.returnDate && (
                        <span className="date-placeholder">Select Return Date</span>
                      )}
                    </div>
                    {formik.touched.returnDate && formik.errors.returnDate && (
                      <span className="error">{formik.errors.returnDate}</span>
                    )}
                  </div>
                </div>
              )}

              <div className="send-btn">
                <button type="submit" className="send-email-btn" disabled={!formik.isValid}>
                  Send WhatsApp Message
                </button>
              </div>
            </div>

            <div className="contact-whatsApp1">
              <p>
                Contact us on
                <a href="tel:+919561812854" className="phone-link"> +919561812854</a>
              </p>
            </div>
          </form>
        ) : (
          <div className="confirmation-content">
            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#008000">
              <path d="M424-296L706-578l-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <h2>Thank You for Booking!</h2>
            <p>Your booking has been successfully submitted. We will contact you soon with further details.</p>
            <button className="ok-btn" onClick={() => setIsConfirmationVisible(false)}>OK</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;







