"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import components from "../components";
import useUserManagement from "../utils/page";
import { CalendarEvent } from "@/interface";

const calendarFields = [
  { label: "Date", field: "start" }, // Changed 'date' to 'start' for consistency
  { label: "Title", field: "title" },
];

const CalendarManagement = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    newEvent,
    setNewEvent,
    selectedEvent,
    setSelectedEvent,
    events,
    handleDateClick,
    handleEventClick,
    handleAddEvent,
    handleDeleteEvent,
    handleEditEvent,
  } = useUserManagement();

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-4">Calendar Management</h2>

      {/* Calendar */}
      {!isModalOpen && (
        <div className="bg-white shadow-md p-4 rounded-lg mb-10">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events.map((event) => ({
              ...event,
              id: String(event.id),
            }))}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            editable={true}
          />
        </div>
      )}

      {/* Events Table */}
      <components.Table
        data={events}
        columns={[
          { key: "id", label: "ID" },
          { key: "start", label: "Date" },
          { key: "title", label: "Title" },
        ]}
        actions={(event) => (
          <components.ActionButtons
            onEdit={() => handleEditEvent(event)}
            onDelete={() => handleDeleteEvent(event.id)}
            isSubscribed={false}
          />
        )}
      />

      {/* Modal for Adding/Editing Events */}
      <components.Modal
        isOpen={isModalOpen}
        title={selectedEvent ? "Edit Event" : "Add Event"}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null); // Reset selection on close
        }}
      >
        {calendarFields.map(({ label, field }) => (
          <components.InputField
            key={field}
            type="text"
            label={label}
            value={String(newEvent[field as keyof CalendarEvent] || "")}
            onChange={(e) =>
              setNewEvent((prev) => ({
                ...prev,
                [field]: e.target.value,
              }))
            }
          />
        ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={handleAddEvent}
        >
          {selectedEvent ? "Update" : "Save"}
        </button>
      </components.Modal>
    </div>
  );
};

export default CalendarManagement;