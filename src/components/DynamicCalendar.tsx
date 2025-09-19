"use client";

import dynamic from "next/dynamic";
import { Card, CardContent } from "./ui/card";

const DashboardCalendar = dynamic(
  () =>
    import("@/components/DashboardCalendar").then(
      (mod) => mod.DashboardCalendar
    ),
  {
    ssr: false,
    loading: () => (
      <Card>
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            Carregando calendário...
          </p>
        </CardContent>
      </Card>
    ),
  }
);

export function DynamicCalendar() {
  return <DashboardCalendar />;
}
