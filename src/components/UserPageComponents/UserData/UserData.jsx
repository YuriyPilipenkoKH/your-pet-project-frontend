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

const UserData = () => {
    let user = {
        name: 'Taras',
        email: 'Taras@gmail.com',
        avatarURL: '//www.gravatar.com/avatar/1aedb8ddc4751e229a335e371db805',
    };

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
        console.log(newAvatar); 
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
            <UserDataForm />
        </UserInfo>
    );
};

export default UserData;
