export default function StatusBadge({ status }) {

  const colors = {

    Pending:
      "bg-yellow-100 text-yellow-800 border border-yellow-300",

    "Picked Up":
      "bg-sky-100 text-sky-800 border border-sky-300",

    "In Transit":
      "bg-blue-100 text-blue-800 border border-blue-300",

    "Out For Delivery":
      "bg-orange-100 text-orange-800 border border-orange-300",

    Delivered:
      "bg-green-100 text-green-800 border border-green-300",

  };

  return (

    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
        colors[status] ||
        "bg-gray-100 text-gray-700 border border-gray-300"
      }`}
    >

      {status}

    </span>

  );

}