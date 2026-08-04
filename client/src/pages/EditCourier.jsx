import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import Header from "../components/Header";
import Button from "../components/Button";
import API from "../services/api";

export default function EditCourier() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    tracking_number: "",
    customer_name: "",
    phone: "",
    courier_company: "",
    origin: "",
    destination: "",
    current_location: "",
    status: "",
    description: "",
  });

  useEffect(() => {
    loadCourier();
  }, []);

  const loadCourier = async () => {
    try {
      const res = await API.get("/couriers/");

      const courier = res.data.find(
        (item) => item.id === Number(id)
      );

      if (courier) {
        setForm(courier);
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to load courier");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateCourier = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/couriers/update/${id}/`, form);

      toast.success("Courier updated successfully");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (error) {
      console.log(error);

      toast.error("Update failed");
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <Header
          title="Edit Courier"
          subtitle="Update shipment information"
        />

        <Card>

          <form
            onSubmit={updateCourier}
            className="grid grid-cols-2 gap-5"
          >

            <div>
              <label className="mb-2 block font-medium">
                Tracking Number
              </label>

              <input
                className="w-full rounded-xl border p-3"
                name="tracking_number"
                value={form.tracking_number}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Customer Name
              </label>

              <input
                className="w-full rounded-xl border p-3"
                name="customer_name"
                value={form.customer_name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Phone
              </label>

              <input
                className="w-full rounded-xl border p-3"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Courier Company
              </label>

              <input
                className="w-full rounded-xl border p-3"
                name="courier_company"
                value={form.courier_company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Origin
              </label>

              <input
                className="w-full rounded-xl border p-3"
                name="origin"
                value={form.origin}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Destination
              </label>

              <input
                className="w-full rounded-xl border p-3"
                name="destination"
                value={form.destination}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Current Location
              </label>

              <input
                className="w-full rounded-xl border p-3"
                name="current_location"
                value={form.current_location}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Status
              </label>

              <select
                className="w-full rounded-xl border p-3"
                name="status"
                value={form.status}
                onChange={handleChange}
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
                rows="4"
                className="w-full rounded-xl border p-3"
                name="description"
                value={form.description}
                onChange={handleChange}
              />

            </div>

            <div className="col-span-2 flex justify-end">

              <Button
                type="submit"
                variant="primary"
              >
                Update Courier
              </Button>

            </div>

          </form>

        </Card>

      </div>
    </DashboardLayout>
  );
}