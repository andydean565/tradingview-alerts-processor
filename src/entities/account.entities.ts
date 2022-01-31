import {
  IsString,
  IsBoolean,
  IsIn,
  IsOptional,
  ValidateIf,
  IsNotEmpty,
  IsNotIn
} from 'class-validator';
import isBoolean from 'validator/lib/isBoolean';
import { ExchangeId, EXCHANGES } from '../constants/exchanges.constants';

export class Account {
  @IsString()
  apiKey: string;

  @IsString()
  secret: string;

  @IsIn(EXCHANGES)
  @IsString()
  exchange: ExchangeId;

  @IsString()
  stub: string;

  @IsString()
  @IsOptional()
  subaccount?: string;

  @IsString()
  @ValidateIf((account: Account) => account.exchange === ExchangeId.KuCoin)
  passphrase?: string;

  @IsBoolean()
  @IsOptional()
  sandbox?: boolean;
}

export class AccountId {
  @IsString()
  @IsNotEmpty()
  @IsNotIn(['/', '*'])
  id: string;
}
