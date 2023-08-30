import { useEffect, useState } from 'react';
import {
    FormEditor,
    FormStyled,
    InputStyled,
    LabelStyled,
    UserFormWrap,
    UserPhotoWrap,
} from './FormUser.styled';
import { IconCross, iconPen } from 'images/icons';
import { Button, OutButton } from 'components/Button/Button';
import { MdOutlineLogout } from 'react-icons/md';
import {
    Avatar,
    Check,
    ConfirmButtonWrap,
    Cross,
    EditButton,
    ImageControls,
} from '../../UserPageComponents/UserData/UserData.styled';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';
import { useDispatch } from 'react-redux';
import operations from '../../../redux/auth/auth-operations';
import { ReactComponent as Camera } from '../../../images/userPageIcons/camera.svg';
import avatarDefault2x from '../../../images/Photo_default@2x.jpg';
import { useAuth } from 'hooks/useAuth';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { modal1, modal5 } from 'modals/modals';
import { ModalPopup } from 'components/ModalPopup/ModalPopup';

const schema = object({
    email: string().matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
        'Enter a valid email address'
    ),
    name: string()
        .min(2, 'Name should be at least 2 characters')
        .max(16, 'Name should not exceed 16 characters')
        .matches(
            /^[a-zA-Z]{2,16}$/,
            'Name should contain only letters and without spaces'
        ),
    birthday: string().matches(
        /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
        'Enter a valid date in DD-MM-YYYY format'
    ),
    phone: string().matches(
        /^\+\d{12}$/,
        'Valid format for phone is +380123456789'
    ),
    location: string().matches(
        /^[A-Za-z\s]+$/,
        "The string may contain only letters and spaces. Examples: 'Kyiv,' 'New York,' 'San Francisco.'"
    ),
}).required();

const FormByMaket = () => {
    const { user } = useAuth();
    const [showData, setShowData] = useState(false);
    const [edit, setEdit] = useState(false);
    const [userPhoto, setUserPhoto] = useState('');
    const dispatch = useDispatch();

    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isBirthValid, setIsBirthValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isLocationValid, setIsLocationValid] = useState(false);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [birth, setBirth] = useState(user.birthday);
    const [location, setLocation] = useState(user.location);

    const [showModal, setShowModal] = useState(false);
    const [modals, setModals] = useState(modal1);

    const { language } = useAll();
    const [lang, setLang] = useState(langUA);

    useEffect(() => {
        setLang(language === 'english' ? langEN : langUA);
    }, [language]);
    
    const signOut = () => {
        setModals(modal5);
        setShowModal(true);
    };
    const onModalClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setBirth(user.birthday);
        setLocation(user.location);
    }, [user]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: user.name || '',
            email: user.email || '',
            birthday: user.birthday || '',
            phone: user.phone || '',
            location: user.location || '',
        },
        resolver: yupResolver(schema),
    });

    const reset = () => {
        setIsBirthValid(false);
        setIsNameValid(false);
        setIsEmailValid(false);
        setIsPhoneValid(false);
        setIsLocationValid(false);
        errors.name = undefined;
        errors.birthday = undefined;
        errors.location = undefined;
        errors.phone = undefined;
        errors.email = undefined;
    };

    const handleData = () => {
        setShowData(!showData);
        reset();
    };

    const handleAddAvatar = () => {
        const avatar = userPhoto;
        const formData = new FormData();
        for (const key in { avatar }) {
            formData.append(key, { avatar }[key]);
        }
        dispatch(operations.fetchUpdateUser(formData));
        setEdit(false);
        setUserPhoto(false);
    };

    // console.log(user.name)

    const handleCancelAvatar = e => {
        setUserPhoto();
        setEdit(false);
    };

    const handleClickInput = e => {
        setEdit(true);
        const [file] = e.target.files;
        if (file) {
            setUserPhoto(file);
        }
    };

    const handleEditBtn = () => {
        document.getElementById('userPhoto').click();
    };

    const deliveryData = data => {
        fetch(user.avatarURL)
            .then(response => response.blob())
            .then(avatar => {
                const formData = new FormData();
                for (const key in {
                    ...data,
                    avatar,
                }) {
                    formData.append(
                        key,
                        { ...data, avatar }[key]
                    );
                }
                dispatch(operations.fetchUpdateUser(formData));
            });
        setShowData(false);
        reset();
    };

    return (
        <UserFormWrap>
            <UserPhotoWrap className="UserPhotoWrap">
                <label htmlFor="userPhoto" style={{ cursor: 'pointer' }}>
                    {!userPhoto && !user.avatarURL && (
                        <Avatar src={avatarDefault2x} alt="user avatar" />
                    )}
                    {!userPhoto && user.avatarURL && (
                        <Avatar src={user.avatarURL} alt="user avatar" />
                    )}
                    {!!userPhoto && (
                        <Avatar
                            src={URL.createObjectURL(userPhoto)}
                            id="image"
                            alt={userPhoto.username}
                        />
                    )}

                    <input
                        type="file"
                        id="userPhoto"
                        name="userPhoto"
                        accept=".png, .jpg, .jpeg, .webp"
                        hidden
                        value=""
                        onChange={handleClickInput}
                    />

                    {/* <ErrorMessage name="user-avatar" component="div" /> */}
                </label>

                {showData && (
                    <ImageControls>
                        {edit && userPhoto ? (
                            <ConfirmButtonWrap>
                                <EditButton
                                    type="button"
                                    onClick={handleAddAvatar}
                                >
                                    <Check stroke="#00C3AD" />
                                    {lang.confirm}
                                </EditButton>
                                <EditButton
                                    type="button"
                                    onClick={handleCancelAvatar}
                                >
                                    <Cross />
                                    {lang.cancel}
                                </EditButton>
                            </ConfirmButtonWrap>
                        ) : (
                            <EditButton type="button" onClick={handleEditBtn}>
                                <Camera
                                    stroke="#54ADFF"
                                    style={{ marginRight: 8 }}
                                />
                                {lang.edit}
                            </EditButton>
                        )}
                    </ImageControls>
                )}
            </UserPhotoWrap>

            <FormStyled
                className="FormStyled"
                onSubmit={handleSubmit(deliveryData)}
            >
                <div>
                    <LabelStyled>Name:</LabelStyled>
                    <InputStyled
                        disabled={!showData}
                        {...register('name')}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        placeholder={lang.typename}
                        type="text"
                        value={name}
                        style={{
                            border:
                                errors.name && !isNameValid
                                    ? '1px solid var(--red)'
                                    : isNameValid && !errors.name
                                    ? '1px solid var(--green)'
                                    : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid = /^[a-zA-Z]{2,16}$/.test(
                                e.target.value
                            );
                            setIsNameValid(isValid);
                            setName(e.target.value);
                            if (isValid) {
                                errors.name = undefined;
                            }
                        }}
                    />
                </div>
                <div>
                    <LabelStyled>Email:</LabelStyled>
                    <InputStyled
                        disabled={!showData}
                        {...register('email')}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        placeholder={lang.email}
                        type="email"
                        value={email}
                        style={{
                            border: errors.email
                                ? '1px solid var(--red)'
                                : isEmailValid && !errors.email
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid =
                                /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(
                                    e.target.value
                                );
                            setIsEmailValid(isValid);
                            setEmail(e.target.value);
                            if (isValid) {
                                errors.email = undefined;
                            }
                        }}
                    />
                </div>
                <div>
                    <LabelStyled>Birthday:</LabelStyled>
                    <InputStyled
                        disabled={!showData}
                        {...register('birthday')}
                        aria-invalid={errors.birthday ? 'true' : 'false'}
                        placeholder={lang.typebirth}
                        type="text"
                        value={birth}
                        style={{
                            border: errors.birthday
                                ? '1px solid var(--red)'
                                : isBirthValid && !errors.birthday
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid =
                                /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(0[0-9]{1,3}|20[0-2][0-3])$/.test(
                                    e.target.value
                                );
                            setIsBirthValid(isValid);
                            setBirth(e.target.value);
                            if (isValid) {
                                errors.birthday = undefined;
                            }
                        }}
                    />
                </div>
                <div>
                    <LabelStyled>Phone:</LabelStyled>
                    <InputStyled
                        disabled={!showData}
                        {...register('phone')}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                        placeholder={lang.phone}
                        type="text"
                        value={phone}
                        style={{
                            border: errors.phone
                                ? '1px solid var(--red)'
                                : isPhoneValid && !errors.phone
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid =
                                /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(0[0-9]{1,3}|20[0-2][0-3])$/.test(
                                    e.target.value
                                );
                            setIsPhoneValid(isValid);
                            setPhone(e.target.value);
                            if (isValid) {
                                errors.phone = undefined;
                            }
                        }}
                    />
                </div>
                <div>
                    <LabelStyled>City:</LabelStyled>
                    <InputStyled
                        disabled={!showData}
                        {...register('location')}
                        aria-invalid={errors.location ? 'true' : 'false'}
                        placeholder={lang.typelocation}
                        type="text"
                        value={location}
                        style={{
                            border: errors.location
                                ? '1px solid var(--red)'
                                : isLocationValid && !errors.location
                                ? '1px solid var(--green)'
                                : '1px solid var(--blue)',
                        }}
                        onChange={e => {
                            const isValid = /^[A-Za-z\s]+$/.test(
                                e.target.value
                            );
                            setIsLocationValid(isValid);
                            setLocation(e.target.value);
                            if (isValid) {
                                errors.location = undefined;
                            }
                        }}
                    />
                </div>

                {!showData ? (
                    <OutButton
                    onClick={signOut}
                     className="logoutBtn">
                        <MdOutlineLogout /> Log Out
                    </OutButton>
                ) : (
                    <Button className="saveBtn" type="submit">
                        Save
                    </Button>
                )}
            </FormStyled>

            <FormEditor onClick={handleData}>
                {!showData ? iconPen : IconCross}
            </FormEditor>
            {showModal && (
                <ModalPopup
                    {...modals}
                    onClose={onModalClose}
                    isOpen={showModal}
                />
                )}
        </UserFormWrap>
    );
};

export default FormByMaket;
