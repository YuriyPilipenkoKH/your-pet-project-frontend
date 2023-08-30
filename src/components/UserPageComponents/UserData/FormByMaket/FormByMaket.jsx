

import {  useEffect, useState } from 'react';
import { FormEditor, FormStyled, InputStyled, LabelStyled, UserFormWrap, UserPhotoWrap } from './FormByMaket.styled'
import { IconCross, iconPen } from 'images/icons'
import { Button, OutButton } from 'components/Button/Button'
import { MdOutlineLogout } from 'react-icons/md';
import { Avatar, Check, ConfirmButtonWrap, Cross, EditButton, ImageControls } from '../UserData.styled';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';
import { useDispatch } from 'react-redux';
import operations from '../../../../redux/auth/auth-operations';
import { ReactComponent as Camera } from '../../../../images/userPageIcons/camera.svg';
import avatarDefault2x from '../../../../images/Photo_default@2x.jpg';
import { useAuth } from 'hooks/useAuth';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocalStorage } from 'hooks/useLocalStaoreage';


const schema = object({
  title: string()
      .required('Title is required')
      .min(2, 'Title should be at least 2 characters')
      .max(50, 'Title should not exceed 50 characters')
      .matches(
          /^[a-zA-Zа-яА-Я0-9\s]+$/,
          'Title should contain only letters, numbers, and spaces'
      ),
  name: string()
      .required()
      .min(2, 'Name should be at least 2 characters')
      .max(16, 'Name should not exceed 16 characters')
      .matches(
          /^[a-zA-Z]{2,16}$/,
          'Name should contain only letters and without spaces'
      ),
  birth: string()
      .required()
      .matches(
          /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(0[0-9]{1,3}|20[0-2][0-3])$/,
          'Enter a valid date in DD-MM-YYYY format'
      ),
  typePet: string()
      .required()
      .min(2)
      .max(16)
      .matches(/^[a-zA-Z]{2,16}$/, 'Type should contain only letters'),
}).required();

const FormByMaket = () => {

  const {user} = useAuth()
  const [showData, setShowData] = useState(false)
  const [edit, setEdit] = useState(false);
  const [userPhoto, setUserPhoto] = useState('');
  const dispatch = useDispatch();

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIEmailValid] = useState(false);
  const [isBirthValid, setIsBirthValid] = useState(false);

  const [isTitleValid, setIsTitleValid] = useState(false);
  
  const [name, setName] = useLocalStorage('name', '');
  const [email, setEmail] = useLocalStorage('email', '');
  const [phone, setPhone] = useLocalStorage('phone', '');
  const [birth, setBirth] = useLocalStorage('birth', '');
  const [location, setlocation] = useLocalStorage('location', '');


   const { language} = useAll()
  const [lang, setLang] = useState(langUA)

  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])

  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm({
    defaultValues: {
        name: '',
        enail: '',
        birth: '',
        phone: '',
        location: '',
    },
    resolver: yupResolver(schema),
});

const handleData =() => {
  setShowData(true)
}



  const initialValues = {
    userPhoto: user.avatarURL || avatarDefault2x,
};

  const handleAddAvatar = e => {
    setEdit(false);
    setUserPhoto(false);

    const { name, phone = '', birthday = '', location = '', email = '' } = user;

    const avatar = userPhoto;
    const formData = new FormData();
    for (const key in { name, phone, birthday, location, email, avatar }) {
        formData.append(
            key,
            { name, phone, birthday, location, email, avatar }[key]
        );
    }
    // dispatch(operations.fetchUpdateUser(formData))
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

    const { name, email, phone = '', avatarURL, birthday = '', location = ''} =
        updatedData;

    fetch(avatarURL)
        .then(response => response.blob()) // Получаем Blob изображения
        .then(avatar => {
            const formData = new FormData();
            for (const key in {
                name,
                phone,
                birthday,
                location,
                email,
                avatar,
            }) {
                formData.append(
                    key,
                    { name, phone, birthday, location, email, avatar }[key]
                );
            }
            console.log(formData)
            dispatch(operations.fetchUpdateUser(formData));
 
        });
};


  return (
    <UserFormWrap>
      <UserPhotoWrap  className='UserPhotoWrap' >
    
                                
      <label htmlFor="userPhoto" style={{ cursor: 'pointer' }}>
                            {!userPhoto && !user.avatarURL && (
                                <Avatar
                                    src={avatarDefault2x}
                                    alt="user avatar"
                                />
                            )}
                            {!userPhoto && user.avatarURL && (
                                <Avatar
                                    src={user.avatarURL}
                                    alt="user avatar"
                                />
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
                               
                           
     {showData && <ImageControls>
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
                                <EditButton
                                    type="button"
                                    onClick={handleEditBtn}
                                >
                                    <Camera
                                        stroke="#54ADFF"
                                        style={{ marginRight: 8 }}
                                    />
                                     {lang.edit}
                                </EditButton>
                            )}
                        </ImageControls>}
      </UserPhotoWrap>
   
    <FormStyled className='FormStyled'>
      <div>
        <LabelStyled >Name:</LabelStyled>
        <InputStyled 
      {...register('name')}
      aria-invalid={errors.name ? 'true' : 'false'}
      placeholder={lang.typename}
      type="text"
      value={name}
      style={{
          border: errors.name
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
        <LabelStyled >Email:</LabelStyled>
        <InputStyled type="email" name="email"  />
      </div>
      <div>
        <LabelStyled >Birthday:</LabelStyled>
        <InputStyled type="date" name="birthday"  />
      </div>
      <div>
        <LabelStyled >Phone:</LabelStyled>
        <InputStyled type="tel" name="phone" />
      </div>
      <div>
        <LabelStyled >City:</LabelStyled>
        <InputStyled type="text" name="city" />
      </div>

      { !showData ?  <OutButton  
      className="logoutBtn" >
         <MdOutlineLogout /> Log Out</OutButton>
     : <Button
      className="saveBtn"
      type="submit">Save</Button>}

    </FormStyled>

      <FormEditor onClick={handleData}>
      {!showData ? iconPen  : IconCross} 
      </FormEditor>

   </UserFormWrap>
      
  )
}

export default FormByMaket
