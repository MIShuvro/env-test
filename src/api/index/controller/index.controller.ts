import { Controller, Get } from '@nestjs/common';

@Controller()
export class IndexController {

  @Get()
  index() {
    return {
      app: {
        env: process.env
      }
    };
  }
}