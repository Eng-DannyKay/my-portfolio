import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import type { ContactState } from "./contactSlice";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
}

export const getClientContactInfo = createAsyncThunk(
  "contact/getClientContactInfo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<ContactState[]>("/api/v1/contact");

      if (!response.data) {
        throw new Error("Failed to fetch contact information");
      }

      return response.data;
    } catch (err) {
      const error = err as ApiError;
      return rejectWithValue(error.response?.data?.message || error.message || "Failed to fetch contact information");
    }
  }
);

export const sendContactMessage = createAsyncThunk(
  "contact/sendContactMessage",
  async (contactData: Omit<ContactState, "id">, { rejectWithValue }) => {
    try {
      const response = await axios.post<{ message: string; data: ContactState }>(
        "/api/v1/contact",
        contactData
      );

      if (!response.data) {
        throw new Error("Failed to send message");
      }

      return response.data.data;
    } catch (err) {
      const error = err as ApiError;
      return rejectWithValue(error.response?.data?.message || error.message || "Failed to send message");
    }
  }
);