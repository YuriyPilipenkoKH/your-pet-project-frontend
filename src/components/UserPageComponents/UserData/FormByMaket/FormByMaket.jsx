

import {  useEffect, useState } from 'react';
import { FormEditor, FormStyled, InputStyled, LabelStyled, UserFormWrap, UserPhotoWrap } from './FormByMaket.styled'
import { iconPen } from 'images/icons'
import { Button, OutButton } from 'components/Button/Button'
import { MdOutlineLogout } from 'react-icons/md';
import { Check, ConfirmButtonWrap, Cross, EditButton, ImageControls } from '../UserData.styled';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';
import { useDispatch } from 'react-redux';
import operations from '../../../../redux/auth/auth-operations';
import { ReactComponent as Camera } from '../../../../images/userPageIcons/camera.svg';


const FormByMaket = ({ user }) => {
  const [edit, setEdit] = useState(false);
  const [petPhoto, setFileInput] = useState('');
  const dispatch = useDispatch();

  const { language} = useAll()
  const [lang, setLang] = useState(langUA)

  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])

  const handleAddAvatar = e => {
    setEdit(false);
    setFileInput(false);

    const { name, phone = '', birthday = '', location = '', email = '' } = user;

    const avatar = petPhoto;
    const formData = new FormData();
    for (const key in { name, phone, birthday, location, email, avatar }) {
        formData.append(
            key,
            { name, phone, birthday, location, email, avatar }[key]
        );
    }
    dispatch(operations.fetchUpdateUser(formData))
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
            //  .unwrap().then(originalPromiseResult => {
            // Notify.success(`${originalPromiseResult.user.name} welcome back!`);
            //   })
            //   .catch(() => {
            // Notify.failure('Incorrect login or password');
            //   });
        });
};


  return (
    <UserFormWrap>
      <UserPhotoWrap  className='UserPhotoWrap' >
      <img/>
      <ImageControls>
                            {edit && petPhoto ? (
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
                        </ImageControls>
      </UserPhotoWrap>
   
    <FormStyled className='FormStyled'>
      <div>
        <LabelStyled >Name:</LabelStyled>
        <InputStyled type="text" name="name"  />
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

      <OutButton  
      className="logoutBtn" >
         <MdOutlineLogout /> Log Out</OutButton>
      {/* <Button
      className="saveBtn"
      type="submit">Save</Button> */}

    </FormStyled>

      <FormEditor>
      {iconPen}
      </FormEditor>

   </UserFormWrap>
      
  )
}

export default FormByMaket
