import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '@/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE!,
      host: process.env.DB_HOST!,
      password: process.env.DB_PASSWORD!,
      port: Number(process.env.DB_PORT!),
      username: process.env.DB_USERNAME!,
      synchronize: process.env.NODE_ENV === 'development',
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
