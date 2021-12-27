import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { urlShortSchema } from '@const/schemas';

@Injectable()
export class ShortValidationPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const validation = urlShortSchema.validate(value);
    if (validation.error) {
    }
    return validation.value;
  }
}
