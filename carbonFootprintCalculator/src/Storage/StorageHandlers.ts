import {STORAGE_KEYS} from './StorageKeys.Enum';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StoreData = async (
  key: STORAGE_KEYS,
  value: string,
): Promise<void> => {
  AsyncStorage.setItem(key, value)
    .then(() => {
      console.log('Data successfully saved', key, value);
    })
    .catch(error => {
      console.error(
        'Failed to save the data to the storage (' + key + '|' + value + ')',
        error,
      );
    });
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data successfully saved', key, value);
  } catch (e) {
    console.error('Failed to save the data to the storage', key, value);
  }
};

export const RetrieveData = async (
  key: STORAGE_KEYS,
): Promise<string | null> => {
  AsyncStorage.getItem(key)
    .then((value: string | null) => {
      return value;
    })
    .catch(error => {
      console.log(
        'Error while fetching Data from Storage (key: ' + key + '):',
        error,
      );
    });

  return null;
};

export const RemoveItem = async (key: STORAGE_KEYS): Promise<string | null> => {
  AsyncStorage.removeItem(key)
    .then(() => {
      console.log('Item with key: ' + key + ' successfully removed.');
    })
    .catch(error => {
      console.error(
        'Error while removing Data from Storage (key: ' + key + '):',
        error,
      );
    });

  return null;
};

export const ClearStorage = async () => {
  AsyncStorage.clear()
    .then(() => {
      console.log('Storage was cleared successfully');
    })
    .catch(error => {
      console.error('Error while clearing Storage:', error);
    });
};
