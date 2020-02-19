import { Module } from '@nestjs/common';
import { NestNextModule } from 'nest-next-module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutherModule } from './auther/auther.module';

@Module({
  imports: [
    AutherModule,
    NestNextModule.forRoot({ dev: true,  dir: './ui'}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
