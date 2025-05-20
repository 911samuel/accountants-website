"use client";
import {
  ACRTeamObject,
  Address,
  CalendarEvent,
  Subscriber,
  User,
} from "@/interface";
import { useState } from "react";
import { EventClickArg } from "@fullcalendar/core";
import { DateClickArg } from "@fullcalendar/interaction";

const initialTeamMembers: ACRTeamObject[] = [
  {
    id: 1,
    imageUrl: "/placeholder-avatar.png",
    names: "John Doe",
    title: "Chief Executive Officer",
    tel: "+1 (555) 123-4567",
    email: "john.doe@company.com",
    description: "Experienced leader with 15 years of management experience",
    social: {
      twitter: "@johndoe",
      linkedin: "/in/johndoe",
      instagram: "@john_doe_official",
    },
  },
  {
    id: 2,
    imageUrl: "/placeholder-avatar.png",
    names: "Jane Smith",
    title: "Chief Technology Officer",
    tel: "+1 (555) 987-6543",
    email: "jane.smith@company.com",
    description: "Tech innovator with expertise in software engineering",
    social: {
      twitter: "@janesmith",
      linkedin: "/in/janesmith",
      instagram: "@jane_smith_tech",
    },
  },
];

const initialUsers: User[] = [
  { id: 1, name: "John Admin", email: "admin@example.com", role: "admin" },
  { id: 2, name: "Jane Editor", email: "editor@example.com", role: "editor" },
];

const useTeamManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [teamMembers, setTeamMembers] =
    useState<ACRTeamObject[]>(initialTeamMembers);
  const [currentMember, setCurrentMember] = useState<ACRTeamObject | null>(
    null
  );
  const [newMember, setNewMember] = useState<ACRTeamObject>({
    id: 0,
    imageUrl: "",
    names: "",
    title: "",
    tel: "",
    email: "",
    description: "",
    social: { twitter: "", linkedin: "", instagram: "" },
  });
  const [newAddress, setNewAddress] = useState({
    id: 0,
    name: "",
    street: "",
    city: "",
    country: "",
    location: "",
  });

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      name: "Home",
      street: "123 Main St",
      city: "Kigali",
      country: "Rwanda",
      location: "https://maps.app.goo.gl/KkMhLiv2xkHhvJuSA",
    },
    {
      id: 2,
      name: "Office",
      street: "456 Tech St",
      city: "Kigali",
      country: "Rwanda",
      location: "https://maps.app.goo.gl/KkMhLiv2xkHhvJuSA",
    },
  ]);

  const [currentAddress, setCurrentAddress] = useState<Address | null>(null);

  const [subscribers, setSubscribers] = useState<Subscriber[]>([
    { id: 1, email: "user1@example.com", subscribed: true },
    { id: 2, email: "user2@example.com", subscribed: false },
  ]);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    role: "editor",
  });
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([
    { id: 1, title: "Meeting", start: "2024-03-28" },
    { id: 1, title: "Doctor Appointment", start: "2024-03-30" },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [newEvent, setNewEvent] = useState<CalendarEvent>({
    id: 0,
    title: "",
    start: "",
  });

  const handleAddSubscriber = () => {
    setSubscribers([
      ...subscribers,
      { id: subscribers.length + 1, email: newEmail, subscribed: true },
    ]);
    setIsModalOpen(false);
    setNewEmail("");
  };

  const handleDeleteSubscriber = (id: number) => {
    setSubscribers(subscribers.filter((sub) => sub.id !== id));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMember({
          ...newMember,
          imageUrl: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!newMember.names || !newMember.email) {
      alert("Name and Email are required!");
      return;
    }

    if (currentMember) {
      setTeamMembers((prev) =>
        prev.map((member) =>
          member.id === currentMember.id
            ? { ...newMember, id: currentMember.id }
            : member
        )
      );
      setCurrentMember(null);
    } else {
      const newMemberId =
        teamMembers.length > 0
          ? Math.max(...teamMembers.map((m) => m.id)) + 1
          : 1;

      setTeamMembers((prev) => [...prev, { ...newMember, id: newMemberId }]);
    }

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

    setIsModalOpen(false);
  };

  const handleEdit = (member: ACRTeamObject) => {
    setIsModalOpen(true);
    setCurrentMember(member);
    setNewMember(member);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this team member?")) {
      setTeamMembers((prev) => prev.filter((member) => member.id !== id));
    }
  };

  const handleAddAddress = () => {
    if (
      !newAddress.name ||
      !newAddress.street ||
      !newAddress.city ||
      !newAddress.country ||
      !newAddress.location
    ) {
      alert("All address fields are required!");
      return;
    }

    if (currentAddress) {
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === currentAddress.id ? { ...newAddress, id: addr.id } : addr
        )
      );
      setCurrentAddress(null);
    } else {
      const newAddressId =
        addresses.length > 0 ? Math.max(...addresses.map((m) => m.id)) + 1 : 1;

      setAddresses((prev) => [...prev, { ...newAddress, id: newAddressId }]);
    }

    setNewAddress({
      id: 0,
      name: "",
      street: "",
      city: "",
      country: "",
      location: "",
    });
    setIsModalOpen(false);
  };

  const handleEditAddress = (addresses: Address) => {
    setIsModalOpen(true);
    setNewAddress(addresses);
    setCurrentAddress(addresses);
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      alert("Name and Email are required!");
      return;
    }

    if (currentUser) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === currentUser.id ? { ...newUser, id: currentUser.id } : user
        )
      );
      setCurrentUser(null);
    } else {
      const newId =
        users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
      setUsers([...users, { ...newUser, id: newId }]);
    }

    setNewUser({ id: 0, name: "", email: "", role: "editor" });
    setIsModalOpen(false);
  };

  const handleEditUser = (user: User) => {
    setCurrentUser(user);
    setNewUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleDeleteAddress = (id: number) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const handleAddEvent = () => {
    if (!newEvent.title.trim()) {
      alert("Event title is required!");
      return;
    }

    if (newEvent.id) {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === newEvent.id
            ? { ...event, title: newEvent.title, start: newEvent.start }
            : event
        )
      );
    } else {
      const newEventId =
        events.length > 0 ? Math.max(...events.map((e) => e.id)) + 1 : 1;
      setEvents([...events, { ...newEvent, id: newEventId }]);
    }

    setNewEvent({ id: 0, title: "", start: "" });
    setIsModalOpen(false);
  };

  const handleEditEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setNewEvent(event);
    setIsModalOpen(true);
  };

  const handleDeleteEvent = (id: number) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((event) => event.id !== id));
    }
  };

  const handleDateClick = (arg: DateClickArg) => {
    setNewEvent({ id: 0, title: "", start: arg.dateStr });
    setIsModalOpen(true);
  };

  const handleEventClick = (eventClick: EventClickArg) => {
    const eventStart = eventClick.event.start
      ? eventClick.event.start.toISOString().split("T")[0]
      : "";

    setSelectedEvent({
      id: Number(eventClick.event.id),
      title: eventClick.event.title,
      start: eventStart,
    });

    setNewEvent({
      id: Number(eventClick.event.id),
      title: eventClick.event.title,
      start: eventStart,
    });

    setIsModalOpen(true);
  };

  return {
    teamMembers,
    isModalOpen,
    setIsModalOpen,
    currentMember,
    setCurrentMember,
    newMember,
    setNewMember,
    handleImageUpload,
    handleSave,
    handleEdit,
    handleDelete,
    handleAddSubscriber,
    handleDeleteSubscriber,
    newEmail,
    setNewEmail,
    subscribers,
    handleAddAddress,
    handleDeleteAddress,
    newAddress,
    setNewAddress,
    addresses,
    handleEditAddress,
    currentAddress,
    users,
    newUser,
    setNewUser,
    handleAddUser,
    handleEditUser,
    handleDeleteUser,
    handleAddEvent,
    handleDeleteEvent,
    handleDateClick,
    handleEventClick,
    handleEditEvent,
    events,
    selectedEvent,
    setSelectedEvent,
    newEvent,
    setNewEvent,
  };
};

export default useTeamManagement;
