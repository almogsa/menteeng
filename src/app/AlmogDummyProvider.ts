import { Observable } from 'rxjs/Observable';
import {NbAbstractAuthProvider, NbAuthResult, NbDummyAuthProvider} from '@nebular/auth';

export interface AlDummyAuthProviderConfig {
  delay?: 0;
  alwaysFail?: boolean;
}
export  class AlmogDummyAuthProvider extends NbDummyAuthProvider {

  protected createDummyResult(data?: any): NbAuthResult {
    if (this.getConfigValue('alwaysFail')) {
      // TODO we dont call tokenService clear during logout in case result is not success
      return new NbAuthResult(false,
        this.createFailResponse(data),
        null,
        ['Something went wrong.']);
    }

    // TODO is it missed messages here, is it token should be defined

    return new NbAuthResult(true, {data: data, token: '12345'}, '/pages', ['Successfully logged in.'], [], data.email);
  }
}
