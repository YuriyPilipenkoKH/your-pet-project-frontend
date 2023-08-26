import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { UserForm, Logout } from './UserDataForm.styled';
import fields from './fieldsValidation';
import UserDataItem from '../UserDataItem/UserDataItem';
import { useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoutIcon } from '../../../images/userPageIcons/logout.svg';
import * as Yup from 'yup';
import { toggleSell } from 'redux/sort/sortSlice';
import { authOperations } from 'redux/auth';


const cityRegex =
    /^(?:(?:[a-zA-Zа-яА-ЯіІїЇєЄ]+(?:[.'’‘`-][a-zA-Zа-яА-ЯіІїЇєЄ]+)*)\s*)+$/;
const nameRegex = /^[a-zA-Zа-яА-ЯІіїЇґҐ\s-]+$/;

const validationSchema = Yup.object({
    name: Yup.string().matches(nameRegex, 'Valid format for name is Name C...'),
    email: Yup.string().email('Valid format for email is test@gmail.com'),

    birthday: Yup.string()
    .matches(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/, 'Valid format for date is dd/mm/yyyy')
    .test('date-validation', 'Date must not be in the future', function(value) {
      if (!value) return true; // Пустая строка допустима, дополнительная валидация не требуется
      
      const parts = value.split("-");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);
      
      const currentDate = new Date();
      const inputDate = new Date(year, month - 1, day); // Месяцы в JS начинаются с 0
      
        return inputDate <= currentDate;
    }),
    
    phone: Yup.string().matches(
        /^\+\d{12}$/,
        'Valid format for phone is +380123456789'
    ),

    location: Yup.string().matches(
        cityRegex,
        'Valid format for "city" is "Brovary"'
    ),
});

const UserDataForm = ({ user, onSubmit }) => {
    const [initialState, setInitialState] = useState({
        name: '',
        email: '',
        birthday: '',
        phone: '',
        location: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signOut = () => {
        dispatch(toggleSell());
        dispatch(authOperations.logOut());
        navigate('/login')
    };

    useEffect(() => {
        if (user) {
            setInitialState(prevState => {
                const newState = {
                    ...user,
                    name: user.name || '',
                    email: user.email || '',
                    birthday: user.birthday || '',
                    phone: user.phone || '',
                    location: user.location || '',
                };

                if (user.birthday && isValidDate(user.birthday)) {
                    newState.birthday = user.birthday; 
                }
                return newState;
            });
        }
    }, [user]);

    function isValidDate(dateString) {
        const dateRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
        return dateRegex.test(dateString);
    }

    const [usernameIsActive, setUsernameIsActive] = useState(true);
    const [emailIsActive, setEmailIsActive] = useState(true);
    const [birthdayIsActive, setBirthdayIsActive] = useState(true);
    const [phoneIsActive, setPhoneIsActive] = useState(true);
    const [cityIsActive, setCityIsActive] = useState(true);

    const fieldActivity = {
        name: usernameIsActive,
        email: emailIsActive,
        birthday: birthdayIsActive,
        phone: phoneIsActive,
        location: cityIsActive,
    };

    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        setUsernameIsActive(true);
        setEmailIsActive(true);
        setBirthdayIsActive(true);
        setPhoneIsActive(true);
        setCityIsActive(true);
    }, [user]);

    const countActiveButtons = () => {
        let count = 0;
        if (usernameIsActive) count++;
        if (emailIsActive) count++;
        if (birthdayIsActive) count++;
        if (phoneIsActive) count++;
        if (cityIsActive) count++;

        if (count === 5) {
            return true;
        } else {
            return false;
        }
    };

    const handleClick = name => {

        if (countActiveButtons()) {
            switch (name) {
                case 'name':
                    setUsernameIsActive(false);
                    break;
                case 'email':
                    setEmailIsActive(false);
                    break;
                case 'birthday':
                    setBirthdayIsActive(false);
                    break;
                case 'phone':
                    setPhoneIsActive(false);
                    break;
                case 'location':
                    setCityIsActive(false);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialState}
            validationSchema={validationSchema}
            validateOnChange={true}
            validateOnBlur={true}
        >
            {formik => (
                <UserForm>
                    {Object.entries(fields).map(([name, field]) => (
                        <UserDataItem
                            key={name}
                            value={formik.values[name]}
                            formik={formik}
                            name={name}
                            isdisabled={fieldActivity[name]}
                            handleClick={handleClick}
                            formErrors={formErrors}
                            setFormErrors={setFormErrors}
                            onSubmit={onSubmit}
                            {...field}
                        />
                    ))}
                    <Logout onClick = {signOut}                      
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
