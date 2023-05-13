import { createSlice } from '@reduxjs/toolkit';
const data = {
  error: false, flag:false, loading:false, msg:''
}
const AppSlice = createSlice({
  name: 'AppSlice',
  initialState: data,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFlag: (state, action) => {
      state.flag = action.payload;
    },
    setMsg: (state, action) => {
      state.msg = action.payload;
    },
    setFlag: (state, action) => {
      state.msg = action.payload;
    }
  }
});

export const { setFlag, setError, setMsg } = AppSlice.actions;
export default AppSlice;

import { creareSlice } from '@reduxjs/toolkit';

const data = {
  name: '', fatherName: '', dob: '', gender: '', contactOne: '', contactTwo: '',
  comment: '', status: '', email: '', password: '', kinname: '', kinPhone: '', salary: '', employeeId: '', bankId: '', branchName: '', salaryType: '',
  employeeId:'', bankId:'', branchName:'', bloodGroup:'',
}

const EmployeeSlice = createSlice({
  name: 'employee',
  initialState: data,
  reducers: {
    profileAction: (state, action) => {
      state.profilePic=action.payload
    },
    emailAction: (state, action) => {
      state.email=action.payload
    },
    passwordAction: (state, action) => {
      state.password = action.payload;
    },
    addNameAction: (state, action) => {
      state.name = action.payload;
    },
    fatherNameAction: (state, action) => {
      state.fatherName = action.payload;
    },
    dobAction: (state, action) => {
      state.dob = action.payload;
    },
    genderAction: (state, action) => {
      state.gender = action.payload;
    },
    contactOneAction: (state, action) => {
      state.contactOne = action.payload;
    },
    contactTwoAction: (state, action) =>{
      state.contactTwo = action.payload;
    }
  }
  
})