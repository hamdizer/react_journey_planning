import axios from "axios";
export const getLocations = async (text: string) => {
  return await axios.get(
    `/api/XML_STOPFINDER_REQUEST?%20language=de&outputFormat=RapidJSON&type_sf=any&name_sf=%7B${text}%7D`

  );
};
