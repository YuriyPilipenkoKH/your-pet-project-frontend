// import { useState } from 'react';
import { Formik } from 'formik';
import { UserForm, Logout } from './UserDataForm.styled';
import fields from './fieldsValidation';
import UserDataItem from '../UserDataItem/UserDataItem';
import { useDispatch} from "react-redux";
// import { OutButton } from '../../Button/Button';
import { ReactComponent as LogoutIcon } from '../../../images/userPageIcons/logout.svg';
import { toggleSell } from 'redux/sort/sortSlice';
import { authOperations } from 'redux/auth';



const UserDataForm = () => {
    const dispatch = useDispatch();
    
    const signOut = () => {
        dispatch(toggleSell())
        dispatch(authOperations.logOut())
        }

    // const [initialState, setInitialState] = useState({
    //     username: '',
    //     email: '',
    //     birthday: '',
    //     phone: '',
    //     city: '',
    // });

    const initialState = {
        username: '',
        email: '',
        birthday: '',
        phone: '',
        city: '',
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialState}
            // validateOnChange={true}
            // validateOnBlur={true}
        >
            {formik => (
                <UserForm>
                    {Object.entries(fields).map(([name, field]) => (
                        <UserDataItem
                            key={name}
                            value={formik.values[name]}
                            formik={formik}
                            name={name}
                            // onSubmit
                            {...field}
                        />
                    ))}
                    <Logout
                     onClick = {signOut}
                        // style={{
                        //     // backgroundColor: 'white',
                        //     // color: '#888888',
                        //     // borderColor: 'transparent',
                        // }}
                    >
                        {/* <LogoutIcon stroke="#54ADFF" /> */}
                        <LogoutIcon />
                        Log out
                    </Logout>
                </UserForm>
            )}
        </Formik>
    );
};

export default UserDataForm;
