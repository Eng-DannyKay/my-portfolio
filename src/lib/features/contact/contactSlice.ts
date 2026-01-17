import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getClientContactInfo, sendContactMessage } from "./contactThunk";

export interface ContactState {
  id: string;
  name: string;
  email: string;
  message: string;
  subject: string;
}

interface ContactResponse {
  loading?: boolean;
  error?: string | null;
  contact: ContactState[];
  submitStatus: "idle" | "success" | "error";
}

const initialState: ContactResponse = {
  contact: [],
  loading: false,
  error: "",
  submitStatus: "idle",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    fetchContactSuccess: (state, action: PayloadAction<ContactState[]>) => {
          state.contact = action.payload;
          state.submitStatus = "success";
    },
    fetchContactFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    resetSubmitStatus: (state) => {
      state.submitStatus = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClientContactInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getClientContactInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
      })
      .addCase(getClientContactInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(sendContactMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.submitStatus = "idle";
      })
      .addCase(sendContactMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.submitStatus = "success";
        state.contact.push(action.payload);
      })
      .addCase(sendContactMessage.rejected, (state, action) => {
        state.loading = false;
        state.submitStatus = "error";
        state.error = action.payload as string;
      });
  },
});

export const { fetchContactSuccess, fetchContactFailure, resetSubmitStatus } =
  contactSlice.actions;

export const contactReducer = contactSlice.reducer;
