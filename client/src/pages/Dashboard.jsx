import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Truck, PackageOpen, Plus } from "lucide-react";
import { Link } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";
import SearchBar from "../components/SearchBar";
import CourierTable from "../components/CourierTable";
import Header from "../components/Header";

import API from "../services/api";

export default function Dashboard() {

  const [couriers, setCouriers] = useState([]);

  useEffect(() => {
    loadCouriers();
  }, []);

  const loadCouriers = async () => {
    try {
      const res = await API.get("/couriers/");
      setCouriers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const total = couriers.length;

  const delivered = couriers.filter(
    c => c.status === "Delivered"
  ).length;

  const transit = couriers.filter(
    c => c.status === "In Transit"
  ).length;

  const pending = couriers.filter(
    c => c.status === "Pending"
  ).length;

  return (
    <DashboardLayout>

      <div className="space-y-6">

        <Header
          title="Operations Dashboard"
          subtitle="Real time shipment management"
        />

        <div className="flex justify-end">

          <Link
            to="/add"
            className="bg-blue-600 text-white px-5 py-3 rounded-xl"
          >
            <Plus className="inline mr-2" size={18}/>
            Add Courier
          </Link>

        </div>

        <div className="grid gap-4 md:grid-cols-4">

          <StatsCard
            title="Total Couriers"
            value={total}
            detail="Registered shipments"
          />

          <StatsCard
            title="Delivered"
            value={delivered}
            detail="Completed deliveries"
          />

          <StatsCard
            title="In Transit"
            value={transit}
            detail="Moving shipments"
          />

          <StatsCard
            title="Pending"
            value={pending}
            detail="Waiting dispatch"
          />

        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">

          <motion.div
            initial={{opacity:0,y:15}}
            animate={{opacity:1,y:0}}
          >

            <Card>

              <div className="flex justify-between">

                <div>

                  <p className="text-slate-500">
                    Network Overview
                  </p>

                  <h2 className="text-2xl font-bold mt-2">
                    Logistics Performance
                  </h2>

                </div>

                <Activity
                  className="text-blue-600"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-8">

                <div className="bg-slate-50 rounded-xl p-5">

                  <Truck
                    className="text-blue-600"
                  />

                  <h3 className="text-2xl font-bold mt-3">
                    {transit}
                  </h3>

                  <p>
                    Active Deliveries
                  </p>

                </div>

                <div className="bg-slate-50 rounded-xl p-5">

                  <PackageOpen
                    className="text-green-600"
                  />

                  <h3 className="text-2xl font-bold mt-3">
                    {delivered}
                  </h3>

                  <p>
                    Delivered Packages
                  </p>

                </div>

              </div>

            </Card>

          </motion.div>

          <Card>

            <h2 className="text-xl font-bold">
              Shipment Summary
            </h2>

            <div className="space-y-4 mt-6">

              <div className="flex justify-between">

                <span>Total Shipments</span>

                <strong>{total}</strong>

              </div>

              <div className="flex justify-between">

                <span>Delivered</span>

                <strong>{delivered}</strong>

              </div>

              <div className="flex justify-between">

                <span>In Transit</span>

                <strong>{transit}</strong>

              </div>

              <div className="flex justify-between">

                <span>Pending</span>

                <strong>{pending}</strong>

              </div>

            </div>

          </Card>

        </div>

        <div>

          <div className="flex justify-between items-center mb-5">

            <h2 className="text-xl font-bold">

              Courier List

            </h2>

            <SearchBar />

          </div>

          <CourierTable/>

        </div>

      </div>

    </DashboardLayout>
  );
}