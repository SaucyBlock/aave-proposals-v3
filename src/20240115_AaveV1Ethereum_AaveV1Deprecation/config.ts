import {ConfigFile} from '../../generator/types';
export const config: ConfigFile = {
  rootOptions: {
    author: 'BGD Labs @bgdlabs',
    pools: ['AaveV1Ethereum'],
    title: 'Aave V1 Deprecation',
    shortName: 'AaveV1Deprecation',
    date: '20240115',
    discussion:
      'https://governance.aave.com/t/temp-check-bgd-further-aave-v1-deprecation-strategy/15893',
    snapshot:
      'https://snapshot.org/#/aave.eth/proposal/0x7451f00809986c7cb8cce7ef4587efdfedad06089ebf2851d64122d00b035d9c',
  },
  poolOptions: {AaveV1Ethereum: {configs: {OTHERS: {}}, cache: {blockNumber: 19011848}}},
};
