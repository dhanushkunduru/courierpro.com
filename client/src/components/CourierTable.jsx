import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import API from "../services/api";
import StatusBadge from "./StatusBadge";

export default function CourierTable() {
  const [couriers, setCouriers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCouriers = async () => {
    try {
      const response = await API.get("/couriers/");
      setCouriers(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Unable to load couriers");
    }

    setLoading(false);
  };

  useEffect(() => {
    loadCouriers();
  }, []);

  const deleteCourier = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this courier?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/couriers/delete/${id}/`);

      toast.success("Courier deleted successfully");

      loadCouriers();

    } catch (error) {

      console.log(error);

      toast.error("Delete failed");

    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-12 text-center shadow">

        <h2 className="text-lg font-semibold text-slate-700">
          Loading Couriers...
        </h2>

      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4 text-left">Tracking Number</th>

            <th className="p-4 text-left">Customer</th>

            <th className="p-4 text-left">Origin</th>

            <th className="p-4 text-left">Destination</th>

            <th className="p-4 text-left">Status</th>

            <th className="p-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {couriers.length === 0 ? (

            <tr>

              <td
                colSpan="6"
                className="py-10 text-center text-slate-500"
              >

                No couriers found.

              </td>

            </tr>

          ) : (

            couriers.map((courier) => (

              <tr
                key={courier.id}
                className="border-t hover:bg-slate-50 transition"
              >

                <td className="p-4 font-semibold text-slate-900">
                  {courier.tracking_number}
                </td>

                <td className="p-4">
                  {courier.customer_name}
                </td>

                <td className="p-4">
                  {courier.origin}
                </td>

                <td className="p-4">
                  {courier.destination}
                </td>

                <td className="p-4">
                  <StatusBadge status={courier.status} />
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <Link
                      to={`/edit/${courier.id}`}
                      className="rounded-lg bg-blue-50 p-2 text-blue-600 transition hover:bg-blue-100"
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      onClick={() => deleteCourier(courier.id)}
                      className="rounded-lg bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}