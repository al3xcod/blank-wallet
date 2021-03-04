import Constants from 'utils/constants';

const preloadState = () => {
  return Object.keys(Constants.pastTransactions).map((key: string) => {
    return {
      id: Number(key),
      from: Constants.publicAddress,
      to: Constants.pastTransactions[key].recipient,
      value: Number(Constants.pastTransactions[key].amount),
      timestamp: new Date(Constants.pastTransactions[key].date),
    };
  });
};

export default preloadState;
