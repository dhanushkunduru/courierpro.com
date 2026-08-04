import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import Header from "../components/Header";
import Button from "../components/Button";
import API from "../services/api";

export default function AddCourier() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    tracking_number: "",
    customer_name: "",
    phone: "",
    courier_company: "",
    origin: "",
    destination: "",
    current_location: "",
    status: "Pending",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveCourier = async (e) => {
    e.preventDefault();

    try {
      await API.post("/couriers/add/", form);

      toast.success("Courier added successfully");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (error) {
      console.log(error);

      toast.error("Failed to add courier");
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <Header
          title="Add Courier"
          subtitle="Register a new shipment"
        />

        <Card>

          <form
            onSubmit={saveCourier}
            className="grid grid-cols-2 gap-5"
          >

            <div>
              <label className="mb-2 block font-medium">
                Tracking Number
              </label>

              <input
                name="tracking_number"
                value={form.tracking_number}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
                required
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Customer Name
              </label>

              <input
                name="customer_name"
                value={form.customer_name}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
                required
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Phone
              </label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
                required
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Courier Company
              </label>

              <input
                name="courier_company"
                value={form.courier_company}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
                required
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Origin
              </label>

              <input
                name="origin"
                value={form.origin}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
                required
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Destination
              </label>

              <input
                name="destination"
                value={form.destination}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
                required
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Current Location
              </label>

              <input
                name="current_location"
                value={form.current_location}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
                required
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              >
                <option>Pending</option>
                <option>Picked Up</option>
                <option>In Transit</option>
                <option>Out For Delivery</option>
                <option>Delivered</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="mb-2 block font-medium">
                Description
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows="4"
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div className="col-span-2 flex justify-end">

              <Button
                type="submit"
                variant="primary"
              >
                Save Courier
              </Button>

            </div>

          </form>

        </Card>

      </div>
    </DashboardLayout>
  );
}