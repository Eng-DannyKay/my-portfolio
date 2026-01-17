import type { RootState } from "../store";

const selectClientContact = ({ clientContact }: RootState) => clientContact;

export const selectContactInfo = (state: RootState) =>
  selectClientContact(state).contact;

export const selectContactLoading = (state: RootState) =>
  selectClientContact(state).loading;

export const selectContactError = (state: RootState) =>
  selectClientContact(state).error;

export const selectSubmitStatus = (state: RootState) =>
  selectClientContact(state).submitStatus;
