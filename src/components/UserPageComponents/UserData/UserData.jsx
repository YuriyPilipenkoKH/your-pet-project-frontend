import { Formik, Field, ErrorMessage } from 'formik';
import {
    UserInfo,
    StylizedForm,
    Avatar,
    ImageControls,
    EditButton,
} from './UserData.styled';
import avatarDefault2x from '../../../images/Photo_default@2x.jpg';

const UserData = () => {
    const initialValues = {
        avatarDefault2x,
    };

    return (
        <UserInfo>
            <Formik initialValues={initialValues}>
                {({ setFieldValue }) => (
                    <StylizedForm>
                        <label htmlFor="petPhoto">
                            <Avatar src={avatarDefault2x} alt="user avatar" />
                            <Field name="fileInput">
                                {({ field }) => (
                                    <Field
                                        type="file"
                                        id="petPhoto"
                                        name="petPhoto"
                                        accept=".png, .jpg, .jpeg, .webp"
                                        hidden
                                        value=""
                                    />
                                )}
                            </Field>
                            {/* <ErrorMessage name="user-avatar" component="div" /> */}
                        </label>
                        <ImageControls>
                            <EditButton type="button">
                                {/* icons */}
                                Edit photo
                            </EditButton>
                        </ImageControls>
                    </StylizedForm>
                )}
            </Formik>
            {/* forma */}
        </UserInfo>
    );
};

export default UserData;
