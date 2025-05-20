"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import { meetings } from "@/data";
import { CalendarDay } from "@/interface";

// Define types


const CalendarCard: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2022, 0, 1)); // Jan 2022 to match the image
  const [days, setDays] = useState<CalendarDay[]>([]);
  const [selectedDate, setSelectedDate] = useState<CalendarDay | null>(null);
  const [bookedDates, setBookedDates] = useState<CalendarDay[]>([]);

  // Generate calendar days for the current month view
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Get first day of month and last day of month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Get day of week of first day (0 = Sunday, 1 = Monday, etc.)
    // Adjust for Monday as first day of week (0 = Monday, 6 = Sunday)
    let firstDayOfWeek = firstDay.getDay() - 1;
    if (firstDayOfWeek < 0) firstDayOfWeek = 6;

    const daysInMonth = lastDay.getDate();

    // Calculate days from previous month to show
    const daysFromPrevMonth = firstDayOfWeek;

    // Get the previous month's last date
    const prevMonthLastDate = new Date(year, month, 0).getDate();

    const calendarDays: CalendarDay[] = [];

    // Add days from previous month
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      const day = prevMonthLastDate - i;
      const prevMonth = month - 1 < 0 ? 11 : month - 1;
      const prevYear = prevMonth === 11 ? year - 1 : year;

      calendarDays.push({
        day,
        month: prevMonth,
        year: prevYear,
        isCurrentMonth: false,
      });
    }

    // Add days from current month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push({
        day: i,
        month,
        year,
        isCurrentMonth: true,
      });
    }

    // Add days from next month to complete calendar (up to 42 days total for 6 weeks)
    const remainingDays = 42 - calendarDays.length;
    for (let i = 1; i <= remainingDays; i++) {
      const nextMonth = month + 1 > 11 ? 0 : month + 1;
      const nextYear = nextMonth === 0 ? year + 1 : year;

      calendarDays.push({
        day: i,
        month: nextMonth,
        year: nextYear,
        isCurrentMonth: false,
      });
    }

    setDays(calendarDays);

    // Set default selected date to the 22nd of current month
    const defaultSelectedDay = calendarDays.find(
      (d) => d.day === 22 && d.isCurrentMonth
    );
    if (defaultSelectedDay) setSelectedDate(defaultSelectedDay);

    // Set default booked date to the 12th of current month
    const defaultBookedDay = calendarDays.find(
      (d) => d.day === 12 && d.isCurrentMonth
    );
    if (defaultBookedDay) setBookedDates([defaultBookedDay]);
  }, [currentDate]);

  // Navigation handlers
  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  // Handle date selection
  const handleDateSelect = (calendarDay: CalendarDay) => {
    setSelectedDate(calendarDay);
  };

  // Check if two CalendarDay objects are equal
  const areDaysEqual = (a: CalendarDay, b: CalendarDay): boolean => {
    return a.day === b.day && a.month === b.month && a.year === b.year;
  };

  // Handle booking a date
  const handleBookDate = (calendarDay: CalendarDay) => {
    // Find if this date is already booked
    const existingBookingIndex = bookedDates.findIndex((d) =>
      areDaysEqual(d, calendarDay)
    );

    if (existingBookingIndex >= 0) {
      // Remove the booking
      const newBookings = [...bookedDates];
      newBookings.splice(existingBookingIndex, 1);
      setBookedDates(newBookings);
    } else {
      // Add the booking
      setBookedDates([...bookedDates, calendarDay]);
    }
  };

  // Handle adding new event
  const handleAddEvent = () => {
    if (selectedDate) {
      handleBookDate(selectedDate);
      console.log(
        `Adding event for date: ${selectedDate.day}/${selectedDate.month + 1}/${
          selectedDate.year
        }`
      );
    }
  };

  // Check if a day is selected
  const isSelected = (day: CalendarDay): boolean => {
    return selectedDate ? areDaysEqual(day, selectedDate) : false;
  };

  // Check if a day is booked
  const isBooked = (day: CalendarDay): boolean => {
    return bookedDates.some((d) => areDaysEqual(d, day));
  };

  // Format month name
  const formatMonthName = (): string => {
    return currentDate.toLocaleString("default", { month: "long" });
  };

  return (
    <section>
      <div className="layout-standard gap-x-10">
        {/* Left side - Meetings list */}
        <div>
          <h2 className="text-xl font-bold mb-6">Upcoming meetings</h2>
          <ul className="space-y-6">
            {meetings.map((meeting) => (
              <li key={meeting.id} className="flex items-center gap-4">
                <Image
                  src={meeting.avatar}
                  alt={`${meeting.name}'s avatar`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3>{meeting.name}</h3>
                  <div className="flex gap-x-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <Clock className="w-4 h-4" />
                      <p>{meeting.date}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                      <MapPin className="w-4 h-4" />
                      <p>{meeting.location}</p>
                    </div>
                  </div>
                </div>
                <button className="bg-transparent hover:bg-transparent">
                  <MoreHorizontal className="w-5 h-5 text-black" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Calendar */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={prevMonth}
              className="p-1 rounded-full hover:bg-gray-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h3 className="font-semibold text-lg">{formatMonthName()}</h3>
            <button
              onClick={nextMonth}
              className="p-1 rounded-full hover:bg-gray-500"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Calendar grid */}
          <div className="mb-4">
            <div className="grid grid-cols-7 mb-1">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                <div
                  key={i}
                  className="text-center text-sm font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => handleDateSelect(day)}
                  onDoubleClick={() =>
                    day.isCurrentMonth && handleBookDate(day)
                  }
                  className={`h-8 w-8 flex items-center justify-center rounded-full text-sm bg-transparent
                  ${isSelected(day) ? "bg-black text-white" : ""}
                  ${!day.isCurrentMonth ? "text-gray-400" : "text-gray-800"}
                  ${isBooked(day) ? "text-purple-600 font-semibold" : ""}
                  hover:bg-gray-100 transition-colors`}
                  disabled={!day.isCurrentMonth}
                >
                  {day.day}
                </button>
              ))}
            </div>
          </div>

          {/* Add event button */}
          <button
            onClick={handleAddEvent}
            className="w-full bg-primary hover:bg-gray-700 text-white py-2 px-4 rounded font-medium transition-colors"
          >
            Add event
          </button>
        </div>
      </div>
    </section>
  );
};

export default CalendarCard;
