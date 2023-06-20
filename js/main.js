const FOTO_ID = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const COMMENT_ID = [1,2,3,4,5,6,7,8,9,10];

const AVATAR_NUMBER = [1,2,3,4,5,6];

const FOTO_DESCRIPTIONS = [
  'отдых',
  'Море',
  'чил',
  'travel',
  'Красота',
];

const FOTO_COMMENTS_LIST = [
  'Всё отлично!',
  'В целом всё неплохо', 'Но не всё',
  'Когда вы делаете фотографию',
  'хорошо бы убирать палец из кадра',
  'В конце концов это просто непрофессионально',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!)',
];

const NAMES = ['Иван', 'Сергей', 'Альберт', 'Анатолий','Светлана', 'Ольга'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createWizard = () => ({
  id: getRandomArrayElement(FOTO_ID),
  url: `photos/{${getRandomArrayElement(FOTO_ID)}}.jpg`,
  description: getRandomArrayElement(FOTO_DESCRIPTIONS),
  likes: Math.floor(Math.random() * (200 - 15)),
  comments: {
    id: getRandomArrayElement(COMMENT_ID),
    avatar: `img/avatar-${AVATAR_NUMBER}.svg`,
    message: getRandomArrayElement(FOTO_COMMENTS_LIST),
    name: getRandomArrayElement(NAMES),
  }
});

const similarWizards = Array.from({length: 25}, createWizard);
console.log(similarWizards);


