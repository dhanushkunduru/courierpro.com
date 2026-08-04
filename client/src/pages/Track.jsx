import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import API from "../services/api";

export default function Track() {
  const [tracking, setTracking] = useState("");
  const [courier, setCourier] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchCourier = async () => {
    if (!tracking.trim()) {
      alert("Please enter a tracking number");
      return;
    }

    setLoading(true);

    try {
      const response = await API.get(`/couriers/${tracking.trim()}/`);

      console.log(response.data);

      setCourier(response.data);
    } catch (error) {
      console.log(error);

      setCourier(null);

      alert("Tracking Number Not Found");
    }

    setLoading(false);
  };

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto py-16 px-6">

        <h1 className="text-4xl font-bold mb-2">
          Track Shipment
        </h1>

        <p className="text-gray-500 mb-8">
          Enter your tracking number to view shipment details.
        </p>

        <div className="flex gap-4">

          <input
            type="text"
            value={tracking}
            onChange={(e) => setTracking(e.target.value)}
            placeholder="Example: CRT10001"
            className="flex-1 border rounded-lg px-4 py-3"
          />

          <button
            onClick={searchCourier}
            className="bg-blue-600 text-white px-8 rounded-lg"
          >
            {loading ? "Searching..." : "Search"}
          </button>

        </div>

        {courier && (

          <div className="mt-10 border rounded-xl p-6 shadow">

            <h2 className="text-2xl font-bold mb-6">
              Shipment Details
            </h2>

            <div className="grid grid-cols-2 gap-6">

              <div>
                <strong>Tracking Number</strong>
                <p>{courier.tracking_number}</p>
              </div>

              <div>
                <strong>Customer</strong>
                <p>{courier.customer_name}</p>
              </div>

              <div>
                <strong>Status</strong>
                <p>{courier.status}</p>
              </div>

              <div>
                <strong>Courier Company</strong>
                <p>{courier.courier_company}</p>
              </div>

              <div>
                <strong>Origin</strong>
                <p>{courier.origin}</p>
              </div>

              <div>
                <strong>Destination</strong>
                <p>{courier.destination}</p>
              </div>

              <div>
                <strong>Current Location</strong>
                <p>{courier.current_location}</p>
              </div>

              <div>
                <strong>Phone</strong>
                <p>{courier.phone}</p>
              </div>

            </div>

            <div className="mt-6">

              <strong>Description</strong>

              <p className="mt-2">
                {courier.description}
              </p>

            </div>

          </div>

        )}

      </div>
    </MainLayout>
  );
}