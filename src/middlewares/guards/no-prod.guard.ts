import { CanActivate, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';

@Injectable()
export class NoProdGuard implements CanActivate {
  constructor(private config: ConfigService) {}
  canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return this.config.get('env') !== 'prod';
  }
}
