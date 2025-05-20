"use client";
import Image from "next/image";
import components from "../components";
import useTeamManagement from "../utils/page";

export default function TeamManagementPage() {
  const {
    teamMembers,
    isModalOpen,
    setIsModalOpen,
    currentMember,
    newMember,
    setNewMember,
    handleImageUpload,
    handleSave,
    handleEdit,
    handleDelete,
  } = useTeamManagement();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Manage Team Members</h1>

      <button
        onClick={() => {
          setIsModalOpen(true);
          setNewMember({
            id: 0,
            imageUrl: "",
            names: "",
            title: "",
            tel: "",
            email: "",
            description: "",
            social: { twitter: "", linkedin: "", instagram: "" },
          });
        }}
        className="bg-blue-600 text-white px-4 py-2 mb-4 rounded hover:bg-blue-700 transition-colors"
      >
        Add Member
      </button>

      <components.Table
        data={teamMembers}
        columns={[
          { key: "id", label: "ID" },
          { key: "names", label: "Name" },
          { key: "title", label: "Title" },
          { key: "tel", label: "Phone" },
          { key: "email", label: "Email" },
        ]}
        actions={(member) => (
          <components.ActionButtons
            onEdit={() => handleEdit(member)}
            onDelete={() => handleDelete(member.id)}
            isSubscribed={false}
          />
        )}
      />

      <components.Modal
        isOpen={isModalOpen}
        title={currentMember ? "Edit Team Member" : "Add Team Member"}
        onClose={() => {
          setIsModalOpen(false);
          setNewMember({
            id: 0,
            imageUrl: "",
            names: "",
            title: "",
            tel: "",
            email: "",
            description: "",
            social: { twitter: "", linkedin: "", instagram: "" },
          });
        }}
      >
        <div className="mb-4">
          <label className="block text-gray-700">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="p-2 w-full rounded border"
          />
        </div>

        {newMember.imageUrl && (
          <div className="mb-4 flex justify-center">
            <Image
              src={newMember.imageUrl}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-full"
              width={128}
              height={128}
            />
          </div>
        )}

        {["names", "title", "tel", "email", "description"].map((field) => (
          <components.InputField
            key={field}
            type="text"
            label={field}
            value={(newMember as never)[field]}
            onChange={(e) =>
              setNewMember({
                ...newMember,
                [field]: e.target.value,
              })
            }
          />
        ))}

        {["twitter", "linkedin", "instagram"].map((platform) => (
          <components.InputField
            key={platform}
            type="text"
            label={platform}
            value={(newMember.social as never)[platform]}
            onChange={(e) =>
              setNewMember({
                ...newMember,
                social: { ...newMember.social, [platform]: e.target.value },
              })
            }
          />
        ))}

        <button
          onClick={handleSave}
        >
          {currentMember ? "Update" : "Save"}
        </button>
      </components.Modal>
    </div>
  );
}
