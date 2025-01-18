import lang from './translation/en_us';

const getLabel = (key) => {
  try {
    const lowerCaseKey = key
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '_')
      .replace(/ /g, '_');
    
    // Check if translation exists in imported language file
    if (lang[lowerCaseKey]) {
      return lang[lowerCaseKey];
    }

    // If no translation found, convert the key to a readable label
    const removeUnderscoreFromKey = key.replace(/_/g, ' ').split(' ');
    const capitalizedWords = removeUnderscoreFromKey.map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    );
    
    return capitalizedWords.join(' ');
  } catch (error) {
    console.error(
      `Translation error for key "${key}". Please add translation to language file.`
    );
    return 'No translation';
  }
};

const useLanguage = () => {
  const translate = (value) => getLabel(value);
  return translate;
};

export default useLanguage;