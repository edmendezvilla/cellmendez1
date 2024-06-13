import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PhonesModule } from './phones/phones.module';

@Module({
  imports: [PrismaModule, PhonesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

