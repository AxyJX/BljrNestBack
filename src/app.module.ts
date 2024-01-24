import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, UserModule, TypeOrmModule.forRoot({
    "type": "mariadb",
    "host": "localhost",
    "port": 6969,
    "username": "root",
    "password": "12345",
    "database": "authinfo",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  })],
})
export class AppModule {}
