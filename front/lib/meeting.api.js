import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/meetings",
  withCredentials: true,
});

export const getMeeting = async ({
  user,
  park,
  nameMeeting,
  participants,
  description,
  time,
  date,
}) => {
  const res = await api.get("/", {
    user,
    park,
    nameMeeting,
    participants,
    description,
    time,
    date,
  });
  console.log("Respuesta del server", res.data);
  console.log("reuniones Mostradas");
  return res.data;
};

export const createMeeting = async ({
  user,
  park,
  nameMeeting,
  participants,
  description,
  time,
  date,
}) => {
  const res = await api.post("/", {
    user,
    park,
    nameMeeting,
    participants,
    description,
    time,
    date,
  });
  console.log("Respuesta del server", res.data);
  console.log("reunion creada");
  return res.data;
};

export const meetingEdit = async ({
  user,
  park,
  nameMeeting,
  participants,
  description,
  time,
  date,
}) => {
  console.log("edit!");
  const res = await api.put("/:id", {
    user,
    park,
    nameMeeting,
    participants,
    description,
    time,
    date,
  });
  console.log("edit meeting", res);
};

export const meetingDelete = async ({
  user,
  park,
  nameMeeting,
  participants,
  description,
  time,
  date,
}) => {
  const res = await api.delete("/:id", {
    user,
    park,
    nameMeeting,
    participants,
    description,
    time,
    date,
  });
  console.log("delete meeting", res);
};

export const whoUser = async () => {
  console.log("whoUser");
  const res = await api.post("/whoami");
  console.log("whami", res.data);
  return res.data;
};
