import { Formik, Field } from 'formik'; // , ErrorMessage
import {
    UserInfo,
    StylizedForm,
    Avatar,
    EditButton,
    ConfirmButtonWrap,
    ImageControls,
    Cross,
    Check,
} from './UserData.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import avatarDefault2x from '../../../images/Photo_default@2x.jpg';
import UserDataForm from '../UserDataForm/UserDataForm';
import { ReactComponent as Camera } from '../../../images/userPageIcons/camera.svg';
// import { date } from 'yup';

const UserData = () => {
    const [user, setUser] = useState({
        _id: '3444542njnj54khbhb45bhk',
        name: 'Taras',
        email: 'Taras@gmail.com',
        avatarURL: '//www.gravatar.com/avatar/1aeb8d9dc4751e229a335e371db8058',
        birthday: '23-11-2023',
        phone: '+380123456789',
        location: 'Lviv',
    }); 

    const [edit, setEdit] = useState(false);
    const [petPhoto, setFileInput] = useState('');
    const dispatch = useDispatch();

    const initialValues = {
        petPhoto: user.avatarURL || avatarDefault2x,
    };

    const handleAddAvatar = e => {
        setEdit(false);
        // setFileInput(false);      
        const newAvatar = URL.createObjectURL(petPhoto);
        // dispatch(changeUser(newAvatar))  
        ////////////////////////
        // console.log(newAvatar); 
        /////////////////////////
    };

    const handleCancelAvatar = e => {
        setFileInput();
        setEdit(false);
    };

    const handleClickInput = e => {
        setEdit(true);
        const [file] = e.target.files;
        if (file) {
            setFileInput(file);
        }
    };

    const handleEditBtn = () => {
        document.getElementById('petPhoto').click();
    };

    const handleChangeData = data => {
        const updatedData = Object.fromEntries(
            Object.entries(data)
                .map(([key, value]) => {
                    if (value !== '') {
                        return [key, value];
                    }
                    return null;
                })
                .filter(Boolean)
        );
        //////////////////////////////////////////////
        // console.log('changing user data', updatedData)
        setUser(updatedData)
        ///////////////////////////////////////////////
        // dispatch(changeUser(updatedData));
    };

    return (
        <UserInfo>
            <Formik initialValues={initialValues}>
                {({ setFieldValue }) => (
                    <StylizedForm>
                        <label htmlFor="petPhoto">
                            {!petPhoto && !user.avatarURL && (
                                <Avatar
                                    src={avatarDefault2x}
                                    alt="user avatar"
                                />
                            )}
                            {!petPhoto && user.avatarURL && (
                                <Avatar
                                    src={user.avatarURL}
                                    alt="user avatar"
                                />
                            )}
                            {!!petPhoto && (
                                <Avatar
                                    src={URL.createObjectURL(petPhoto)}
                                    id="image"
                                    alt={petPhoto.username}
                                />
                            )}
                            <Field name="fileInput">
                                {({ field }) => (
                                    <Field
                                        type="file"
                                        id="petPhoto"
                                        name="petPhoto"
                                        accept=".png, .jpg, .jpeg, .webp"
                                        hidden
                                        value=""
                                        onChange={handleClickInput}
                                    />
                                )}
                            </Field>
                            {/* <ErrorMessage name="user-avatar" component="div" /> */}
                        </label>
                        <ImageControls>
                            {edit && petPhoto ? (
                                <ConfirmButtonWrap>
                                    <EditButton
                                        type="button"
                                        onClick={handleAddAvatar}
                                    >
                                        <Check stroke="#00C3AD" />
                                        Confirm
                                    </EditButton>
                                    <EditButton
                                        type="button"
                                        onClick={handleCancelAvatar}
                                    >
                                        <Cross />
                                        Cancel
                                    </EditButton>
                                </ConfirmButtonWrap>
                            ) : (
                                <EditButton
                                    type="button"
                                    onClick={handleEditBtn}
                                >
                                    <Camera
                                        stroke="#54ADFF"
                                        style={{ marginRight: 8 }}
                                    />
                                    Edit photo
                                </EditButton>
                            )}
                        </ImageControls>
                    </StylizedForm>
                )}
            </Formik>
            <UserDataForm user={user} onSubmit={handleChangeData} />
        </UserInfo>
    );
};

export default UserData;
