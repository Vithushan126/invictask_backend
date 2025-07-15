// apps/api-gateway/src/global.d.ts
import { Request } from 'express';

declare module 'express' {
  export interface Request {
    user?: any;
  }
}
