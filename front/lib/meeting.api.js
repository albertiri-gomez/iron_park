import axios from "axios";

const api = axios.create({
  baseURL: process.env.DBAPI,
  withCredentials: true,
});

export const getMeeting = async () => {
  const res = await api.get("/");
  console.log(res.data);
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

export const createMeetingsImage = async (meetingFile) => {
  console.log("this is Datafile");
  console.log(meetingFile);
  const data = new FormData();
  data.append("image", meetingFile.image);
  data.append("nameMeeting", meetingFile.nameMeeting);
  data.append("participants", meetingFile.participants);
  data.append("description", meetingFile.description);
  data.append("time", meetingFile.time);
  data.append("date", meetingFile.date);
  console.log("todos los campos con append");
  console.log(data);
  const response = await api.post("/", data);
  return response.data;
};
