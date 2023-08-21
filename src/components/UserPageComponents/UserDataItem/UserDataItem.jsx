import {
    FormWrapper,
    FormItem,
    FormLabel,
    EditInpuButton,
    FormInput,
    InputName,
    EditIc,
    // ConfirmIcon,
    // ErrorContainer,
} from './UserDataItem.styled'

const UserDataItem = ({
    label,
    name,
    value,
    // isdisabled,
    // handleClick,
    formik,
    // formErrors,
    // setFormErrors,
    // onSubmit,
    ...props
}) => {

    return (
        <FormWrapper>
            <FormItem>
                <InputName>{label}</InputName>
                {/* <FormLabel htmlFor={id}></FormLabel> */}
                <FormLabel></FormLabel>
                <EditInpuButton
                    type="button"
                    //on click
                >
                    <EditIc />
                </EditInpuButton>
                <FormInput
                    autoComplete="off"
                    // id={id}
                    name={name}
                    // on change
                    onBlur={formik.handleBlur}
                    value={formik.values[name]}
                    // active or not
                    touched={
                        formik.touched[name]
                            ? formik.touched[name].toString()
                            : ''
                    }
                    error={formik.errors[name]}
                    {...props}
                />
            </FormItem>
        </FormWrapper>
    );
};

export default UserDataItem;
