
import { Request } from 'express';

declare module 'express' {
  export interface Request {
    user?: any;
  }
}
