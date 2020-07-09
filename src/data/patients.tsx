interface Patient {
  name: string;
  age: number;
  dateTime: string;
  statusValue: string;
};

export const Patients: Patient[] = [
  { name: "Khaja Naquiuddin", age: 32, dateTime: "2020-10-01 3:30:00", statusValue: "done" },
  { name: "Mohammed Zafar", age: 22, dateTime: "2020-10-01 3:30:00", statusValue: "done" },
  { name: "M.A Mudassir", age: 22, dateTime: "2020-10-01 3:30:00", statusValue: "done" },
  { name: "Khaja Naquiuddin", age: 32, dateTime: "2020-10-01 3:30:00", statusValue: "cancelled" },
  { name: "Khaja Naquiuddin", age: 32, dateTime: "2020-10-01 3:30:00", statusValue: "noShow" },
  { name: "Mohammed Zafar", age: 22, dateTime: "2020-10-01 3:30:00", statusValue: "noShow" },
  { name: "M.A Mudassir", age: 22, dateTime: "2020-10-01 3:30:00", statusValue: "done" },
  { name: "Khaja Naquiuddin", age: 32, dateTime: "2020-10-01 3:30:00", statusValue: "cancelled" },
]
