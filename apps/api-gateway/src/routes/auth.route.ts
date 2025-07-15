
import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProxyService } from '../services/proxy.service';

@Controller('auth')
export class AuthRoute {
  constructor(private readonly proxy: ProxyService) {}

  @All('*path') // <- correct wildcard route param syntax for NestJS v10+
  async handle(@Req() req: Request, @Res() res: Response) {
    const result = await this.proxy.forwardRequest(
      `http://auth-service:3001${req.originalUrl}`,
      req.method,
      req.body,
      req.headers,
    );
    return res.status(result.status).send(result.data);
  }
}
