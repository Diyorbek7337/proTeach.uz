import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
    formData: {
      name: '',
      phone: '',
      course: ''
    }
  },
  reducers: {
    showModal: (state) => {
      state.showModal = true;
    },
    hideModal: (state) => {
      state.showModal = false;
    },
    updateFormData: (state, action) => {
      state.formData = {
        ...state.formData,
        [action.payload.name]: action.payload.value
      };
    },
  
    resetFormData: (state) => {
      state.formData = {
        name: '',
        phone: '',
        course: ''
      };
    }
  },
});

export const { showModal, hideModal, updateFormData, resetFormData } = modalSlice.actions;

export default modalSlice.reducer;