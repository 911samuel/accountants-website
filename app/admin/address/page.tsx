"use client";
import components from "../components";
import useTeamManagement from "../utils/page";

export default function AddressManagementPage() {
  const {
    isModalOpen,
    setIsModalOpen,
    addresses,
    handleDeleteAddress,
    handleEditAddress,
    handleAddAddress,
    setNewAddress,
    newAddress,
    currentAddress,
  } = useTeamManagement();

  const addressFields = [
    { label: "Label", field: "name" },
    { label: "Street", field: "street" },
    { label: "City", field: "city" },
    { label: "Country", field: "country" },
    { label: "Location", field: "location" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Manage Addresses</h1>

      <button
        onClick={() => {
          setIsModalOpen(true);
          setNewAddress({
            id: 0,
            name: "",
            street: "",
            city: "",
            country: "",
            location: "",
          });
        }}
        className="bg-blue-600 text-white px-4 py-2 mb-4 rounded hover:bg-blue-700 transition-colors"
      >
        Add Address
      </button>

      <components.Table
        data={addresses}
        columns={[
          { key: "id", label: "ID" },
          { key: "name", label: "Label" },
          { key: "street", label: "Street" },
          { key: "city", label: "City" },
          { key: "country", label: "Country" },
        ]}
        actions={(address) => (
          <components.ActionButtons
            onEdit={() => handleEditAddress(address)}
            onDelete={() => handleDeleteAddress(address.id)}
            isSubscribed={false}
          />
        )}
      />

      <components.Modal
        isOpen={isModalOpen}
        title={currentAddress ? "Edit Address" : "Add Address"}
        onClose={() => {
          setIsModalOpen(false);
          setNewAddress({
            id: 0,
            name: "",
            street: "",
            city: "",
            country: "",
            location: "",
          });
        }}
      >
        {addressFields.map(({ label, field }) => (
          <components.InputField
            key={field}
            type="text"
            label={label}
            value={newAddress[field as never] || ""}
            onChange={(e) =>
              setNewAddress({
                ...newAddress,
                [field]: e.target.value,
              })
            }
          />
        ))}

        <button onClick={handleAddAddress}>Save</button>
      </components.Modal>
    </div>
  );
}
