import {Contact} from '@interfaces/contacts';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
};

export const genereateDetailList = (contact: Contact) => {
  const {phone, address} = contact;
  const detailList = [];
  phone?.home &&
    detailList.push({
      id: '1',
      title: 'PHONE',
      textItems: [{text: phone.home, type: 'Home'}],
    });
  phone?.mobile &&
    detailList.push({
      id: '2',
      title: 'PHONE',
      textItems: [{text: phone.mobile, type: 'Mobile'}],
    });
  phone?.work &&
    detailList.push({
      id: '3',
      title: 'PHONE',
      textItems: [{text: phone.work, type: 'Work'}],
    });
  detailList.push({
    id: '4',
    title: 'ADDRESS',
    textItems: [
      {text: address.street},
      {
        text: `${address.city}, ${address.state} ${address.zipCode}, ${address.country}`,
      },
    ],
  });
  contact?.birthdate &&
    detailList.push({
      id: '5',
      title: 'BIRTHDATE',
      textItems: [{text: formatDate(contact.birthdate)}],
    });
  contact.emailAddress &&
    detailList.push({
      id: '6',
      title: 'EMAIL',
      textItems: [{text: contact.emailAddress}],
    });
  return detailList;
};
