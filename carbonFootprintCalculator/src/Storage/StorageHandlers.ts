import {STORAGE_KEYS} from './StorageKeys.Enum';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyValuePair} from '@react-native-async-storage/async-storage/lib/typescript/types';

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

export const RetrieveDataFromStorage = async (
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

export const RetrieveAllC02Data = async (): Promise<StorageKeyResult> => {
  const result = await AsyncStorage.multiGet([
    STORAGE_KEYS.ELECTRICITY,
    STORAGE_KEYS.LIVING,
    STORAGE_KEYS.FOOD,
    STORAGE_KEYS.TRAVEL,
    STORAGE_KEYS.MOBILITY,
    STORAGE_KEYS.FLIGHT_HOURS,
  ]);

  console.log('Success retrieving all data', result);
  const mappedData = MapStoreDataToKey(result);
  console.log('mappedData', mappedData);
  return mappedData;
  // } catch (error) {
  //   console.error('Error retrieving all data', error);
  // }
};

const MapStoreDataToKey = (
  resultData: readonly KeyValuePair[],
): StorageKeyResult => {
  return {
    [STORAGE_KEYS.MOBILITY]: (resultData.find(kvp => {
      return kvp[0] === STORAGE_KEYS.MOBILITY;
    }) || [null, null])[1],
    [STORAGE_KEYS.TRAVEL]: (resultData.find(
      kvp => kvp[0] === STORAGE_KEYS.TRAVEL,
    ) || [null, null])[1],
    [STORAGE_KEYS.FLIGHT_HOURS]: (resultData.find(
      kvp => kvp[0] === STORAGE_KEYS.FLIGHT_HOURS,
    ) || [null, null])[1],
    [STORAGE_KEYS.FOOD]: (resultData.find(
      kvp => kvp[0] === STORAGE_KEYS.FOOD,
    ) || [null, null])[1],
    [STORAGE_KEYS.LIVING]: (resultData.find(
      kvp => kvp[0] === STORAGE_KEYS.LIVING,
    ) || [null, null])[1],
    [STORAGE_KEYS.ELECTRICITY]: (resultData.find(
      kvp => kvp[0] === STORAGE_KEYS.ELECTRICITY,
    ) || [null, null])[1],
  };
};

export const RemoveItemFromStorage = async (
  key: STORAGE_KEYS,
): Promise<void> => {
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

export type StorageKeyResult = {
  [key in STORAGE_KEYS]: string | null;
};
