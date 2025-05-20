"use client";
import components from "../components";
import useTeamManagement from "../utils/page";



export default function SubscriptionManagementPage() {
  const {
    isModalOpen,
    setIsModalOpen,
    handleAddSubscriber,
    handleDeleteSubscriber,
    newEmail,
    setNewEmail,
    subscribers,
  } = useTeamManagement();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Manage Email Subscriptions</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 mb-4"
      >
        Add Subscriber
      </button>

      <components.Table
        data={subscribers}
        columns={[
          { key: "id", label: "ID" },
          { key: "email", label: "Email" },
          { key: "subscribed", label: "Subscribed" },
        ]}
        actions={(subscriber) => (
          <components.ActionButtons
            onEdit={() => setIsModalOpen(true)}
            onDelete={() => handleDeleteSubscriber(subscriber.id)}
            isSubscribed={true}
          />
        )}
      />

      <components.Modal
        isOpen={isModalOpen}
        title="Add Subscriber"
        onClose={() => setIsModalOpen(false)}
      >
        <components.InputField
          label="Email"
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <button onClick={handleAddSubscriber} className="mt-4">
          Save
        </button>
      </components.Modal>
    </div>
  );
}
