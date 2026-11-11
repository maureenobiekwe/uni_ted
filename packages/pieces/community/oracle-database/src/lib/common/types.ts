import { StaticPropsValue } from '@united/pieces-framework';
import { oracleDbAuth } from '../common/auth';

export type OracleDbAuth = StaticPropsValue<(typeof oracleDbAuth)['props']>;
