import React, { useState } from 'react';
import {
    ButtonSex,
    Form,
    IconCrossValidate,
    IconOkey,
    ImagePet,
    ImageWrapper,
    InputForAddPet,
    InputUploadImage,
    ItemOption,
    LabelForAdd,
    LabelForAddImage,
    ListOption,
    PlusImage,
    TextValidation,
    Textarea,
    Title,
    TypeInput,
    WrapperForInputInMoreInformationOne,
    WrapperForInputInMoreInformationTwo,
    WrapperForMoreInformation,
    WrapperForProgresMoreInformation,
    WrapperNextBackButton,
} from '../../../Forms.styled';
import { Button, ButtonTransparent } from '../../../../Button/Button';
import { BiArrowBack } from 'react-icons/bi';
import {
    IconCross,
    iconFemale,
    iconMale,
    iconPawprint,
} from '../../../../../images/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { useLocalStorage } from 'hooks/useLocalStaoreage';

const schema = object({
    coment: string()
        .required('Comment is required')
        .matches(
            /^[a-zA-Z0-9\s\W]{0,120}$/,
            'Comment max 120 characters, letters, numbers, symbols allowed'
        )
        .max(120, 'Comment must be at most 120 characters'),
    location: string()
        .required('Location is required')
        .matches(
            /^[A-Za-z\s]+$/,
            "The string may contain only letters and spaces. Examples: 'Kyiv,' 'New York,' 'San Francisco.'"
        )
        .max(120, 'Comment must be at most 120 characters'),
    price: string()
        .required('Price is required')
        .matches(
            /^[1-9]\d*$/,
            'Comment max 120 characters, letters, numbers, symbols allowed'
        ),
}).required();

export default function MoreInfo({
    children,
    beforeForm,
    stepNumber,
    deliveryDataPet,
}) {
    const [isComentValid, setIsComentValid] = useState(false);
    const [coment, setComent] = useLocalStorage('comentSell', '');
    const [isLocationValid, setIsLocationValid] = useState(false);
    const [location, setLocation] = useLocalStorage('locationSell', '');
    const [isPriceValid, setIsPriceValid] = useState(false);
    const [price, setPrice] = useLocalStorage('priceSell', '');
    const [imageURL, setImageURL] = useLocalStorage('imageUrlSell', '');
    const [imageError, setImageError] = useState(null);
    const [activeError, setActiveError] = useState(null);
    const [active, setActive] = useLocalStorage('activeSell', '');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            coment: '',
            imageURL: '',
            location: '',
            price: '',
        },
        resolver: yupResolver(schema),
    });

    const handleImageChange = e => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 3 * 1024 * 1024) {
                setImageError('Image size should be less than 3MB');
            } else {
                setImageError(null);
                setImageURL(URL.createObjectURL(file));
            }
        }
    };

    const reset = () => {
        setComent('');
        setIsComentValid(false);
        setLocation('');
        setIsLocationValid(false);
        setPrice('');
        setIsPriceValid(false);
        setImageError(null);
        setImageURL('');
        setActive('');
    };
    const deliveryData = data => {
        if (active === '') {
            setActiveError('Sex required');
            return;
        }
        const { imageURL, coment } = data;
        const image = imageURL[0];
        deliveryDataPet({
            comments: coment,
            petAvatar: image,
            category: 'my ads',
            location,
            sex: active,
            price,
        });
        reset();
    };

    return (
        <Form addPetMoreInformation addPet>
            <Title addPetMoreInformation>Add pet for sale</Title>
            <WrapperForProgresMoreInformation>
                {children}
            </WrapperForProgresMoreInformation>
            <form
                onSubmit={handleSubmit(deliveryData)}
                encType="multipart/form-data"
            >
                <WrapperForMoreInformation addPetMoreInformation>
                    <WrapperForInputInMoreInformationOne>
                        <TypeInput>The Sex</TypeInput>
                        <ListOption addPetMoreInformation>
                            <ItemOption addPetMoreInformation>
                                <ButtonSex
                                    activeSex={active}
                                    sex={'female'}
                                    addPetMoreInformation
                                    onClick={() => setActive('female')}
                                    type="button"
                                >
                                    {iconFemale} Female
                                </ButtonSex>
                            </ItemOption>
                            <ItemOption addPetMoreInformation>
                                <ButtonSex
                                    activeSex={active}
                                    sex={'male'}
                                    onClick={() => setActive('male')}
                                    type="button"
                                >
                                    {iconMale} Male
                                </ButtonSex>
                            </ItemOption>
                        </ListOption>
                        {activeError && (
                            <TextValidation activeSex>
                                {activeError}
                            </TextValidation>
                        )}
                        <LabelForAddImage addPetMoreInformation>
                            <TypeInput addImage addPetMoreInformation>
                                Load the pet’s image:
                            </TypeInput>
                            <ImageWrapper>
                                <InputUploadImage
                                    {...register('imageURL')}
                                    aria-invalid={
                                        errors.imageURL ? 'true' : 'false'
                                    }
                                    type="file"
                                    required
                                    onChange={handleImageChange}
                                ></InputUploadImage>
                                {!imageURL && (
                                    <>
                                        <PlusImage
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 182 182"
                                            fill="none"
                                        >
                                            <rect
                                                width="182"
                                                height="182"
                                                rx="40"
                                                fill="#CCE4FB"
                                            />
                                            <path
                                                d="M92 115V91M92 91V67M92 91H116.375M92 91H67.625"
                                                stroke="#54ADFF"
                                            />
                                        </PlusImage>
                                    </>
                                )}
                                {imageURL && <ImagePet src={imageURL} />}
                            </ImageWrapper>
                            {imageError && (
                                <TextValidation>{imageError}</TextValidation>
                            )}
                        </LabelForAddImage>
                    </WrapperForInputInMoreInformationOne>
                    <WrapperForInputInMoreInformationTwo>
                        <LabelForAdd>
                            <TypeInput>Location</TypeInput>
                            <InputForAddPet
                                {...register('location')}
                                aria-invalid={
                                    errors.location ? 'true' : 'false'
                                }
                                placeholder="Type of location"
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
                            ></InputForAddPet>
                            {isLocationValid && (
                                <IconOkey
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    addPet
                                    addPetMoreInformation
                                >
                                    <path
                                        d="M20.0001 7L9.0001 18L4 13"
                                        stroke="#00C3AD"
                                    />
                                </IconOkey>
                            )}
                            {errors.location && (
                                <>
                                    <TextValidation addPet>
                                        {errors.location.message}
                                    </TextValidation>
                                    <IconCrossValidate
                                        addPetMoreInformation
                                        onClick={() => {
                                            setIsLocationValid(false);
                                            setLocation('');
                                        }}
                                        type="button"
                                        addPet
                                    >
                                        {IconCross}
                                    </IconCrossValidate>
                                </>
                            )}
                        </LabelForAdd>
                        <LabelForAdd>
                            <TypeInput>Price</TypeInput>
                            <InputForAddPet
                                {...register('price')}
                                aria-invalid={errors.price ? 'true' : 'false'}
                                placeholder="Type of price"
                                type="text"
                                value={price}
                                style={{
                                    border: errors.price
                                        ? '1px solid var(--red)'
                                        : isPriceValid && !errors.price
                                        ? '1px solid var(--green)'
                                        : '1px solid var(--blue)',
                                }}
                                onChange={e => {
                                    const isValid = /^[1-9]\d*$/.test(
                                        e.target.value
                                    );
                                    setIsPriceValid(isValid);
                                    setPrice(e.target.value);
                                    if (isValid) {
                                        errors.price = undefined;
                                    }
                                }}
                            ></InputForAddPet>
                            {isPriceValid && (
                                <IconOkey
                                    addPetMoreInformation
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    addPet
                                >
                                    <path
                                        d="M20.0001 7L9.0001 18L4 13"
                                        stroke="#00C3AD"
                                    />
                                </IconOkey>
                            )}
                            {errors.price && (
                                <>
                                    <TextValidation addPet>
                                        {errors.price.message}
                                    </TextValidation>
                                    <IconCrossValidate
                                        addPetMoreInformation
                                        onClick={() => {
                                            setIsPriceValid(false);
                                            setPrice('');
                                        }}
                                        type="button"
                                        addPet
                                    >
                                        {IconCross}
                                    </IconCrossValidate>
                                </>
                            )}
                        </LabelForAdd>
                        <LabelForAdd coment addPetMoreInformation>
                            <TypeInput>Comments</TypeInput>
                            <Textarea
                                {...register('coment')}
                                aria-invalid={errors.coment ? 'true' : 'false'}
                                {...register('coment', {
                                    maxLength: 120,
                                })}
                                placeholder="Type of pet"
                                type="text"
                                value={coment}
                                spellCheck="false"
                                data-grame="false"
                                style={{
                                    border: errors.coment
                                        ? '1px solid var(--red)'
                                        : isComentValid && !errors.coment
                                        ? '1px solid var(--green)'
                                        : '1px solid var(--blue)',
                                }}
                                onChange={e => {
                                    const isValid =
                                        /^[a-zA-Z0-9\s\W]{0,120}$/.test(
                                            e.target.value
                                        );
                                    setIsComentValid(isValid);
                                    setComent(e.target.value);
                                    const textarea = e.target;
                                    textarea.style.height = 'auto';
                                    textarea.style.height =
                                        textarea.scrollHeight + 'px';
                                    if (isValid) {
                                        errors.coment = undefined;
                                    }
                                }}
                            ></Textarea>

                            {isComentValid && !errors.coment && (
                                <IconOkey
                                    addPetMoreInformation
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    addPet
                                >
                                    <path
                                        d="M20.0001 7L9.0001 18L4 13"
                                        stroke="#00C3AD"
                                    />
                                </IconOkey>
                            )}
                            {errors.coment && (
                                <>
                                    <TextValidation addPet>
                                        {errors.coment.message}
                                    </TextValidation>
                                    <IconCrossValidate
                                        addPetMoreInformation
                                        onClick={() => {
                                            setIsComentValid(false);
                                            setComent('');
                                        }}
                                        type="button"
                                        addPet
                                    >
                                        {IconCross}
                                    </IconCrossValidate>
                                </>
                            )}
                        </LabelForAdd>
                    </WrapperForInputInMoreInformationTwo>
                </WrapperForMoreInformation>
                <WrapperNextBackButton addPetMoreInformation>
                    <ButtonTransparent addPet onClick={() => beforeForm()}>
                        <BiArrowBack /> {stepNumber > 1 ? 'Back' : 'Cancel'}
                    </ButtonTransparent>
                    <Button
                        stepNumber={stepNumber}
                        addPet
                        addPetMoreInformation
                        type="submit"
                    >
                        {stepNumber > 2 ? 'Done' : 'Next'} {iconPawprint}
                    </Button>
                </WrapperNextBackButton>
            </form>
        </Form>
    );
}
