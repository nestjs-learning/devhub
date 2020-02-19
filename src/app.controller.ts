import { Controller, Get, Res } from '@nestjs/common';
import { NextResponse } from 'nest-next-module';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get("/index")
  index(@Res() res: NextResponse) {
    return res.nextRender('/index');
  }
}
