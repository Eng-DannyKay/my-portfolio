import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import type { ContactState } from "./contactSlice";

const CONTACT = "api/v1" as const;

export const getClientContactInfo = createAsyncThunk(
  `${CONTACT}/getClientContactInfo`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<ContactState[]>(`${CONTACT}`);

      if (!response) {
        throw new Error("Failed to send message");
      }

      const data = response.data;
      return data;
    } catch (err) {
      return rejectWithValue(`Failed to fetch contact information,${err}`);
    }
  }
);

export const sendContactMessage = createAsyncThunk(
  `${CONTACT}`,
  async (contactData: Omit<ContactState, "id">, { rejectWithValue }) => {
    try {
      const response = await axios.post<ContactState>(
        `${CONTACT}/contact`,
        contactData
      );

      if (!response) {
        throw new Error("Failed to send message");
      }

      return response.data;
    } catch (err) {
      return rejectWithValue(`Failed to send message: ${err}`);
    }
  }
);
