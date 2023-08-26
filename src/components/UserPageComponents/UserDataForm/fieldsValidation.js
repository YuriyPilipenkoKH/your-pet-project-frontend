const fields = {
    name: {
        type: 'text',
        name: 'name',
        label: 'Name:',
        placeholder: 'Your name',
    },
    email: {
        type: 'email',
        name: 'email',
        label: 'Email:',
        placeholder: 'user@mail.com',
    },
    birthday: {
        type: 'text',
        name: 'birthday',
        label: 'Birthday:',
        placeholder: '00-00-0000',
    },
    phone: {
        type: 'tel',
        name: 'phone',
        label: 'Phone:',
        placeholder: '+38000000000',
    },
    location: {
        type: 'text',
        name: 'location',
        label: 'City:',
        placeholder: 'Kyiv',
    },
};

export default fields;
