// import { useState } from 'react';
import { Formik } from 'formik';
import { UserForm } from './UserDataForm.styled';
import fields from './fieldsValidation';
import UserDataItem from '../UserDataItem/UserDataItem';

const UserDataForm = () => {
    // const [initialState, setInitialState] = useState({
    //     username: '',
    //     email: '',
    //     birthday: '',
    //     phone: '',
    //     city: '',
    // });

    const initialState = {username: '',
        email: '',
        birthday: '',
        phone: '',
        city: '',}

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
                    {/* <Logout /> */}
                </UserForm>
            )}
        </Formik>
    );
};

export default UserDataForm;
