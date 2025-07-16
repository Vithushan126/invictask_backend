import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ProxyService, Method } from '../services/proxy.service';

@Controller('auth')
export class AuthRoute {
  constructor(private readonly proxy: ProxyService) {}

  @All('*path')
  async handle(@Req() req: Request, @Res() res: Response) {
    const result = await this.proxy.forwardRequest(
      `http://auth-service:3001${req.originalUrl}`,
      req.method.toLowerCase() as Method,
      req.body,
      req.headers,
    );
    return res.status(result.status).send(result.data);
  }
}
