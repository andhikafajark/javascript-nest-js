import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('/user1')
export class AppController {
  @Get()
  getAll() {
    return { name: 'User' };
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }

  @Get('/:id')
  getOne(@Req() req: Request, @Param() params: { id: number }) {
    return params;
  }

  @Patch('/:id')
  update(@Param() params: { id: number }) {
    return params;
  }

  @Delete('/:id')
  delete(@Param() params: { id: number }) {
    return params;
  }
}
