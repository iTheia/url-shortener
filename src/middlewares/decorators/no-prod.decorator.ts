import { NoProdGuard } from '@middlewares/guards/no-prod.guard';
import { applyDecorators, UseGuards } from '@nestjs/common';

export const NoProd = () => {
  return applyDecorators(UseGuards(NoProdGuard));
};
