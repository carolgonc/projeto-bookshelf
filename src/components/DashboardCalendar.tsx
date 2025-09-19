"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";

export function DashboardCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card className="mx-auto">
      <CardContent className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md"
        />
      </CardContent>
    </Card>
  );
}
