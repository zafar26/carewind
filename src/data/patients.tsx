interface Patient {
    name: string;
    gender: string;
    age: number;
    pic: string;
    dateTime: string;
    statusValue: string;
    symptoms: string[];
};

export const Patients: Patient[] = [
    { name: "Khaja Naquiuddin", gender: "Male", age: 32, dateTime: "2020-10-01 3:30:00", statusValue: "done", pic: "/assets/images/avatar.png", symptoms: ["fever", "head-ache", "body-pains", "stomach-ache", "cold", "dizzyness"] },
    { name: "Mohammed Zafar", gender: "Male", age: 22, dateTime: "2020-10-01 3:30:00", statusValue: "done", pic: "/assets/images/avatar.png", symptoms: ["fever", "head-ache", "body-pains", "stomach-ache", "cold", "dizzyness"] },
    { name: "M.A Mudassir", gender: "Male", age: 22, dateTime: "2020-10-01 3:30:00", statusValue: "done", pic: "/assets/images/avatar.png", symptoms: ["fever", "head-ache", "body-pains", "stomach-ache", "cold", "dizzyness"] },
    { name: "Khaja Naquiuddin", gender: "Male", age: 32, dateTime: "2020-10-01 3:30:00", statusValue: "cancelled", pic: "/assets/images/avatar.png", symptoms: ["fever", "head-ache", "body-pains", "stomach-ache", "cold", "dizzyness"] },
    { name: "Khaja Naquiuddin", gender: "Male", age: 32, dateTime: "2020-10-01 3:30:00", statusValue: "noShow", pic: "/assets/images/avatar.png", symptoms: ["fever", "head-ache", "body-pains", "stomach-ache", "cold", "dizzyness"] },
    { name: "Mohammed Zafar", gender: "Male", age: 22, dateTime: "2020-10-01 3:30:00", statusValue: "noShow", pic: "/assets/images/avatar.png", symptoms: ["fever", "head-ache", "body-pains", "stomach-ache", "cold", "dizzyness"] },
    { name: "M.A Mudassir", gender: "Male", age: 22, dateTime: "2020-10-01 3:30:00", statusValue: "done", pic: "/assets/images/avatar.png", symptoms: ["fever", "head-ache", "body-pains", "stomach-ache", "cold", "dizzyness"] },
    { name: "Khaja Naquiuddin", gender: "Male", age: 32, dateTime: "2020-10-01 3:30:00", statusValue: "cancelled", pic: "/assets/images/avatar.png", symptoms: ["fever", "head-ache", "body-pains", "stomach-ache", "cold", "dizzyness"] },
]

